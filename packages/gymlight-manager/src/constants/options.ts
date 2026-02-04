export const Modals = ['Submit', 'Info', 'Error', 'Alert', 'Timeout', 'Filter'] as const;

export const GENDERS = ['남', '여'] as const;

export const UserStatus = ['활성화', '비활성화', '승인대기', '승인거부', '탈퇴요청'] as const;

export const VisitPaths = ['인터넷 검색', 'SNS', '지인 소개', '기타', '선택 안함'] as const;

export const RESERVATION_PATHS = ['워크인', '전화', '인터넷'] as const;

export const PRODUCT_CATEGORIES = ['회원권', '운동복', '락커', 'PT', '패키지'] as const;

export const Contracts = ['신규', '재등록', '양도', '옵션 추가 결제', '환불'] as const;

export const ServiceOptions = ['OT 프로그램', '미라클텐데이'] as const;

export const JoinReasons = [
  '거리',
  'OT 프로그램',
  '친절한 직원',
  '기구&시설',
  '기타',
  '선택 안함',
] as const;

export const UserRoles = [
  '관리자',
  '매니저',
  '팀장 트레이너',
  '트레이너',
  '팀장 FC',
  'FC',
  '인포',
  '전지점 인포',
] as const;

export const PaymentMethods = ['카드', '현금', '계좌이체', '복합'] as const;

export const Branchs = ['서강대점', '명지대점', '연희연세대점', '구산연신내점'] as const;

export const JoinCategories = ['워크인', '소개', '만료', '당월만료', '미리재등록'] as const;

export const BranchStatus = ['영업중', '리모델링중', '폐점', '휴점'] as const;

export const BranchSorts = [
  '지점 번호(오름차순)',
  '지점 번호(내림차순)',
  '지점 이름(가나다순)',
  '지점 이름 역순(가나다순)',
  '오픈일(오래된순)',
  '오픈일(최신순)',
] as const;

export const TeamDepartments = ['트레이너', 'FC'] as const;

export const TeamSorts = [
  '팀 이름(가나다순)',
  '팀 이름 역순(가나다순)',
  '생성일(오래된순)',
  '생성일(최신순)',
  '수정일(오래된순)',
  '수정일(최신순)',
] as const;

export const StaffSorts = [
  '이름(가나다순)',
  '이름 역순(가나다순)',
  '생일(빠른순)',
  '생일(늦은순)',
  '나이(오름차순)',
  '나이(내림차순)',
  '가입일(오름차순)',
  '가입일(내림차순)',
  '로그인 실패 횟수(오름차순)',
  '로그인 실패 횟수(내림차순)',
  '수정일(오름차순)',
  '수정일(내림차순)',
] as const;

export const ProductSorts = [
  '상품 이름(가나다순)',
  '상품 이름 역순(가나다순)',
  '정가(높은순)',
  '정가(낮은순)',
  '판매가(높은순)',
  '판매가(낮은순)',
  '이용 기간(높은순)',
  '이용 기간(낮은순)',
  '이용 횟수(높은순)',
  '이용 횟수(낮은순)',
  '생성일(오래된순)',
  '생성일(최신순)',
  '수정일(오래된순)',
  '수정일(최신순)',
] as const;

export const ProductStatuses = ['판매중', '판매중지', '이벤트', '삭제'] as const;

export const ProductCategoriesEng = ['membership', 'package', 'clothing', 'locker', 'pt'] as const;

export const CardProviders = [
  '신한카드',
  '국민카드',
  '하나카드',
  '롯데카드',
  '삼성카드',
  '현대카드',
  '비씨카드',
  '외환카드',
  '카카오뱅크',
  '기업은행',
  '농협은행',
  '우리은행',
  '신한은행',
  '하나은행',
  '기타',
] as const;

export const MemberTableSortOptions = [
  '이름(오름차순)',
  '이름(내림차순)',
  '나이(오름차순)',
  '나이(내림차순)',
  '가입일(오름차순)',
  '가입일(내림차순)',
  '이용 시작일(오름차순)',
  '이용 시작일(내림차순)',
  '이용 종료일(오름차순)',
  '이용 종료일(내림차순)',
  '남은 일수(오름차순)',
  '남은 일수(내림차순)',
  '남은 횟수(오름차순)',
  '남은 횟수(내림차순)',
] as const;

export const BranchTableSortOptions = [
  '지점 번호(오름차순)',
  '지점 번호(내림차순)',
  '지점 이름(가나다순)',
  '지점 이름(가나다역순)',
  '오픈일(오래된순)',
  '오픈일(최신순)',
] as const;

export const MEMBER_STATUS_OPTIONS = [
  '활성화',
  '홀딩',
  '만료예정',
  '만료',
  '삭제',
  '예약중',
] as const;

export const MEMBER_CATEGORIES_CODE = {
  '등록 회원': 'REGISTERED',
  '예약 회원': 'RESERVATION',
  '쿠폰 회원': 'COUPON',
  '미등록 회원': 'UNREGISTERED',
} as const;

export const PRODUCT_CATEGORY_CODES = {
  패키지: 'PACKAGE',
  회원권: 'MEMBERSHIP',
  운동복: 'CLOTHING',
  락커: 'LOCKER',
  PT: 'PT',
} as const;

export const SCHEDULE_STATUSES = ['진행 중', '완료', '미완료', '취소'] as const;

export const SCHEDULE_TYPES = ['PT', 'OT', 'NORMAL'] as const;

export const DURATION_UNIT_OPTIONS = ['개월', '일'] as const;

export const SALARY_SETTLEMENT_STATUSES = ['정산완료', '정산대기'] as const;
