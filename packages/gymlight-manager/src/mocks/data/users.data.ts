import type { IUserResponse, UserRoleType, UserStatusType, GenderType } from '@/types';

/**
 * 기본 사용자 정보 (admin@gymlight.com)
 */
const defaultUser: IUserResponse = {
  userId: 1,
  email: 'admin@gymlight.com',
  name: '관리자',
  gender: '남' as GenderType,
  birthDate: '1990-05-15',
  age: 34,
  phone: '010-1234-5678',
  status: '활성화' as UserStatusType,
  joinDate: '2023-01-01',
  role: '관리자' as UserRoleType,
  createdAt: '2023-01-01T00:00:00Z',
  updatedAt: '2024-01-15T00:00:00Z',
  teamId: 1,
  branchId: 1,
};

/**
 * @deprecated getCurrentUser() 사용 권장
 */
export const mockCurrentUser = defaultUser;

/**
 * 역할별 사용자 목록
 */
export const mockUsers: IUserResponse[] = [
  defaultUser,
  {
    userId: 2,
    email: 'manager@gymlight.com',
    name: '김매니저',
    gender: '남' as GenderType,
    birthDate: '1988-03-20',
    age: 36,
    phone: '010-2345-6789',
    status: '활성화' as UserStatusType,
    joinDate: '2023-02-01',
    role: '매니저' as UserRoleType,
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z',
    teamId: 1,
    branchId: 1,
  },
  {
    userId: 3,
    email: 'leadertrainer@gymlight.com',
    name: '박팀장',
    gender: '남' as GenderType,
    birthDate: '1992-07-10',
    age: 32,
    phone: '010-3456-7890',
    status: '활성화' as UserStatusType,
    joinDate: '2023-03-01',
    role: '팀장 트레이너' as UserRoleType,
    createdAt: '2023-03-01T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
    teamId: 2,
    branchId: 1,
  },
  {
    userId: 4,
    email: 'trainer1@gymlight.com',
    name: '이트레이너',
    gender: '여' as GenderType,
    birthDate: '1995-11-25',
    age: 29,
    phone: '010-4567-8901',
    status: '활성화' as UserStatusType,
    joinDate: '2023-04-01',
    role: '트레이너' as UserRoleType,
    createdAt: '2023-04-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    teamId: 2,
    branchId: 1,
  },
  {
    userId: 5,
    email: 'trainer2@gymlight.com',
    name: '최트레이너',
    gender: '남' as GenderType,
    birthDate: '1994-08-30',
    age: 30,
    phone: '010-5678-9012',
    status: '활성화' as UserStatusType,
    joinDate: '2023-05-01',
    role: '트레이너' as UserRoleType,
    createdAt: '2023-05-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    teamId: 2,
    branchId: 2,
  },
  {
    userId: 6,
    email: 'leaderfc@gymlight.com',
    name: '정FC팀장',
    gender: '여' as GenderType,
    birthDate: '1991-04-15',
    age: 33,
    phone: '010-6789-0123',
    status: '활성화' as UserStatusType,
    joinDate: '2023-03-15',
    role: '팀장 FC' as UserRoleType,
    createdAt: '2023-03-15T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    teamId: 3,
    branchId: 1,
  },
  {
    userId: 7,
    email: 'fc1@gymlight.com',
    name: '강FC',
    gender: '여' as GenderType,
    birthDate: '1996-12-05',
    age: 28,
    phone: '010-7890-1234',
    status: '활성화' as UserStatusType,
    joinDate: '2023-06-01',
    role: 'FC' as UserRoleType,
    createdAt: '2023-06-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    teamId: 3,
    branchId: 1,
  },
  {
    userId: 8,
    email: 'info@gymlight.com',
    name: '조인포',
    gender: '여' as GenderType,
    birthDate: '1997-02-20',
    age: 27,
    phone: '010-8901-2345',
    status: '활성화' as UserStatusType,
    joinDate: '2023-07-01',
    role: '인포' as UserRoleType,
    createdAt: '2023-07-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    teamId: 1,
    branchId: 1,
  },
];

/**
 * 현재 로그인한 사용자 (동적으로 변경 가능)
 */
let currentUser: IUserResponse = { ...defaultUser };

/**
 * 현재 사용자 조회
 */
export const getCurrentUser = (): IUserResponse => currentUser;

/**
 * 역할로 현재 사용자 설정
 */
export const setCurrentUserByRole = (role: UserRoleType): void => {
  const user = mockUsers.find((u) => u.role === role);
  currentUser = user ? { ...user } : { ...defaultUser };
};

/**
 * 현재 사용자 초기화 (관리자로 리셋)
 */
export const resetCurrentUser = (): void => {
  currentUser = { ...defaultUser };
};

/**
 * 사용자 ID로 검색
 */
export const findUserById = (userId: number): IUserResponse | undefined => {
  return mockUsers.find((user) => user.userId === userId);
};

/**
 * 이메일로 사용자 검색
 */
export const findUserByEmail = (email: string): IUserResponse | undefined => {
  return mockUsers.find((user) => user.email === email);
};
