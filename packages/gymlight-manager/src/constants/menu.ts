import type { DictionaryType, MenuItemType } from '@/types';

import {
  /** Common Menu */
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
  ShoppingBagIcon,
  LockClosedIcon,
  IdentificationIcon,
  /** Admin Menu */
  UsersIcon,
  ChartBarSquareIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  /** Trainer Menu */
  UserCircleIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

export const COMMON_MENU: DictionaryType<MenuItemType> = {
  dashboard: {
    icon: HomeIcon,
    label: '대시보드',
  },
  notice: {
    icon: InformationCircleIcon,
    label: '공지사항',
  },
  member: {
    icon: UserIcon,
    label: '회원 관리',
  },
  product: {
    icon: ShoppingBagIcon,
    label: '상품 관리',
  },
  locker: {
    icon: LockClosedIcon,
    label: '락커 관리',
  },
  attendance: {
    icon: IdentificationIcon,
    label: '출석 관리',
  },
};

export const ADMIN_MENU: DictionaryType<MenuItemType> = {
  staff: {
    icon: UsersIcon,
    label: '직원 관리',
  },
  team: {
    icon: UserGroupIcon,
    label: '팀 관리',
  },
  statistics: {
    icon: ChartBarSquareIcon,
    label: '통계 관리',
  },
  accounting: {
    icon: CurrencyDollarIcon,
    label: '회계 관리',
  },
  branch: {
    icon: BuildingStorefrontIcon,
    label: '지점 관리',
  },
};

export const MANAGER_MENU: DictionaryType<MenuItemType> = {
  staff: {
    icon: UsersIcon,
    label: '직원 관리',
  },
  team: {
    icon: UserGroupIcon,
    label: '팀 관리',
  },
  statistics: {
    icon: ChartBarSquareIcon,
    label: '통계 관리',
  },
  accounting: {
    icon: CurrencyDollarIcon,
    label: '회계 관리',
  },
};

export const LEADER_TRAINER_MENU: DictionaryType<MenuItemType> = {
  my_work: {
    icon: UserCircleIcon,
    label: '나의 업무',
  },
};

export const TRAINER_MENU: DictionaryType<MenuItemType> = {
  my_work: {
    icon: UserCircleIcon,
    label: '나의 업무',
  },
};
