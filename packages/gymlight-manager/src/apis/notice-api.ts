import { client } from './client';

import { URLS } from '@/constants';
import { createFormData, fileHeaders } from '@/utils';
import type {
  ICreateNoticeRequest,
  INoticeDetailResponse,
  INoticeIdParam,
  INoticeListQuery,
  INoticeListResponse,
  IUpdateNoticeRequest,
} from '@/types';

const {
  API: { NOTICES },
} = URLS;

export const fetchNotices = async (params: INoticeListQuery) =>
  client.get<INoticeListResponse>(NOTICES.RUD, {
    params,
  });

export const fetchNoticeDetail = async (noticeId: number) =>
  client.get<INoticeDetailResponse>(`${NOTICES.RUD}/${noticeId}`);

export const createNotice = async ({ attachments, ...rest }: ICreateNoticeRequest) => {
  const formData = createFormData(rest);

  attachments?.forEach(({ file }) => {
    const blob = new Blob([file], { type: file.type });
    formData.append('attachments', blob, encodeURIComponent(file.name));
  });

  return client.post<void>(NOTICES.CREATE, formData, fileHeaders);
};

export const updateNotice = async ({ noticeId, ...request }: IUpdateNoticeRequest) => {
  client.patch(`${NOTICES}/${noticeId}`, request);
};

export const deleteNotice = async ({ noticeId }: INoticeIdParam) => {
  client.patch<void>(`${NOTICES.RUD}/${noticeId}/delete`);
};
