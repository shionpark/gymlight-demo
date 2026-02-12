import type {
  ICheckedMemberResponse,
  ISearchMemberByPhoneSuffixResponse,
  MemberStatusType,
  ProductOptionsType,
} from '@/types';

import { mockMembers, mockActiveMembers } from './members.data';

/**
 * 오늘 출석한 회원 목록 Mock 데이터
 */
const generateTodayAttendances = (): ICheckedMemberResponse[] => {
  // 활성화된 회원 중 랜덤하게 출석 데이터 생성
  const activeMembers = mockMembers.filter((m) => m.status === '활성화');
  const attendedCount = Math.min(47, activeMembers.length);

  return activeMembers.slice(0, attendedCount).map((member, index) => {
    const hour = 6 + Math.floor(index / 6); // 6시부터 시작
    const minute = (index * 10) % 60;
    const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

    const productTypes: ProductOptionsType[] = ['회원권'];
    if (member.remainingSessions > 0) {
      productTypes.push('PT');
    }

    return {
      attendanceId: 1000 + index,
      code: `ATT${String(1000 + index)}`,
      time,
      memberId: member.memberId,
      name: member.name,
      status: member.status as MemberStatusType,
      profileImageUrl: undefined,
      remainingDays: member.remainingDays,
      remainingSessions: member.remainingSessions,
      productTypes,
    };
  });
};

export const mockTodayAttendances: ICheckedMemberResponse[] = generateTodayAttendances();

/**
 * 전화번호 뒷자리로 회원 검색 (출석용)
 */
export const searchMembersForAttendance = (
  phoneSuffix: string,
): ISearchMemberByPhoneSuffixResponse[] => {
  return mockActiveMembers
    .filter((member) => member.phone.replace(/-/g, '').endsWith(phoneSuffix))
    .slice(0, 10) // 최대 10명
    .map((member) => ({
      memberId: member.memberId,
      name: member.name,
      phone: member.phone,
    }));
};

/**
 * 출석 체크 처리
 */
let attendanceIdCounter = mockTodayAttendances.length + 1000;

export const createAttendance = (memberId: number): ICheckedMemberResponse | null => {
  const member = mockMembers.find((m) => m.memberId === memberId);
  if (!member) return null;

  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const productTypes: ProductOptionsType[] = ['회원권'];
  if (member.remainingSessions > 0) {
    productTypes.push('PT');
  }

  const newAttendance: ICheckedMemberResponse = {
    attendanceId: attendanceIdCounter++,
    code: `ATT${attendanceIdCounter}`,
    time,
    memberId: member.memberId,
    name: member.name,
    status: member.status as MemberStatusType,
    profileImageUrl: undefined,
    remainingDays: member.remainingDays,
    remainingSessions: member.remainingSessions,
    productTypes,
  };

  mockTodayAttendances.unshift(newAttendance);

  return newAttendance;
};
