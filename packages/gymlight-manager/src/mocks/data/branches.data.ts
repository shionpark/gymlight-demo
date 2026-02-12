import type { IBranchResponse, IBranchNameResponse } from '@/types';

/**
 * 지점 Mock 데이터 (4개 지점)
 */
export const mockBranches: IBranchResponse[] = [
  {
    branchId: 1,
    number: 1,
    name: '서강대점',
    code: 'SG',
    address: '서울특별시 마포구 백범로 35',
    tel: '02-1234-5678',
    openDate: '2022-03-01',
    status: '영업중',
    staffCount: 8,
    memberCount: 156,
    managerId: 2,
    managerName: '김매니저',
    createdAt: '2022-03-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    branchId: 2,
    number: 2,
    name: '명지대점',
    code: 'MJ',
    address: '서울특별시 서대문구 거북골로 34',
    tel: '02-2345-6789',
    openDate: '2022-06-15',
    status: '영업중',
    staffCount: 6,
    memberCount: 124,
    managerId: 2,
    managerName: '김매니저',
    createdAt: '2022-06-15T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z',
  },
  {
    branchId: 3,
    number: 3,
    name: '연희연세대점',
    code: 'YH',
    address: '서울특별시 서대문구 연희로 330',
    tel: '02-3456-7890',
    openDate: '2023-01-10',
    status: '영업중',
    staffCount: 5,
    memberCount: 98,
    managerId: 2,
    managerName: '김매니저',
    createdAt: '2023-01-10T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
  {
    branchId: 4,
    number: 4,
    name: '구산연신내점',
    code: 'GS',
    address: '서울특별시 은평구 연서로 267',
    tel: '02-4567-8901',
    openDate: '2023-06-01',
    status: '영업중',
    staffCount: 4,
    memberCount: 72,
    managerId: 2,
    managerName: '김매니저',
    createdAt: '2023-06-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

/**
 * 지점 이름 목록 (드롭다운용)
 */
export const mockBranchNames: IBranchNameResponse[] = mockBranches.map((branch) => ({
  branchId: branch.branchId,
  name: branch.name,
  code: branch.code,
}));

/**
 * 지점 ID로 검색
 */
export const findBranchById = (branchId: number): IBranchResponse | undefined => {
  return mockBranches.find((branch) => branch.branchId === branchId);
};

/**
 * 지점 코드로 검색
 */
export const findBranchByCode = (code: string): IBranchResponse | undefined => {
  return mockBranches.find((branch) => branch.code === code);
};
