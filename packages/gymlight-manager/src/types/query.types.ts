import { ILockerGroupIdParam, ILockerIdParam, ITeamParams } from './api-request.types';
import {
  BranchSortType,
  GenderType,
  MemberSortType,
  NoticeSortType,
  ProductCategoryCodeType,
  ProductCategoryType,
  ProductSortType,
  ReservationPathType,
  SalarySettlementStatusType,
  StaffSortType,
  TeamSortType,
  UserRoleType,
  UserStatusType,
} from './enum.types';

export interface IListQuery {
  limit?: number;
}

export interface IPaginationQuery {
  pageNum?: number;
  pageSize?: number;
}

// 지점
export interface IBranchListQuery extends IPaginationQuery {
  sort?: BranchSortType;
}

// 팀
export interface ITeamListQuery extends IPaginationQuery {
  sort?: TeamSortType;
  branchName?: string;
}

export interface ITeamStaffListQuery extends ITeamParams, IPaginationQuery {
  sort: StaffSortType;
}

// 직원
export interface IStaffListQuery extends IPaginationQuery {
  sort: StaffSortType;
  statuses?: UserStatusType[];
  roleNames?: UserRoleType[] | ['알수없음'];
  branchName?: string;
}

// 상품
export interface IProductListQuery extends IPaginationQuery {
  categoryCode?: ProductCategoryCodeType;
  sort: ProductSortType;
  branchName: string;
}

// 락커
export interface ILockerListQuery {
  branchName: string;
}

export interface ILockerGroupDetailListQuery extends ILockerGroupIdParam {
  branchName: string;
}

export interface ILockerDetailListQuery extends ILockerIdParam {
  branchName: string;
}

// 공지사항
export interface INoticeListQuery extends IPaginationQuery {
  branchName?: string; // 지점 이름
  types?: ('공지' | '이벤트')[]; // 유형
  statuses?: ('활성화' | '비활성화')[]; // 상태
  startDate?: string; // 작성 날짜 구간 (YYYY-MM-DD 형식)
  endDate?: string; // 작성 날짜 구간 (YYYY-MM-DD 형식)
  sort?: NoticeSortType; // 정렬 기준
}

// 회원

export interface IMemberListQuery extends IPaginationQuery {
  branchName?: string; // 지점 이름
  statuses?: ('활성화' | '예약중' | '만료예정' | '만료' | '홀딩' | '삭제')[]; // 회원 상태
  genders?: GenderType[]; // 성별
  ageRanges?: number[];
  joinDateRange?: [string, string];
  startDateRange?: [string, string];
  endDateRange?: [string, string];
  sort?: MemberSortType; // 정렬 옵션 - 기본은 "가입일(내림차순)"
}

export interface IMemberSearchListQuery extends IPaginationQuery {
  name?: string;
  phone?: string;
}

// 출석

// 회원 휴대폰 번호 뒷자리 (4자리)
export interface IPhoneSuffixQuery {
  phone: string;
}

//✔️ 출석 목록 조회
export interface IAttendanceListQuery extends IPaginationQuery {
  branchName?: string; // 지점 이름
  genders?: GenderType[]; // 성별
  checkedAt?: [string, string]; // 출석일
}

//📅 일정 목록 조회
export interface IScheduleListQuery {
  startTime: [string, string];
}

//💪 실적 목록 조회

export interface IPerformanceListQuery extends IPaginationQuery {
  updatedAt: [string, string];
}

// 💰급여 목록 조회 쿼리

export interface ISalarySettlementListQuery extends IPaginationQuery {
  branchName: string;
  statuses: SalarySettlementStatusType[];
}

// 👨🏻‍💻📅 예약 목록 조회
export interface IReservationListQuery extends IPaginationQuery {
  branchName: string;
  reservationPaths: ReservationPathType[];
  productTypes: ProductCategoryType[];
}

export interface ICouponListQuery extends IPaginationQuery {
  branchName: string;
}
