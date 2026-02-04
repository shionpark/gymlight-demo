import { UserRoleType } from '@/types';

export const PAGE_ACCESS_ROLES: Record<string, UserRoleType[]> = {
  ALL_STAFF_ROLES: [
    '관리자',
    '매니저',
    '팀장 트레이너',
    '트레이너',
    '팀장 FC',
    'FC',
    '인포',
    '전지점 인포',
  ],

  // 직원관리
  STAFF: ['관리자', '매니저'],

  // 팀관리
  TEAM: ['관리자', '매니저', '팀장 트레이너', '팀장 FC'],

  // 통계관리
  STATICS: ['관리자', '매니저'],

  // 회계관리
  ACCOUNTING: ['관리자', '매니저'],

  // 지점 관리
  BRANCH: ['관리자'],

  // 내 업무 관리
  MY_WORK: ['관리자', '매니저', '팀장 트레이너', '트레이너'],
} as const;
