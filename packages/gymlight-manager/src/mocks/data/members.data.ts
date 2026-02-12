import type {
  IMemberResponse,
  IMemberCategoryResponse,
  IActiveMemberResponse,
  IMemberDetailsResponse,
  IMemberInfoResponse,
  IMemberPurchasedProduct,
  IMemberAdditionalInfo,
  IMemberPaymentInfo,
  IMemberHoldingInfo,
  GenderType,
  MemberStatusType,
  VisitPathType,
  JoinReasonType,
  JoinCategoryType,
  PaymentStatusType,
} from '@/types';

import {
  generateKoreanName,
  generateKoreanPhone,
  generateBirthDate,
  generateKoreanAddress,
  generateGender,
  generateMemberStatus,
  generateRemainingDays,
  calculateAge,
  generatePastDate,
} from '../utils/generators';
import { mockBranches } from './branches.data';

/**
 * 회원 카테고리 Mock 데이터
 */
export const mockMemberCategories: IMemberCategoryResponse[] = [
  { memberCategoryId: 1, name: '신규', code: 'NEW' },
  { memberCategoryId: 2, name: '소개', code: 'REFERRAL' },
  { memberCategoryId: 3, name: '워크인', code: 'WALKIN' },
  { memberCategoryId: 4, name: '이전만료', code: 'PREV_EXPIRED' },
  { memberCategoryId: 5, name: '당월만료', code: 'THIS_MONTH_EXPIRED' },
  { memberCategoryId: 6, name: '미리재등록', code: 'PRE_REREGISTER' },
];

/**
 * 50명의 회원 Mock 데이터 생성
 */
const generateMembers = (): IMemberResponse[] => {
  const members: IMemberResponse[] = [];

  for (let i = 1; i <= 50; i++) {
    const gender = generateGender();
    const name = generateKoreanName(gender);
    const birthDate = generateBirthDate(20, 55);
    const status = generateMemberStatus();
    const remainingDays = generateRemainingDays(status);
    const branchIndex = (i - 1) % 4;
    const branch = mockBranches[branchIndex];
    const joinDate = generatePastDate(365);

    const startDate = joinDate;
    const endDateObj = new Date(startDate);
    endDateObj.setDate(endDateObj.getDate() + remainingDays + 90); // 기본 90일 + 남은 일수

    members.push({
      memberId: i,
      name,
      gender: gender as GenderType,
      birthDate,
      age: calculateAge(birthDate),
      phone: generateKoreanPhone(),
      address: generateKoreanAddress(),
      joinDate,
      startDate,
      endDate: endDateObj.toISOString().split('T')[0],
      remainingDays,
      remainingSessions: status === '활성화' ? Math.floor(Math.random() * 30) + 5 : 0,
      status: status as MemberStatusType,
      branchId: branch.branchId,
      branchName: branch.name,
      trainerId: status === '활성화' ? ((i % 3) + 3) : undefined, // 트레이너 ID 3~5
      trainerName: status === '활성화' ? ['박팀장', '이트레이너', '최트레이너'][(i % 3)] : undefined,
    });
  }

  return members;
};

export const mockMembers: IMemberResponse[] = generateMembers();

/**
 * 활성화된 회원 목록 (검색용)
 */
export const mockActiveMembers: IActiveMemberResponse[] = mockMembers
  .filter((m) => m.status === '활성화')
  .map((m) => ({
    memberId: m.memberId,
    name: m.name,
    phone: m.phone,
  }));

/**
 * 회원 ID로 검색
 */
export const findMemberById = (memberId: number): IMemberResponse | undefined => {
  return mockMembers.find((member) => member.memberId === memberId);
};

/**
 * 이름으로 회원 검색
 */
export const searchMembersByName = (keyword: string): IMemberResponse[] => {
  return mockMembers.filter((member) => member.name.includes(keyword));
};

/**
 * 전화번호 뒷자리로 회원 검색
 */
export const searchMembersByPhoneSuffix = (suffix: string): IMemberResponse[] => {
  return mockMembers.filter((member) => member.phone.endsWith(suffix));
};

/**
 * 지점별 회원 필터링
 */
export const getMembersByBranch = (branchId: number): IMemberResponse[] => {
  return mockMembers.filter((member) => member.branchId === branchId);
};

/**
 * 상태별 회원 필터링
 */
export const getMembersByStatus = (status: MemberStatusType): IMemberResponse[] => {
  return mockMembers.filter((member) => member.status === status);
};

/**
 * 회원 상세 정보 생성
 */
export const generateMemberDetails = (memberId: number): IMemberDetailsResponse | null => {
  const member = findMemberById(memberId);
  if (!member) return null;

  const memberInfo: IMemberInfoResponse = {
    memberId: member.memberId,
    name: member.name,
    gender: member.gender,
    birthDate: member.birthDate,
    phone: member.phone,
    address: member.address,
    visitPath: '인터넷 검색' as VisitPathType,
    joinReason: 'OT 프로그램' as JoinReasonType,
    startDate: member.startDate,
    endDate: member.endDate,
    profileImageUrl: '',
    memberCategoryId: 1,
    remainingDays: member.remainingDays,
    remainingSessions: member.remainingSessions,
    remainingOtCounts: 2,
    remainingHoldingCounts: 3,
    status: member.status,
    branchId: member.branchId,
    branchName: member.branchName,
    memberCategoryName: '신규',
    memberCategoryCode: 'NEW',
    trainerId: member.trainerId || 0,
    trainerName: member.trainerName || '',
    trainerPhone: member.trainerId ? '010-3456-7890' : '',
  };

  const purchasedProducts: IMemberPurchasedProduct[] = [
    {
      purchasedProductId: memberId * 10 + 1,
      productType: '회원권',
      remainingDays: member.remainingDays,
      remainingSessions: 0,
      isPackage: false,
      isTransferable: member.status === '활성화',
      isRefundable: member.status === '활성화',
      createdAt: member.joinDate,
      updatedAt: member.joinDate,
    },
  ];

  if (member.remainingSessions > 0) {
    purchasedProducts.push({
      purchasedProductId: memberId * 10 + 2,
      productType: 'PT',
      remainingDays: member.remainingDays,
      remainingSessions: member.remainingSessions,
      isPackage: false,
      isTransferable: true,
      isRefundable: true,
      createdAt: member.joinDate,
      updatedAt: member.joinDate,
    });
  }

  const memberAdditionalInfo: IMemberAdditionalInfo = {
    memberAdditionalInfoId: memberId,
    notes: '특이사항 없음',
    joinType: '워크인' as JoinCategoryType,
    serviceOptions: ['OT 프로그램'],
    miracleTenDays: false,
    createdAt: member.joinDate,
    updatedAt: member.joinDate,
  };

  const payments: IMemberPaymentInfo[] = [
    {
      paymentId: memberId * 100 + 1,
      totalAmount: 990000,
      paidAmount: 990000,
      receivableAmount: 0,
      discountAmount: 0,
      cashAmount: 0,
      cardAmount: 990000,
      bankTransferAmount: 0,
      paymentMethod: '카드',
      cardApprovalNo: '12345678',
      cardCompany: '신한카드',
      paymentStatus: '결제 완료' as PaymentStatusType,
      createdAt: member.joinDate,
      updatedAt: member.joinDate,
    },
  ];

  const holdings: IMemberHoldingInfo[] = member.status === '홀딩'
    ? [
        {
          holdingId: memberId,
          days: 14,
          reason: '개인 사정',
          startDate: new Date().toISOString().split('T')[0],
          endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]
    : [];

  return {
    member: memberInfo,
    purchasedProducts,
    memberAdditionalInfo,
    payments,
    holdings,
  };
};
