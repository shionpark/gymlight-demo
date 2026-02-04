import type {
  FileTypes,
  GenderType,
  JoinCategoryType,
  JoinReasonType,
  LockerDirectionType,
  LockerStatusType,
  MemberStatusType,
  NoticeStatusType,
  NoticeType,
  PaymentStatusType,
  ProductCategoryCodeType,
  ProductCategoryType,
  ProductOptionsType,
  ProductStatusType,
  ReservationPathType,
  SalarySettlementStatusType,
  ScheduleStatusType,
  ServiceOptionType,
  TeamDepartmentType,
  UserRoleType,
  UserStatusType,
  VisitPathType,
} from './enum.types';

export interface IErrorResponse {
  message: string | string[];
  data: string | string[];
}

// 인증/인가
export interface ILoginResponse {
  accessToken: string;
}

export interface IItemListResponse<T> {
  list: T[];
  totalElements: number;
  limit: number;
}

export interface IPaginationResponse<T> {
  totalElements: number;
  totalPages: number;
  pageNum: number;
  pageSize: number;
  isFirst: boolean;
  isLast: boolean;
  list: T[];
}

// 사용자
export interface IUserResponse {
  userId: number;

  email: string;
  name: string;
  gender: GenderType;
  birthDate: string;
  age: number;
  phone: string;
  status: UserStatusType;
  joinDate: string;
  role: UserRoleType;
  createdAt: string;
  updatedAt: string;
  teamId: number;
  branchId: number;
}

export interface IUserRoleResponse {
  userRoleId: number;

  name: UserRoleType;
}

/*=================================*/
/*         🏰 지점 관리.             */
/*=================================*/

export interface IBranchResponse {
  branchId: number;

  number: number;
  name: string;
  code: string;
  address: string;
  tel: string;
  openDate: string;
  status: '영업중' | '리모델링중' | '폐점' | '휴점';

  // 통계 속성
  staffCount: number;
  memberCount: number;

  // 매니저
  managerId: number;
  managerName: string;

  createdAt: string;
  updatedAt: string;
}

export interface IBranchListResponse extends IPaginationResponse<IBranchResponse> {}

// 지점 이름 목록 응답
export interface IBranchNameResponse {
  branchId: number;
  name: string;
  code: string;
}

/*=================================*/
/*      🏋️‍♂️🏋️‍♂️🏋️‍♂️  팀 관리.             */
/*=================================*/

export interface ITeamResponse {
  teamId: number;
  name: string;
  department: TeamDepartmentType;
  branchId: number;
  teamLeaderId: number;
  teamLeaderName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITeamStaffResponse {
  teamMemberId: number;
  name: string;
  gender: GenderType;
  birthDate: string;
  age: number;
  phone: string;
  role: UserRoleType;
  status: UserStatusType;
  joinDate: string;
}

export interface ITeamListResponse extends IPaginationResponse<ITeamResponse> {}

export interface ITeamStaffListResponse extends IPaginationResponse<ITeamStaffResponse> {}

/*=================================*/
/*         🏋️‍♂️ 직원 관리.             */
/*=================================*/

export interface IStaffResponse {
  staffId: number;

  email: string;
  name: string;
  gender: GenderType;
  birthDate: string;
  age: number;
  phone: string;
  role: UserRoleType;
  status: UserStatusType;
  joinDate: string;

  branchId: number | null;
  branchName: string;

  teamId: number | null;
  teamName: string;
}

export interface IStaffListResponse extends IPaginationResponse<IStaffResponse> {}

// 팀장 트레이너 응답
export interface ILeaderTrainerResponse {
  leaderTrainerId: number;
  name: string;
}

// 팀장 FC 응답
export interface ILeaderFcResponse {
  leaderFcId: number;
  name: string;
}

// 트레이너 응답
export interface ITrainerResponse {
  trainerId: number;
  name: string;
}

// FC 응답
export interface IFcResponse {
  fcId: number;
  name: string;
}

/*=================================*/
/*         🎁 상품 관리.             */
/*=================================*/
export interface IProductResponse {
  productId: number;

  name: string;
  status: ProductStatusType;
  originalPrice: number;
  sellingPrice: number;
  display: boolean;
  isDiscounted: boolean;
  duration: number;
  sessions: number;
  includedProductTypes: ProductOptionsType[];

  createdAt: Date;
  updatedAt: Date;

  categoryId: number;
  branchId: number;
}

export interface IProductListResponse extends IPaginationResponse<IProductResponse> {}

// 상품 카테고리 응답
export interface IProductCategoryResponse {
  productCategoryId: number;
  name: string;
  code: ProductCategoryCodeType;
}

// 상품 매출 조회
export interface ISalesStatisticResponse {
  productType: ProductCategoryType;
  totalRevenue: number;
}

/*=================================*/
/*         👶🏻 회원 관리.             */
/*=================================*/

export interface ICreateMemberResponse {
  memberId: number; // 등록된 회원 ID
  memberNo: string; // 생성된 회원 번호 (YYYYMMDD + 지점 코드 + 일련번호)
  name: string; // 회원 이름
  status: MemberStatusType; // 회원 상태
  startDate: string; // 이용 시작일
  endDate: string; // 이용 종료일
  registeredAt: string; // 등록 일자 (YYYY-MM-DD)
  registeredBy: string; // 담당자 이름
}

export interface IMemberResponse {
  memberId: number; // 회원 식별자

  name: string;
  gender: GenderType;
  birthDate: string;
  age: number;
  phone: string;
  address: string;
  profileImageUrl?: string;
  joinDate: string;
  startDate: string;
  endDate: string;

  remainingDays: number;
  remainingSessions: number;

  status: MemberStatusType;

  branchId: number;
  branchName: string;
  trainerId?: number;
  trainerName?: string;
}

// 회원 정보 응답

export interface IActiveMemberResponse {
  name: string;
  memberId: number;
  phone: string;
}

export interface IRefundableProductResponse {
  purchasedProductId: number; // 구매 상품 식별자
  isRefundable: boolean; // 환불 가능 여부
  isTransferable: boolean; // 양도 가능 여부
  productName: string; // 상품 이름
  productId: number; // 상품 식별자
}

export interface IMemberListResponse extends IPaginationResponse<IMemberResponse> {}

export interface IMemberCategoryResponse {
  memberCategoryId: number;
  name: string;
  code: string;
}

export interface IMemberInfoResponse {
  memberId: number; // 회원 식별자

  name: string;
  gender: GenderType;
  birthDate: string;
  phone: string;
  address: string;
  visitPath: VisitPathType;
  visitPathOther?: string;
  joinReason: JoinReasonType;
  joinReasonOther?: string;
  startDate: string;
  endDate: string;
  profileImageUrl: string;
  memberCategoryId: number;

  remainingDays: number;
  remainingSessions: number;
  remainingOtCounts: number;
  remainingHoldingCounts: number;
  status: MemberStatusType;
  branchId: number;
  branchName: string;
  memberCategoryName: string;
  memberCategoryCode: string;
  trainerId: number;
  trainerName: string;
  trainerPhone: string;
}

export interface IMemberPurchasedProduct {
  purchasedProductId: number; // 구매한 상품 식별자
  productType: '회원권' | '운동복' | '락커' | 'PT';
  remainingDays: number; // 남은 일수
  remainingSessions: number; // 남은 세션 수
  isPackage: boolean; // 패키지 여부
  isTransferable: boolean; // 양도 가능 여부
  isRefundable: boolean; // 환불 가능 여부
  createdAt: string;
  updatedAt: string;
}

export interface IMemberAdditionalInfo {
  memberAdditionalInfoId: number; // 추가 정보 식별자
  notes?: string; // 메모
  joinType: JoinCategoryType; // 가입 유형
  serviceOptions: ServiceOptionType[]; // 제공 서비스 옵션 목록
  otProgramDateTime?: string; // OT 프로그램 예약 날짜 및 시간
  miracleTenDays: boolean; // 미라클텐데이 신청 여부
  createdAt: string;
  updatedAt: string;
}

export interface IMemberPaymentInfo {
  paymentId: number; // 결제 ID
  totalAmount: number; // 총 결제 금액
  paidAmount: number; // 실제 결제된 금액
  receivableAmount: number; // 미수금
  discountAmount: number; // 할인 금액
  discountReason?: string; // 할인 사유 (선택적)
  cashAmount: number; // 현금 결제 금액
  cardAmount: number; // 카드 결제 금액
  bankTransferAmount: number; // 계좌이체 결제 금액

  paymentMethod: string; // 결제수단
  cardApprovalNo?: string; // 카드 승인번호 (선택적)
  cardCompany?: string; // 카드사 (선택적)
  cardCompanyOther?: string; // 기타 카드사명 (선택적)

  paymentStatus: PaymentStatusType; // 결제 상태

  createdAt: string; // 생성 날짜
  updatedAt: string; // 수정 날짜
}

export interface IMemberHoldingInfo {
  holdingId: number; // 홀딩 ID
  days: number; // 홀딩 일수
  reason?: string; // 홀딩 사유 (선택적)
  startDate: string; // 홀딩 시작일
  endDate: string; // 홀딩 종료일
  createdAt: string; // 생성일
  updatedAt: string; // 수정일
}

export interface IMemberDetailsResponse {
  member: IMemberInfoResponse;
  purchasedProducts: IMemberPurchasedProduct[];
  memberAdditionalInfo: IMemberAdditionalInfo;
  payments: IMemberPaymentInfo[];
  holdings: IMemberHoldingInfo[];
}

export interface IMemberStatisticResponse {
  joinType: '기존 신규' | '소개' | '워크인' | '이전 만료' | '당월 만료' | '사전 재등록';
  totalRegister: number;
}

/*=================================*/
/*         👨🏻‍💻📅 예약 관리 .             */
/*=================================*/
export interface IReservationResponse {
  reservationId: number;
  reservationPath: ReservationPathType;
  reservationDate: string;
  isRegistered: boolean;
  productType: ProductCategoryType;
  content: string;
  memberId: number;
  name: string;
  phone: string;
  gender: GenderType;
}

export interface IReservationListResponse extends IPaginationResponse<IReservationResponse> {}

/*=================================*/
/*         🔒 락커 관리.             */
/*=================================*/

export interface ILockerGroupResponse {
  lockerGroupId: number;
  name: string;
  quantity: number;
  startNumber: number;
  availableCount: number;
  inUseCount: number;
  reservedCount: number;
  damagedCount: number;
  branchId: number;
  createdAt: string;
  updatedAt: string;
}

export interface ILockerGroupDetailResponse {
  lockerGroupId: number;
  name: string;
  quantity: number;
  rows: number;
  columns: number;
  startNumber: number;
  direction: LockerDirectionType;
  lockers: ILockerResponse[];
}

export interface ILockerResponse {
  lockerId: number;
  number: number;
  status: LockerStatusType;
  password: string;
  endDate: string;
  memberId: number;
  memberName: string;
}

export interface ILockerDetailResponse {
  lockerId: number;
  number: number;
  status: LockerStatusType;
  password: string;
  memo: string;
  startDate: string;
  endDate: string;
  memberId: number;
  memberName: string;
}

/*=================================*/
/*           📣 공지사항             */
/*=================================*/

// 첨부파일 응답
export interface IAttachmentResponse {
  attachmentId: number; // 파일 ID
  url: string; // 파일 URL
  fileType: FileTypes;
  fileName: string;
  noticeId: number; // 공지사항 ID
}

// 공지사항 응답
export interface INoticeResponse {
  noticeId: number; // 공지사항 ID
  title: string; // 제목
  type: NoticeType; // 유형
  status: NoticeStatusType; // 상태
  startDate: string; // 시작일 (YYYY-MM-DD 형식)
  endDate: string; // 종료일 (YYYY-MM-DD 형식)
  hasAttachment: boolean;
  createdAt: string; // 작성일 (YYYY-MM-DD HH:mm:ss 형식)
  updatedAt: string; // 수정일 (YYYY-MM-DD HH:mm:ss 형식)
  branchId: number; // 지점 ID
  branchName: string; // 지점 이름
  authorId: number; // 작성자 ID
  authorName: string; // 작성자 이름
}

export interface INoticeListResponse extends IPaginationResponse<INoticeResponse> {}

// 공지사항 상세 조회 응답 조회
export interface INoticeDetailResponse {
  noticeId: number; // 공지사항 ID

  title: string; // 제목
  content: string; // 내용
  type: NoticeType; // 유형
  status: NoticeStatusType; // 상태

  startDate: string; // 시작일 (YYYY-MM-DD 형식)
  endDate: string; // 종료일 (YYYY-MM-DD 형식)
  hasAttachment: boolean;
  createdAt: string; // 작성일 (YYYY-MM-DD HH:mm:ss 형식)
  updatedAt: string; // 수정일 (YYYY-MM-DD HH:mm:ss 형식)
  branchId: number | null; // 지점 ID
  branchName: string; // 지점 이름

  authorId: number; // 작성자 ID
  authorName: string; // 작성자 이름
  attachments: IAttachmentResponse[]; // 첨부파일 목록
}

/*=================================*/
/*           📋 출석관리             */
/*=================================*/

// 출석할 회원 목록 응답
export interface ISearchMemberByPhoneSuffixResponse {
  memberId: number;
  name: string;
  phone: string;
}

// 출석 목록 응답
export interface ICheckedMemberResponse {
  attendanceId: number;
  code: string;
  time: string;

  memberId: number;
  name: string;
  status: MemberStatusType;
  profileImageUrl?: string;

  remainingDays: number;
  remainingSessions: number;

  productTypes: ProductOptionsType[];
}

export interface ICheckedMemberListResponse extends IPaginationResponse<ICheckedMemberResponse> {}

/*=================================*/
/*        ⏰👨🏻‍💻 내 업무 관리           */
/*=================================*/

export interface IScheduleResponse {
  scheduleId: number;
  title: string;
  startTime: string;
  endTime: string;
  status: ScheduleStatusType;
}

export interface IScheduleDetailsResponse {
  scheduleId: number;

  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: ScheduleStatusType;

  memberId: number;
  memberName: string;
  memberPhone: string;
}

export interface IMyMemberResponse {
  memberId: number;
  name: string;
  gender: GenderType;
  birthDate: string;
  age: number;
  phone: string;
  startDate: string;
  status: MemberStatusType;
  endDate: string;
  remainingDays: number;
  remainingSessions: number;
  remainingOtCounts: number;
  completedOtThisMonth: number;
  trainerId: number;
}

export interface IMyMemberListResponse extends IPaginationResponse<IMyMemberResponse> {}

/*=================================*/
/*           💰💳 회계관리             */
/*=================================*/

export interface ISalaryVariablesResponse {
  salaryVariablesId: number; // 급여 변수 식별자

  leaderTrainerSupport: number; // 팀장 트레이너 영업지원금
  trainerSupport: number; // 트레이너 영업지원금
  newTrainerSupport: number; // 신입 트레이너 영업지원금

  otPenaltyStandard: number; // OT 패널티 기준
  otPenaltyAmount: number; // OT 패널티 금액
  otIncentiveStandard: number; // OT 인센티브 기준
  otWalkinBenefitStandard: number; // OT 워크인 혜택 기준
  otIncentive: number; // OT 인센티브

  walkinMembershipPointConversionRate: number; // 워크인 회원권 포인트 전환 비율

  ptRevenueRecognitionRate: number; // PT 매출액 인정 비율
  walkinPtRevenueRecognitionRate: number; // 워크인 PT 매출액 인정 비율

  generalIncentive: number; // 일반 인센티브
  leaderTrainerIncentiveRate: number; // 팀장 트레이너 인센티브 비율

  newTrainerPtRevenueRecognitionRate: number; // 신입 트레이너 PT 매출액 인정 보장 비율

  weeklyGoalPtRevenue: number; // 주간 목표 PT 매출액
}

// 회원권 포인트를 포함한 PT 인센티브 인정 비율 조회
export interface IPtIncentiveRateWithMembershipPointResponse {
  ptIncentiveRateWithMembershipPointId: number;
  membershipPoints: number;
  ptRevenue: number;
  ptIncentiveRecognitionRate: number;
}

// 회원권 포인트를 제외한 PT 인센티브 인정 비율 조회
export interface IPtIncentiveRateWithoutMembershipPointResponse {
  ptIncentiveRateWithoutMembershipPointId: number;
  ptRevenue: number;
  ptIncentiveRecognitionRate: number;
}

// 정산 내용 조회
export interface ISalarySettlementResponse {
  salarySettlementId: number;
  totalSalary: number;
  baseSalary: number;
  otIncentive: number;
  ptIncentive: number;
  generalIncentive: number;
  isWalkinBenefit: boolean;
  status: SalarySettlementStatusType;
  issuedAt: string;
  branchId: number;
  branchName: string;
  staffId: number;
  staffName: string;
  staffRole: UserRoleType;
}

// 내 예상 정산 내용 조회
export interface IMyExpectedSalaryResponse {
  totalSalary: number;
  baseSalary: number;
  otIncentive: number;
  ptIncentive: number;
  generalIncentive: number;
  isWalkinBenefit: boolean;
}

/*=================================*/
/*           👨🏻‍💻🏋️‍♂️ 실적 관리            */
/*=================================*/

export interface IMyPerformanceResponse {
  performanceId: number;

  otCount: number;
  ptCount: number;

  ptRevenue: number;
  membershipPoints: number;

  isWalkinBenefit: boolean;
  isNew: boolean;
}

export interface IPerformanceResponse {
  performanceId: number; // 실적 식별자

  otCount: number; // OT 횟수
  ptCount: number; // PT 횟수

  ptRevenue: number; // PT 총 매출
  membershipPoints: number; // 회원권 포인트

  isWalkinBenefit: boolean; // 워크인 혜택 여부
  isNew: boolean; // 신입 여부

  trainerId: number;
  trainerName: string;

  createdAt: string;
  updatedAt: string;
}

export interface IPerformanceListResponse extends IPaginationResponse<IPerformanceResponse> {}

export interface ISalarySettlementListResponse
  extends IPaginationResponse<ISalarySettlementResponse> {}

/*=================================*/
/*       📊 대시보드             */
/*=================================*/

export interface IBranchDashboardResponse {
  branchId: number;
  name: string;
  number: number;
  status: '영업중' | '리모델링중' | '폐점' | '휴점';
  createdAt: string;
  updatedAt: string;
}

export interface IRecentNoticeResponse {
  noticeId: number;
  title: string;
}

export interface IMemberDashboardResponse {
  activeMembersCount: number; // 활성 회원
  newMembersTodayCount: number; // 신규 등록 회원
  expiringMembersThisMonthCount: number; // 당월 만료 회원
  lastUpdated: string;
}

export interface ISalesDashboardResponse {
  totalPaymentAmountThisMonth: number;
  lastUpdated: string;
}

export interface IAttendanceDashboardResponse {
  attendedMembersTodayCount: number;
  lastUpdated: string;
}

export interface IUserSummaryResponse {
  userId: number;
  name: string;
  phone: string;
  birthDate: string;
  age: number;
  role: UserRoleType | '알수없음';
  branchId: number;
  branchName: string;
}

export interface ITrainerPerformanceDashboardResponse {
  trainerId: number;
  trainerName: string;
  role: UserRoleType | '알수없음';
  branchId: number;
  branchName: string;
  ptRevenue: number;
  lastUpdated: string;
}

export interface ICouponResponse {
  couponId: number;
  name: string;
  phone: string;
  gender: GenderType;
  couponDays: number;
  memberId: number;

  referrerId: number;
  referrerName: string;
  trainerId: number;
  trainerName: string;
}

export interface ICouponListResponse extends IPaginationResponse<ICouponResponse> {}
