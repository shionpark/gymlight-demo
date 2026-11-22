import type {
  ICheckedMemberResponse,
  ISearchMemberByPhoneSuffixResponse,
  MemberStatusType,
  ProductOptionsType,
} from '@/types';

import { mockMembers, mockActiveMembers } from './members.data';

// 실제 API처럼 "날짜 시각" 형태로 내려야 시간대별 출석 통계와 출석 상세가 파싱할 수 있다.
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/**
 * 오늘 출석한 회원 목록 Mock 데이터
 */
const generateTodayAttendances = (): ICheckedMemberResponse[] => {
  // 활성화된 회원 중 랜덤하게 출석 데이터 생성
  const activeMembers = mockMembers.filter((m) => m.status === '활성화');
  // 활성 회원의 약 8%가 하루에 출석하고, 출근 전·점심·퇴근 후에 몰린다.
  const attendedCount = Math.round(activeMembers.length * 0.08);
  const peakHours = [6, 6, 7, 7, 7, 8, 9, 10, 12, 12, 13, 15, 17, 18, 19, 19, 20, 20, 20, 21, 21, 22];

  return activeMembers.slice(0, attendedCount).map((member, index) => {
    const hour = peakHours[index % peakHours.length];
    const minute = Math.floor(Math.random() * 60);
    const time = `${today()} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`;

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
  const time = `${today()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:00`;

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
