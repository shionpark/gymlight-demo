export type ModalType =
  | 'default'
  | 'info'
  | 'filter'
  | 'alert'
  | 'success'
  | 'branch-status'
  | 'branch-info'
  | 'branch-delete'
  | 'mywork-schedule'
  | 'mywork-schedule-fetching-data'
  | 'mywork-settlement'
  | 'member-details'
  | 'member-assign-trainer'
  | 'member-holding'
  | 'coupon'
  | 'reservation'
  | 'staff-approval'
  | 'team-form'
  | 'locker-group'
  | 'locker-member-search'
  | 'locker-member-move'
  | 'product-modal'
  | 'product-create'
  | 'package-product-create'
  | 'salary-settlement'
  | 'notice-form';

export type GenderType = '남' | '여';

export type UserStatusType = '활성화' | '비활성화' | '승인대기' | '승인거부' | '탈퇴요청';

export type VisitPathType = '인터넷 검색' | 'SNS' | '지인 소개' | '기타' | '선택 안함';

export type ContractType = '신규' | '재등록' | '양도' | '옵션 추가 결제' | '환불';

export type PaymentType = '카드' | '현금' | '계좌이체' | '복합';

export type JoinReasonType =
  | '거리'
  | 'OT 프로그램'
  | '친절한 직원'
  | '기구&시설'
  | '기타'
  | '선택 안함';

export type UserRoleType =
  | '관리자'
  | '매니저'
  | '팀장 트레이너'
  | '트레이너'
  | '팀장 FC'
  | 'FC'
  | '인포'
  | '전지점 인포';

export type BranchType = '서강대점' | '명지대점' | '연희연세대점' | '구산연신내점';

export type JoinCategoryType = '워크인' | '소개' | '이전만료' | '당월만료' | '미리재등록';

export type BranchStatusType = '영업중' | '리모델링중' | '폐점' | '휴점';

export type BranchSortType =
  | '지점 번호(오름차순)'
  | '지점 번호(내림차순)'
  | '지점 이름(가나다순)'
  | '지점 이름(가나다역순)'
  | '오픈일(오래된순)'
  | '오픈일(최신순)';

export type TeamDepartmentType = '트레이너' | 'FC';

export type TeamSortType =
  | '팀 이름(가나다순)'
  | '팀 이름 역순(가나다순)'
  | '생성일(오래된순)'
  | '생성일(최신순)'
  | '수정일(오래된순)'
  | '수정일(최신순)';

export type TeamStaffSortType =
  | '이름(가나다순)'
  | '이름 역순(가나다순)'
  | '생일(빠른순)'
  | '생일(늦은순)'
  | '나이(오름차순)'
  | '나이(내림차순)'
  | '가입일(오름차순)'
  | '가입일(내림차순)'
  | '수정일(오름차순)'
  | '수정일(내림차순)';

export type StaffSortType =
  | '이름(가나다순)'
  | '이름 역순(가나다순)'
  | '생일(빠른순)'
  | '생일(늦은순)'
  | '나이(오름차순)'
  | '나이(내림차순)'
  | '가입일(오름차순)'
  | '가입일(내림차순)'
  | '로그인 실패 횟수(오름차순)'
  | '로그인 실패 횟수(내림차순)'
  | '수정일(오름차순)'
  | '수정일(내림차순)';

export type ProductSortType =
  | '상품 이름(가나다순)'
  | '상품 이름 역순(가나다순)'
  | '정가(높은순)'
  | '정가(낮은순)'
  | '판매가(높은순)'
  | '판매가(낮은순)'
  | '이용 기간(높은순)'
  | '이용 기간(낮은순)'
  | '이용 횟수(높은순)'
  | '이용 횟수(낮은순)'
  | '생성일(오래된순)'
  | '생성일(최신순)'
  | '수정일(오래된순)'
  | '수정일(최신순)';

export type MemberSortType =
  | '이름(오름차순)'
  | '이름(내림차순)'
  | '나이(오름차순)'
  | '나이(내림차순)'
  | '가입일(오름차순)'
  | '가입일(내림차순)'
  | '이용 시작일(오름차순)'
  | '이용 시작일(내림차순)'
  | '이용 종료일(오름차순)'
  | '이용 종료일(내림차순)'
  | '남은 일수(오름차순)'
  | '남은 일수(내림차순)'
  | '남은 횟수(오름차순)'
  | '남은 횟수(내림차순)';

export type ProductStatusType = '판매중' | '판매중지' | '이벤트' | '삭제';

export type ProductCategoryType = '회원권' | '패키지' | '운동복' | '락커' | 'PT';

export type ProductOptionsType = '회원권' | '운동복' | '락커' | 'PT';

export type ProductCategoryCodeType = 'MEMBERSHIP' | 'PACKAGE' | 'CLOTHING' | 'LOCKER' | 'PT';

export type CardCompanyType =
  | '신한카드'
  | 'KB카드'
  | '하나카드'
  | '롯데카드'
  | '삼성카드'
  | '현대카드'
  | '비씨카드'
  | '카카오뱅크'
  | 'IBK기업은행'
  | 'NH농협은행'
  | 'KB국민은행'
  | '우리은행'
  | '신한은행'
  | '하나은행'
  | '씨티은행'
  | 'SC제일은행'
  | '기타';

export type PaymentStatusType = '결제 완료' | '미수금' | '결제 대기';

export type ServiceOptionType = '미라클텐데이' | 'OT 프로그램';

export type LockerStatusType = '사용 가능' | '사용 중' | '예약 중' | '파손';

export type LockerDirectionType = '가로' | '세로';

export type FileTypes =
  | 'JPG'
  | 'JPEG'
  | 'PNG'
  | 'GIF'
  | 'PDF'
  | 'DOC'
  | 'DOCX'
  | 'XLS'
  | 'XLSX'
  | 'PPT'
  | 'PPTX'
  | 'ZIP'
  | 'RAR';

export type NoticeSortType =
  | '작성일(오름차순)'
  | '작성일(내림차순)'
  | '수정일(오름차순)'
  | '수정일(내림차순)'
  | '시작일(오름차순)'
  | '시작일(내림차순)'
  | '종료일(오름차순)'
  | '종료일(내림차순)';

export type NoticeStatusType = '활성화' | '비활성화';

export type NoticeType = '공지' | '이벤트';

export type MemberStatusType = '활성화' | '홀딩' | '만료예정' | '만료' | '삭제' | '예약중';

export type ReservationPathType = '워크인' | '전화' | '인터넷';

export type ScheduleStatusType = '진행 중' | '완료' | '미완료' | '취소';

export type ScheduleType = 'PT' | 'OT' | 'NORMAL';

export type DurationUnitType = '개월' | '일';

export type SalarySettlementStatusType = '정산완료' | '정산대기';
