import { TeamDepartmentType, TeamStaffSortType } from '@/types';

export const TEAM_STAFF_SORT_OPTIONS: TeamStaffSortType[] = [
  '가입일(내림차순)',
  '가입일(오름차순)',
  '이름(가나다순)',
  '이름 역순(가나다순)',
  '생일(빠른순)',
  '생일(늦은순)',
  '나이(오름차순)',
  '나이(내림차순)',
];

export const TEAM_DEPARTMENTS: Record<string, TeamDepartmentType> = {
  TRAINER: '트레이너',
  FC: 'FC',
};
