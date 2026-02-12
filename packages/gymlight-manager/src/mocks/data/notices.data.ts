import type {
  INoticeDetailResponse,
  INoticeResponse,
  NoticeStatusType,
  NoticeType,
  IAttachmentResponse,
} from '@/types';

import { mockBranches } from './branches.data';
import { mockUsers } from './users.data';

const getBranchInfo = (branchId?: number) => {
  const branch = branchId ? mockBranches.find((b) => b.branchId === branchId) : undefined;
  return {
    branchId: branch?.branchId ?? mockBranches[0].branchId,
    branchName: branch?.name ?? mockBranches[0].name,
  };
};

const getAuthorInfo = (authorId?: number) => {
  const author = authorId ? mockUsers.find((u) => u.userId === authorId) : undefined;
  return {
    authorId: author?.userId ?? mockUsers[0].userId,
    authorName: author?.name ?? mockUsers[0].name,
  };
};

const buildNotice = (
  noticeId: number,
  title: string,
  type: NoticeType,
  status: NoticeStatusType,
  startDate: string,
  endDate: string,
  createdAt: string,
  updatedAt: string,
  branchId?: number,
  authorId?: number,
  hasAttachment: boolean = false,
): INoticeResponse => {
  const { branchId: resolvedBranchId, branchName } = getBranchInfo(branchId);
  const { authorId: resolvedAuthorId, authorName } = getAuthorInfo(authorId);

  return {
    noticeId,
    title,
    type,
    status,
    startDate,
    endDate,
    hasAttachment,
    createdAt,
    updatedAt,
    branchId: resolvedBranchId,
    branchName,
    authorId: resolvedAuthorId,
    authorName,
  };
};

const attachmentMap: Record<number, IAttachmentResponse[]> = {
  1: [
    {
      attachmentId: 1,
      noticeId: 1,
      fileType: 'PDF',
      fileName: '2025-02-operation-guide.pdf',
      url: 'https://files.gymlight.dev/notices/2025-02-operation-guide.pdf',
    },
  ],
  2: [
    {
      attachmentId: 2,
      noticeId: 2,
      fileType: 'JPG',
      fileName: 'new-member-event.jpg',
      url: 'https://files.gymlight.dev/notices/new-member-event.jpg',
    },
  ],
  4: [
    {
      attachmentId: 3,
      noticeId: 4,
      fileType: 'PNG',
      fileName: 'facility-check.png',
      url: 'https://files.gymlight.dev/notices/facility-check.png',
    },
  ],
};

export const mockNoticeList: INoticeResponse[] = [
  buildNotice(
    1,
    '[공지] 2월 설 연휴 운영 안내',
    '공지',
    '활성화',
    '2025-01-25',
    '2025-02-12',
    '2025-01-10T09:00:00Z',
    '2025-01-15T09:00:00Z',
    1,
    2,
    true,
  ),
  buildNotice(
    2,
    '[이벤트] 신규 회원 등록 프로모션',
    '이벤트',
    '활성화',
    '2025-02-01',
    '2025-03-15',
    '2025-01-20T02:30:00Z',
    '2025-01-20T04:00:00Z',
    1,
    2,
    true,
  ),
  buildNotice(
    3,
    '[공지] 3월 강습 스케줄 안내',
    '공지',
    '활성화',
    '2025-02-20',
    '2025-03-31',
    '2025-02-05T06:00:00Z',
    '2025-02-07T05:00:00Z',
    2,
    4,
    false,
  ),
  buildNotice(
    4,
    '[공지] 시설 점검 안내',
    '공지',
    '비활성화',
    '2025-02-10',
    '2025-02-15',
    '2025-02-01T08:30:00Z',
    '2025-02-03T02:00:00Z',
    3,
    3,
    true,
  ),
  buildNotice(
    5,
    '[이벤트] 친구 추천 적립 이벤트',
    '이벤트',
    '활성화',
    '2025-02-12',
    '2025-04-01',
    '2025-02-10T09:00:00Z',
    '2025-02-11T07:00:00Z',
    4,
    5,
    false,
  ),
  buildNotice(
    6,
    '[공지] 개인정보 처리방침 개정 안내',
    '공지',
    '활성화',
    '2025-02-01',
    '2025-02-28',
    '2025-01-28T03:00:00Z',
    '2025-02-01T03:00:00Z',
    1,
    1,
    false,
  ),
];

export const mockNoticeDetails: INoticeDetailResponse[] = mockNoticeList.map((notice) => ({
  ...notice,
  content: `${notice.title}\n\n지점과 회원님들께 안내드립니다. 세부 일정과 준비 사항을 확인해 주세요.`,
  attachments: attachmentMap[notice.noticeId] ?? [],
}));

let noticeIdCounter = mockNoticeList.length + 1;

export const findNoticeById = (noticeId: number): INoticeDetailResponse | undefined =>
  mockNoticeDetails.find((notice) => notice.noticeId === noticeId);

export const addNotice = (params: {
  title: string;
  content: string;
  type: NoticeType;
  startDate: string;
  endDate: string;
  branchId?: number;
  attachments?: IAttachmentResponse[];
}) => {
  const newNoticeId = noticeIdCounter++;
  const timestamp = new Date().toISOString();
  const hasAttachment = Boolean(params.attachments?.length);
  const { branchId, branchName } = getBranchInfo(params.branchId);
  const { authorId, authorName } = getAuthorInfo();

  const baseNotice: INoticeResponse = {
    noticeId: newNoticeId,
    title: params.title,
    type: params.type,
    status: '활성화',
    startDate: params.startDate,
    endDate: params.endDate,
    hasAttachment,
    createdAt: timestamp,
    updatedAt: timestamp,
    branchId,
    branchName,
    authorId,
    authorName,
  };

  const detailNotice: INoticeDetailResponse = {
    ...baseNotice,
    content: params.content,
    attachments: params.attachments ?? [],
  };

  mockNoticeList.unshift(baseNotice);
  mockNoticeDetails.unshift(detailNotice);

  return detailNotice;
};

export const updateNotice = (
  noticeId: number,
  updates: Partial<Pick<INoticeDetailResponse, 'title' | 'content' | 'type' | 'status' | 'startDate' | 'endDate' | 'branchId'>>,
) => {
  const targetDetail = findNoticeById(noticeId);
  if (!targetDetail) return undefined;

  const resolvedBranch = updates.branchId ? getBranchInfo(updates.branchId) : null;

  Object.assign(targetDetail, {
    ...updates,
    branchId: resolvedBranch?.branchId ?? targetDetail.branchId,
    branchName: resolvedBranch?.branchName ?? targetDetail.branchName,
    updatedAt: new Date().toISOString(),
  });

  const targetList = mockNoticeList.find((notice) => notice.noticeId === noticeId);
  if (targetList) {
    Object.assign(targetList, {
      ...updates,
      branchId: targetDetail.branchId,
      branchName: targetDetail.branchName,
      updatedAt: targetDetail.updatedAt,
    });
  }

  return targetDetail;
};

export const deleteNotice = (noticeId: number) => updateNotice(noticeId, { status: '비활성화' });
