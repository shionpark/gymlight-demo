import { NoticeSortType } from '@/types';

const NOTICE_TYPE = {
  NOTICE: '공지',
  EVENT: '이벤트',
} as const;
export const NOTICE_TYPES = Object.values(NOTICE_TYPE);

export type NoticeTypes = (typeof NOTICE_TYPE)[keyof typeof NOTICE_TYPE];

export const NOTICE_TYPES_ALL: (NoticeTypes | '전체')[] = ['전체', ...Object.values(NOTICE_TYPE)];

export const NOTICE_SORT_OPTIONS: NoticeSortType[] = [
  '작성일(오름차순)',
  '작성일(내림차순)',
  '수정일(오름차순)',
  '수정일(내림차순)',
  '시작일(오름차순)',
  '시작일(내림차순)',
  '종료일(오름차순)',
  '종료일(내림차순)',
];

const NOTICE_STATUS = {
  ACTIVE: '활성화',
  NON_ACTIVE: '비활성화',
} as const;
export type NoticeStatusType = (typeof NOTICE_STATUS)[keyof typeof NOTICE_STATUS];
