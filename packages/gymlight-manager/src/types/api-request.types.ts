import type {
  GenderType,
  TeamDepartmentType,
  ProductStatusType,
  LockerStatusType,
  LockerDirectionType,
  FileTypes,
  CardCompanyType,
  PaymentType,
  ContractType,
  VisitPathType,
  BranchStatusType,
  JoinReasonType,
  ReservationPathType,
  UserRoleType,
  UserStatusType,
  ScheduleStatusType,
  ScheduleType,
  SalarySettlementStatusType,
  ProductCategoryType,
  NoticeType,
  NoticeStatusType,
} from './enum.types';

// 인증/인가
export interface IJoinFormRequest {
  email: string;
  password: string;
  name: string;
  gender: GenderType;
  birthDate: string;
  phone: string;
  joinDate: string;
}

export interface ILoginFormRequest extends Record<string, unknown> {
  email: string;
  password: string;
}

/*=================================*/
/*         🏰 지점 관리.             */
/*=================================*/
export interface IBranchParams {
  branchId: number;
}

export interface ICreateBranchRequest {
  name: string;
  code: string;
  address: string;
  tel: string;
  openDate: string;
}

interface IUpdateBranchRequestBody {
  name: string;
  code: string;
  address: string;
  tel: string;
  openDate: string;
}

interface IUpdateBranchStatus {
  status: BranchStatusType;
}

export interface IUpdateBranchInfoRequest extends IBranchParams, IUpdateBranchRequestBody {}

export interface IUpdateBranchStatusRequest extends IBranchParams, IUpdateBranchStatus {}

export interface IDeleteBranchRequest extends IBranchParams {}

/*=================================*/
/*      🏋️‍♂️🏋️‍♂️🏋️‍♂️  팀 관리.             */
/*=================================*/
export interface ITeamParams {
  teamId: number;
}

export interface ICreateTeamRequest {
  name: string;
  department: TeamDepartmentType;
  teamLeaderId: number;
  teamMemberIds: number[];
  branchId: number;
}

interface IUpdateTeamRequestBody {
  name: string;
  teamMemberIds: number[];
}

export interface IUpdateTeamRequest extends ITeamParams, IUpdateTeamRequestBody {}

/*=================================*/
/*         🏋️‍♂️ 직원 관리.             */
/*=================================*/

interface IStaffIdParams {
  staffId: number;
}

interface IUpdateStaffRequestBody {
  staffStatus: UserStatusType;
  branchName: string;
  staffRoleName: UserRoleType;
}

export interface IUpdateStaffRequest extends IStaffIdParams, IUpdateStaffRequestBody {}

/*=================================*/
/*         👶🏻 회원 관리.             */
/*=================================*/

export interface IMemberIdParams {
  memberId: number;
}

export interface IRegisterMemberInfoRequest {
  name: string; // 이름
  gender: '남' | '여'; // 성별
  birthDate: string; // 생년월일

  phone: string; // 연락처
  address: string; // 주소
  visitPath: VisitPathType; // 방문 경로
  visitPathOther?: string; // 방문 경로 기타 사유
  joinReason: JoinReasonType; // 가입 이유
  joinReasonOther?: string; // 가입 이유 기타 사유
  startDate: string; // 이용 시작일

  branchId?: number; // 지점 식별자
  memberCategoryId: number; // 회원 카테고리 식별자
}

export interface IUpdateMemberInfoRequest extends IMemberIdParams {
  name?: string;
  gender?: GenderType;
  birthDate?: string; // 생년월일
  phone?: string; // 연락처
  address?: string; // 주소
  visitPath?: VisitPathType; // 방문 경로
  visitPathOther?: string; // 방문 경로 기타 사유
  joinReason?: JoinReasonType;
  joinReasonOther?: string; // 가입 이유 기타 사유
  startDate?: string; // 이용 시작일
}

export interface ISelectPurchasedProductsRequest {
  productIds: number[]; // 상품 식별자
}

export interface IAddMemberAdditionalInfoRequest {
  notes?: string; // 특이사항 (최대 150자)

  serviceOptions?: ('OT 프로그램' | '미라클텐데이')[]; // 서비스 옵션
  otProgramDateTime?: string; // OT 희망 날짜 (YYYY-MM-DD 형식, dserviceOption이 OT_PROGRAM일 경우 필수)
}

export interface IRegisterPaymentInfoRequest {
  paymentMethod: PaymentType; // 결제 수단

  totalAmount: number; // 총 결제 금액 (0 이상의 숫자)

  paidAmount: number;
  cashAmount: number;
  bankTransferAmount: number;
  cardAmount: number;

  cardApprovalNo?: string; // 카드 승인 번호 (최대 20자리, paymentMethod가 CARD일 경우)
  cardCompany?: CardCompanyType; // 카드 제공사 (paymentMethod가 CARD일 경우)
  cardCompanyOther?: string; // 기타 카드 제공사 (cardProvider가 "OTHERS"일 경우)
  receivableAmount: number; // 미수금 (0 이상의 숫자, 총 결제 금액보다 작거나 같아야 함)
  discountAmount: number; // 할인 금액 (0 이상의 숫자)
  discountReason?: string; // 할인 사유 (할인 금액이 0보다 클 경우, 최대 150자)
}

export interface ISaveContractRequest extends IMemberIdParams {
  contractType: ContractType; // 계약서 유형
  contractImageUrl: Blob; // 계약서 사인 이미지 (png 파일 경로)
}

export interface IRegisterNewMemberRequest {
  memberInfo: IRegisterMemberInfoRequest;
  selectProducts: ISelectPurchasedProductsRequest;
  additionalInfo: IAddMemberAdditionalInfoRequest;
  paymentInfo: IRegisterPaymentInfoRequest;
}

export interface IReRegisterMemberRequest extends IMemberIdParams {
  selectProducts: ISelectPurchasedProductsRequest;
  additionalInfo: IAddMemberAdditionalInfoRequest;
  paymentInfo: IRegisterPaymentInfoRequest;
}

export interface IPurchaseAdditionalOptionRequest extends IMemberIdParams {
  selectProducts: ISelectPurchasedProductsRequest;
  paymentInfo: IRegisterPaymentInfoRequest;
}
// 양도

export interface ITransferringInfo {
  transferFee: number; // 양도 수수료
  transferDate: string; // 양도 일자

  purchasedProductId: number; // 결제 상품 식별자
  transfereeName: string; // 양수인 이름
  transfereeGender: '남' | '여'; // 양수인 성별
  transfereeBirthDate: string; // 양수인 생년월일
  transfereePhone: string; // 양수인 연락처
  transfereeStartDate: string; // 양수인 이용 시작일

  transfereeCategoryId: number; // 양수인 회원 카테고리 식별자
}
export interface IRegisterMemberTransferRequest extends IMemberIdParams {
  transferInfo: ITransferringInfo;
}
// 환불

export interface IRefundInfo {
  refundAmount: number; // 환불 금액
  refundReason: string; // 환불 사유
  refundDate: string; // 환불 일자
  purchasedProductIds: number[]; // 결제 상품 식별자
}

export interface IRefundRequest extends IMemberIdParams {
  refundInfo: IRefundInfo;
}

// 홀딩
export interface IHoldingRequestBody {
  days: number; // 홀딩 일수
  reason: string; // 홀딩 사유 (선택 사항)
  startDate: string; // 홀딩 시작일
}

// 트레이너 할당

export interface IAssignTrainerToMemberRequest extends IMemberIdParams {
  trainerId: number;
}

export interface IHoldingRequest extends IHoldingRequestBody, IMemberIdParams {}

// 쿠폰
export interface IRegisterCouponRequest {
  name: string;
  phone: string;
  gender: GenderType;

  couponDays: number;

  referrerId: number;
  trainerId: number;

  branchId: number;
  memberCategoryId: number;
}

//예약
export interface IRegisterReservationRequest {
  name: string;
  phone: string;
  gender: GenderType;

  reservationDate: string;
  reservationPath: ReservationPathType;
  isRegistered: boolean;
  content: string;
  productType: ProductCategoryType;
  branchId: number;
  memberCategoryId: number;
}

export interface IReservationIdParams {
  reservationId: number;
}
export interface IUpdateReservedMemberRequestBody {
  reservationDate: string;
  reservationPath: ReservationPathType;
  isRegistered: boolean;
  productType: ProductCategoryType;
  content: string;
}

export interface IUpdateReservedMemberRequest
  extends IUpdateReservedMemberRequestBody,
    IReservationIdParams {}

export interface IActiveMemberRequest {
  branchId?: number;
}

export interface IAddMemberProfileImageRequest {
  profileImageUrl: string;
}

/*=================================*/
/*         🎁 상품 관리.             */
/*=================================*/

export interface IProductIdParams {
  productId: number;
}
export interface ICreateProductRequest {
  name: string;
  originalPrice: number;
  sellingPrice: number;
  duration: number;
  sessions: number;
  productCategoryId: number;
  branchId?: number;
}

export interface IUpdateProductRequestBody {
  name: string;
  status: ProductStatusType;
  originalPrice: number;
  sellingPrice: number;
  display: boolean;
  duration: number;
  sessions: number;
}

export interface IUpdateProductRequest extends IProductIdParams, IUpdateProductRequestBody {}

// 패키지 상품 등록
export interface ICreatePackageProductRequest {
  name: string;
  originalPrice: number;
  sellingPrice: number;
  productIds: number[]; // 선택된 상품들
  productCategoryId: number;
  branchId?: number;
}

// 상품 매출 조회
export interface ISalesStatisticQuery {
  branchName?: string;
  dates: string[];
}

/*=================================*/
/*         🔒 락커 관리.             */
/*=================================*/

export interface ILockerGroupIdParam {
  lockerGroupId: number;
}

export interface ILockerIdParam {
  lockerId: number;
}

// 락커 그룹 생성
export interface ICreateLockerGroupRequest {
  name: string; // 락커 그룹 이름 (최소 2자, 최대 50자)
  quantity: number; // 락커 수량 (1 이상의 숫자)
  rows: number; // 락커 행 수 (1 이상의 숫자)
  columns: number; // 락커 열 수 (1 이상의 숫자)
  startNumber: number; // 시작 번호 (1 이상의 숫자)
  direction: LockerDirectionType; // 락커 배치 방향
  branchId: number; // 지점 ID
}

type LockerUpdateStatusType = Omit<LockerStatusType, '사용 중'>;

// 락커 그룹 수정
interface IUpdateLockerGroupRequestBody {
  name: string; // 락커 그룹 이름 (최소 2자, 최대 50자)
}

export interface IUpdateLockerGroupRequest
  extends ILockerGroupIdParam,
    IUpdateLockerGroupRequestBody {}

// 락커 수정
interface IUpdateLockerRequestBody {
  status: LockerUpdateStatusType; // 변경할 락커 상태
  password: string;
  memo: string;
}

export interface IUpdateLockerRequest extends ILockerIdParam, IUpdateLockerRequestBody {}

// 락커 회원 배정
interface IAssignMemberToLockerRequestBody {
  memberId: number; // 배정할 회원 ID
  password: string; // 락커 비밀번호 (4자리 숫자)
  memo: string;
}

export interface IAssignMemberToLockerRequest
  extends ILockerIdParam,
    IAssignMemberToLockerRequestBody {}

// 락커 회원 해제

export interface IUnassignMemberFromLockerRequest extends ILockerIdParam {}

/*=================================*/
/*           📣 공지사항             */
/*=================================*/

export interface INoticeIdParam {
  noticeId: number;
}

export interface IAttachmentFileRequest {
  attachmentId: number;
  url: string;
  file: File; // ✅ 프론트에서만 추가
  fileType: FileTypes;
  fileName: string;
}

export interface ICreateNoticeRequest {
  title: string;
  content: string;
  type: NoticeType;
  startDate: string;
  endDate: string;
  branchId?: number;
  attachments?: IAttachmentFileRequest[];
}

interface IUpdateNoticeRequestBody {
  title?: string;
  content?: string;
  type?: NoticeType;
  status?: NoticeStatusType;
  startDate?: string;
  endDate?: string;
  branchId?: number;
}

export interface IUpdateNoticeRequest extends INoticeIdParam, IUpdateNoticeRequestBody {}

/*=================================*/
/*           📋 출석관리             */
/*=================================*/

// 출석 처리
export interface IAttendanceCheckRequest {
  memberId: number;
}

/*=================================*/
/*           📅⏰ 일정관리             */
/*=================================*/

export interface IRegisterScheduleRequest {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: ScheduleStatusType;
  scheduleType: ScheduleType;
  memberId: number;
}

export interface IScheduleIdParam {
  scheduleId: number;
}
export interface IUpdateScheduleRequest extends IScheduleIdParam {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: ScheduleStatusType;
}
export interface ICheckClassRequestBody {
  signature: Blob;
}

export interface ICheckClassCompleteRequest extends ICheckClassRequestBody, IScheduleIdParam {}

/*=================================*/
/*           💰💳 회계관리             */
/*=================================*/

export interface ISalaryVariablesIdParam {
  salaryVariablesId: number; // 급여 변수 식별자
}

export interface IUpdateSalaryVariablesRequest extends ISalaryVariablesIdParam {
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

// 회원권 포인트를 포함한 PT 매출액 인정 비율을 수정 파라미터
export interface IPtIncentiveRateWithMembershipPointIdParam {
  ptIncentiveRateWithMembershipPointId: number;
}

// 회원권 포인트를 제외한 PT 매출액 인정 비율을 수정 파라미터
export interface IPtIncentiveRateWithoutMembershipPointIdParam {
  ptIncentiveRateWithoutMembershipPointId: number;
}

// 급여 정산 파라미터
export interface ISalarySettlementIdParam {
  salarySettlementId: number;
}

// 회원권 포인트를 포함한 PT 매출액 인정 비율 테이블 수정
export interface IUpdatePtIncentiveRateWithMembershipPointRequestBody {
  membershipPoints?: number;
  ptIncentiveRecognitionRate?: number;
  ptRevenue?: number;
}

export interface IUpdatePtIncentiveRateWithMembershipPointRequest
  extends IUpdatePtIncentiveRateWithMembershipPointRequestBody,
    IPtIncentiveRateWithMembershipPointIdParam {}

// 회원권 포인트를 제외한 PT 매출액 인정 비율 테이블 수정
export interface IUpdatePtIncentiveRateWithoutMembershipPointRequestBody {
  ptIncentiveRecognitionRate?: number;
  ptRevenue?: number;
}
export interface IUpdatePtIncentiveRateWithoutMembershipPointRequest
  extends IUpdatePtIncentiveRateWithoutMembershipPointRequestBody,
    IPtIncentiveRateWithoutMembershipPointIdParam {}

// 급여 정산 내용 수정 (정산 완료 기능에도 포함)
export interface IUpdateSalarySettlementRequestBody {
  totalSalary?: number;
  baseSalary?: number;
  otIncentive?: number;
  ptIncentive?: number;
  generalIncentive?: number;
  isWalkinBenefit?: boolean;
  status?: SalarySettlementStatusType;
}

export interface IUpdateSalarySettlementRequest
  extends IUpdateSalarySettlementRequestBody,
    ISalarySettlementIdParam {}

// 급여 정산 요청
export interface IMySalarySettlementRequest {
  totalSalary: number;
  baseSalary: number;
  otIncentive: number;
  ptIncentive: number;
  generalIncentive: number;
}
