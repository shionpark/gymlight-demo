import { ForwardRefExoticComponent, SVGProps } from 'react';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

import type { StaffSortType, UserRoleType, UserStatusType } from '@/types';

/** 정렬(sort) */
export const STAFF_SORT_OPTIONS: StaffSortType[] = [
  '가입일(내림차순)',
  '가입일(오름차순)',
  '이름(가나다순)',
  '이름 역순(가나다순)',
  '생일(빠른순)',
  '생일(늦은순)',
  '나이(오름차순)',
  '나이(내림차순)',
  '로그인 실패 횟수(오름차순)',
  '로그인 실패 횟수(내림차순)',
  '수정일(오름차순)',
  '수정일(내림차순)',
];

const STAFF_ROLL_LABELS = {
  MANAGER: '매니저',
  LEADER_TRAINER: '팀장 트레이너',
  TRAINER: '트레이너',
  LEADER_FC: '팀장 FC',
  FC: 'FC',
  ALL_INFO: '전 지점 인포',
  INFO: '인포',
} as const;
export const STAFF_ROLLS = [
  STAFF_ROLL_LABELS.MANAGER,
  STAFF_ROLL_LABELS.LEADER_TRAINER,
  STAFF_ROLL_LABELS.TRAINER,
  STAFF_ROLL_LABELS.LEADER_FC,
  STAFF_ROLL_LABELS.FC,
  STAFF_ROLL_LABELS.ALL_INFO,
  STAFF_ROLL_LABELS.INFO,
] as UserRoleType[];

const STAFF_STATUS = {
  ALL: '전체',
  ACTIVE: '활성화',
  NON_ACTIVE: '비활성화',
  PENDING: '승인대기',
  REJECTED: '승인거부',
  REQUESTED: '탈퇴요청',
} as const;
export const STAFF_STATUSES = [
  STAFF_STATUS.ACTIVE,
  STAFF_STATUS.NON_ACTIVE,
  STAFF_STATUS.PENDING,
  STAFF_STATUS.REJECTED,
  STAFF_STATUS.REQUESTED,
] as UserStatusType[];

/** 진열여부(display) */
const PRODUCT_DISPLAY = {
  DISPLAY: '진열',
  HIDDEN: '진열하지 않음',
} as const;
export const PRODUCT_DISPLAY_OPTIONS = Object.values(PRODUCT_DISPLAY);

/** 기간 단위(durationUnit) */
export const DURATION_UNIT_OPTIONS = ['개월', '일'] as const;

/** 보기(views) 옵션 */
const PRODUCT_VIEWS = {
  TABLE: '테이블',
  GRID: '그리드',
} as const;
export const PRODUCT_VIEW_OPTIONS = [PRODUCT_VIEWS.TABLE, PRODUCT_VIEWS.GRID] as const;

export type ProductViewType = (typeof PRODUCT_VIEW_OPTIONS)[number];

export const PRODUCT_VIEW_ICONS: Record<
  ProductViewType,
  ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
> = {
  테이블: ListBulletIcon,
  그리드: Squares2X2Icon,
};
