import type {
  ITeamResponse,
  ITeamStaffResponse,
  TeamDepartmentType,
  GenderType,
  UserRoleType,
  UserStatusType,
} from '@/types';

import { mockUsers } from './users.data';

/**
 * 팀 Mock 데이터
 */
export const mockTeams: ITeamResponse[] = [
  {
    teamId: 1,
    name: '서강대점 운영팀',
    department: '트레이너' as TeamDepartmentType,
    branchId: 1,
    teamLeaderId: 2,
    teamLeaderName: '김매니저',
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    teamId: 2,
    name: '서강대점 트레이너팀',
    department: '트레이너' as TeamDepartmentType,
    branchId: 1,
    teamLeaderId: 3,
    teamLeaderName: '박팀장',
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    teamId: 3,
    name: '서강대점 FC팀',
    department: 'FC' as TeamDepartmentType,
    branchId: 1,
    teamLeaderId: 6,
    teamLeaderName: '정FC팀장',
    createdAt: '2023-02-15T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    teamId: 4,
    name: '명지대점 트레이너팀',
    department: '트레이너' as TeamDepartmentType,
    branchId: 2,
    teamLeaderId: 5,
    teamLeaderName: '최트레이너',
    createdAt: '2023-06-20T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

/**
 * 팀 멤버 Mock 데이터 생성
 */
export const generateTeamStaffs = (teamId: number): ITeamStaffResponse[] => {
  const team = mockTeams.find((t) => t.teamId === teamId);
  if (!team) return [];

  // 해당 팀의 멤버들 (실제로는 teamId로 필터링)
  const teamMembers = mockUsers
    .filter((user) => user.teamId === teamId)
    .map((user) => ({
      teamMemberId: user.userId,
      name: user.name,
      gender: user.gender as GenderType,
      birthDate: user.birthDate,
      age: user.age,
      phone: user.phone,
      role: user.role as UserRoleType,
      status: user.status as UserStatusType,
      joinDate: user.joinDate,
    }));

  return teamMembers;
};

/**
 * 팀 ID로 검색
 */
export const findTeamById = (teamId: number): ITeamResponse | undefined => {
  return mockTeams.find((team) => team.teamId === teamId);
};

/**
 * 지점별 팀 필터링
 */
export const getTeamsByBranch = (branchId: number): ITeamResponse[] => {
  return mockTeams.filter((team) => team.branchId === branchId);
};
