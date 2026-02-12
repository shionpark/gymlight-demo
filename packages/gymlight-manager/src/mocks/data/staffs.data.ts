import type {
  IStaffResponse,
  ILeaderTrainerResponse,
  ILeaderFcResponse,
  ITrainerResponse,
  IFcResponse,
  GenderType,
  UserRoleType,
  UserStatusType,
} from '@/types';

import { mockUsers } from './users.data';
import { mockBranches } from './branches.data';

/**
 * 직원 Mock 데이터 (mockUsers 기반으로 생성)
 */
export const mockStaffs: IStaffResponse[] = mockUsers
  .filter((user) => user.role !== '관리자') // 관리자 제외
  .map((user, index) => {
    const branch = mockBranches.find((b) => b.branchId === user.branchId) || mockBranches[0];
    return {
      staffId: user.userId,
      email: user.email,
      name: user.name,
      gender: user.gender as GenderType,
      birthDate: user.birthDate,
      age: user.age,
      phone: user.phone,
      role: user.role as UserRoleType,
      status: user.status as UserStatusType,
      joinDate: user.joinDate,
      branchId: branch.branchId,
      branchName: branch.name,
      teamId: user.teamId,
      teamName: index < 3 ? '트레이너팀' : 'FC팀',
    };
  });

/**
 * 팀장 트레이너 목록
 */
export const mockLeaderTrainers: ILeaderTrainerResponse[] = mockUsers
  .filter((user) => user.role === '팀장 트레이너')
  .map((user) => ({
    leaderTrainerId: user.userId,
    name: user.name,
  }));

/**
 * 팀장 FC 목록
 */
export const mockLeaderFcs: ILeaderFcResponse[] = mockUsers
  .filter((user) => user.role === '팀장 FC')
  .map((user) => ({
    leaderFcId: user.userId,
    name: user.name,
  }));

/**
 * 트레이너 목록 (팀장 포함)
 */
export const mockTrainers: ITrainerResponse[] = mockUsers
  .filter((user) => user.role === '트레이너' || user.role === '팀장 트레이너')
  .map((user) => ({
    trainerId: user.userId,
    name: user.name,
  }));

/**
 * FC 목록 (팀장 포함)
 */
export const mockFcs: IFcResponse[] = mockUsers
  .filter((user) => user.role === 'FC' || user.role === '팀장 FC')
  .map((user) => ({
    fcId: user.userId,
    name: user.name,
  }));

/**
 * 직원 ID로 검색
 */
export const findStaffById = (staffId: number): IStaffResponse | undefined => {
  return mockStaffs.find((staff) => staff.staffId === staffId);
};

/**
 * 지점별 직원 필터링
 */
export const getStaffsByBranch = (branchId: number): IStaffResponse[] => {
  return mockStaffs.filter((staff) => staff.branchId === branchId);
};

/**
 * 역할별 직원 필터링
 */
export const getStaffsByRole = (role: UserRoleType): IStaffResponse[] => {
  return mockStaffs.filter((staff) => staff.role === role);
};
