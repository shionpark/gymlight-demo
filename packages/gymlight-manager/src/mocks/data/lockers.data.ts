import type {
  ILockerGroupResponse,
  ILockerGroupDetailResponse,
  ILockerResponse,
  ILockerDetailResponse,
  LockerStatusType,
  LockerDirectionType,
} from '@/types';

import { mockBranches } from './branches.data';

/**
 * 락커 그룹 Mock 데이터
 */
export const mockLockerGroups: ILockerGroupResponse[] = [
  {
    lockerGroupId: 1,
    name: 'A구역',
    quantity: 20,
    startNumber: 1,
    availableCount: 12,
    inUseCount: 6,
    reservedCount: 1,
    damagedCount: 1,
    branchId: 1,
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    lockerGroupId: 2,
    name: 'B구역',
    quantity: 15,
    startNumber: 21,
    availableCount: 8,
    inUseCount: 5,
    reservedCount: 2,
    damagedCount: 0,
    branchId: 1,
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    lockerGroupId: 3,
    name: 'C구역',
    quantity: 10,
    startNumber: 36,
    availableCount: 6,
    inUseCount: 3,
    reservedCount: 1,
    damagedCount: 0,
    branchId: 1,
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

/**
 * 락커 상태 생성
 */
const generateLockerStatus = (index: number): LockerStatusType => {
  const random = index % 10;
  if (random < 6) return '사용 가능';
  if (random < 8) return '사용 중';
  if (random < 9) return '예약 중';
  return '파손';
};

/**
 * 락커 목록 생성
 */
const generateLockers = (
  groupId: number,
  quantity: number,
  startNumber: number,
): ILockerResponse[] => {
  const lockers: ILockerResponse[] = [];

  for (let i = 0; i < quantity; i++) {
    const lockerId = groupId * 100 + i + 1;
    const status = generateLockerStatus(i);
    const isInUse = status === '사용 중';

    lockers.push({
      lockerId,
      number: startNumber + i,
      status,
      password: isInUse ? '1234' : '',
      endDate: isInUse
        ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        : '',
      memberId: isInUse ? (i % 10) + 1 : 0,
      memberName: isInUse ? `회원${(i % 10) + 1}` : '',
    });
  }

  return lockers;
};

/**
 * 락커 그룹 상세 데이터
 */
export const mockLockerGroupDetails: ILockerGroupDetailResponse[] = mockLockerGroups.map(
  (group) => ({
    lockerGroupId: group.lockerGroupId,
    name: group.name,
    quantity: group.quantity,
    rows: Math.ceil(group.quantity / 5),
    columns: 5,
    startNumber: group.startNumber,
    direction: '가로' as LockerDirectionType,
    lockers: generateLockers(group.lockerGroupId, group.quantity, group.startNumber),
  }),
);

/**
 * 락커 그룹 ID로 검색
 */
export const findLockerGroupById = (
  lockerGroupId: number,
): ILockerGroupDetailResponse | undefined => {
  return mockLockerGroupDetails.find((group) => group.lockerGroupId === lockerGroupId);
};

/**
 * 락커 ID로 검색
 */
export const findLockerById = (lockerId: number): ILockerDetailResponse | undefined => {
  for (const group of mockLockerGroupDetails) {
    const locker = group.lockers.find((l) => l.lockerId === lockerId);
    if (locker) {
      return {
        lockerId: locker.lockerId,
        number: locker.number,
        status: locker.status,
        password: locker.password,
        memo: '',
        startDate: locker.endDate
          ? new Date(
              new Date(locker.endDate).getTime() - 30 * 24 * 60 * 60 * 1000,
            ).toISOString().split('T')[0]
          : '',
        endDate: locker.endDate,
        memberId: locker.memberId,
        memberName: locker.memberName,
      };
    }
  }
  return undefined;
};

/**
 * 지점별 락커 그룹 필터링
 */
export const getLockerGroupsByBranch = (branchName: string): ILockerGroupResponse[] => {
  const branch = mockBranches.find((b) => b.name === branchName);
  if (!branch) return mockLockerGroups; // 기본값으로 전체 반환
  return mockLockerGroups.filter((group) => group.branchId === branch.branchId);
};
