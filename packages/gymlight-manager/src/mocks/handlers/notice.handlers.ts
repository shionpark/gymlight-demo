import { http, delay } from 'msw';

import { URLS } from '@/constants';
import type {
  IAttachmentResponse,
  INoticeDetailResponse,
  NoticeSortType,
  NoticeStatusType,
  NoticeType,
} from '@/types';

import {
  mockNoticeList,
  mockNoticeDetails,
  addNotice,
  updateNotice,
  deleteNotice,
  findNoticeById,
} from '../data/notices.data';
import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { parsePaginationParams, sliceByPagination, wrapPaginationResponse } from '../utils/pagination.utils';

const API_BASE = `*${URLS.API.PREFIX}`;

const sortNotices = (list: typeof mockNoticeList, sort?: NoticeSortType) => {
  const sorted = [...list];

  const compareDate = (key: 'createdAt' | 'updatedAt' | 'startDate' | 'endDate', asc: boolean) =>
    sorted.sort((a, b) => {
      const aDate = new Date(a[key]).getTime();
      const bDate = new Date(b[key]).getTime();
      return asc ? aDate - bDate : bDate - aDate;
    });

  switch (sort) {
    case '작성일(오름차순)':
      compareDate('createdAt', true);
      break;
    case '작성일(내림차순)':
      compareDate('createdAt', false);
      break;
    case '수정일(오름차순)':
      compareDate('updatedAt', true);
      break;
    case '수정일(내림차순)':
      compareDate('updatedAt', false);
      break;
    case '시작일(오름차순)':
      compareDate('startDate', true);
      break;
    case '시작일(내림차순)':
      compareDate('startDate', false);
      break;
    case '종료일(오름차순)':
      compareDate('endDate', true);
      break;
    case '종료일(내림차순)':
      compareDate('endDate', false);
      break;
    default:
      compareDate('createdAt', false);
  }

  return sorted;
};

const filterNotices = (url: URL) => {
  const types = url.searchParams.getAll('types') as NoticeType[];
  const statuses = url.searchParams.getAll('statuses') as NoticeStatusType[];
  const branchName = url.searchParams.get('branchName');
  const startDate = url.searchParams.get('startDate');
  const endDate = url.searchParams.get('endDate');

  return mockNoticeList.filter((notice) => {
    const matchType = types.length === 0 || types.includes(notice.type);
    const matchStatus = statuses.length === 0 || statuses.includes(notice.status);
    const matchBranch = !branchName || notice.branchName.includes(branchName);
    const matchDateRange = (() => {
      if (!startDate && !endDate) return true;
      const created = new Date(notice.createdAt).getTime();
      const from = startDate ? new Date(startDate).getTime() : -Infinity;
      const to = endDate ? new Date(endDate).getTime() : Infinity;
      return created >= from && created <= to;
    })();

    return matchType && matchStatus && matchBranch && matchDateRange;
  });
};

let attachmentIdCounter = Math.max(
  0,
  ...mockNoticeDetails.flatMap((n) => n.attachments.map((a) => a.attachmentId)),
) + 1;

const guessFileType = (fileName?: string, mimeType?: string): IAttachmentResponse['fileType'] => {
  const ext = (fileName?.split('.').pop() || '').toLowerCase();
  const mime = (mimeType || '').toLowerCase();

  const byExt: Record<string, IAttachmentResponse['fileType']> = {
    jpg: 'JPG',
    jpeg: 'JPEG',
    png: 'PNG',
    gif: 'GIF',
    pdf: 'PDF',
    doc: 'DOC',
    docx: 'DOCX',
    xls: 'XLS',
    xlsx: 'XLSX',
    ppt: 'PPT',
    pptx: 'PPTX',
    zip: 'ZIP',
    rar: 'RAR',
  };

  const byMime: Record<string, IAttachmentResponse['fileType']> = {
    'image/jpeg': 'JPG',
    'image/jpg': 'JPG',
    'image/png': 'PNG',
    'image/gif': 'GIF',
    'application/pdf': 'PDF',
    'application/msword': 'DOC',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
    'application/vnd.ms-excel': 'XLS',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
    'application/vnd.ms-powerpoint': 'PPT',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PPTX',
    'application/zip': 'ZIP',
    'application/x-rar-compressed': 'RAR',
  };

  return byExt[ext] || byMime[mime] || 'PDF';
};

export const noticeHandlers = [
  /**
   * GET /api/notices - 공지사항 목록 조회 (페이지네이션)
   */
  http.get(`${API_BASE}${URLS.API.NOTICES.RUD}`, async ({ request }) => {
    await delay(200);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);
    const sort = (url.searchParams.get('sort') || '작성일(내림차순)') as NoticeSortType;

    const filtered = filterNotices(url);
    const sorted = sortNotices(filtered, sort);
    const paginated = sliceByPagination(sorted, pageNum, pageSize);

    return wrapPaginationResponse(paginated, pageNum, pageSize, filtered.length);
  }),

  /**
   * GET /api/notices/:noticeId - 공지사항 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.NOTICES.RUD}/:noticeId`, async ({ params }) => {
    await delay(200);

    const noticeId = Number(params.noticeId);
    const notice = findNoticeById(noticeId);

    if (!notice) return notFoundResponse('공지사항을 찾을 수 없습니다.');

    return wrapResponse(notice);
  }),

  /**
   * POST /api/notices/create - 공지사항 생성
   */
  http.post(`${API_BASE}${URLS.API.NOTICES.CREATE}`, async ({ request }) => {
    await delay(300);

    const formData = await request.formData();

    const title = formData.get('title')?.toString() ?? '제목 없음';
    const content = formData.get('content')?.toString() ?? '';
    const type = (formData.get('type')?.toString() ?? '공지') as NoticeType;
    const startDate = formData.get('startDate')?.toString() ?? new Date().toISOString();
    const endDate = formData.get('endDate')?.toString() ?? new Date().toISOString();
    const branchIdRaw = formData.get('branchId');
    const branchId = branchIdRaw ? Number(branchIdRaw) : undefined;

    const attachmentFiles = formData.getAll('attachments');
    const attachments: IAttachmentResponse[] = attachmentFiles.map((file) => {
      const typedFile = file as File;
      const fileName = typedFile.name || 'attachment';
      return {
        attachmentId: attachmentIdCounter++,
        noticeId: -1, // 채워질 예정
        fileType: guessFileType(fileName, typedFile.type),
        fileName,
        url: `mock://attachments/${Date.now()}-${fileName}`,
      };
    });

    const newNotice = addNotice({
      title,
      content,
      type,
      startDate,
      endDate,
      branchId,
      attachments,
    });

    // update noticeId into attachment responses
    newNotice.attachments.forEach((attachment) => {
      if (attachment.noticeId < 0) {
        attachment.noticeId = newNotice.noticeId;
      }
    });

    return wrapResponse(newNotice);
  }),

  /**
   * PATCH /api/notices/:noticeId - 공지사항 수정
   */
  http.patch(`${API_BASE}${URLS.API.NOTICES.RUD}/:noticeId`, async ({ params, request }) => {
    await delay(200);

    const noticeId = Number(params.noticeId);
    const body = ((await request.json()) || {}) as Partial<
      Pick<
        INoticeDetailResponse,
        'title' | 'content' | 'type' | 'status' | 'startDate' | 'endDate' | 'branchId'
      >
    >;

    const updated = updateNotice(noticeId, body);
    if (!updated) return notFoundResponse('공지사항을 찾을 수 없습니다.');

    return wrapResponse(updated);
  }),

  /**
   * PATCH /api/notices/:noticeId/delete - 공지사항 삭제(비활성화)
   */
  http.patch(`${API_BASE}${URLS.API.NOTICES.RUD}/:noticeId/delete`, async ({ params }) => {
    await delay(200);

    const noticeId = Number(params.noticeId);
    const updated = deleteNotice(noticeId);
    if (!updated) return notFoundResponse('공지사항을 찾을 수 없습니다.');

    return wrapResponse(updated);
  }),
];
