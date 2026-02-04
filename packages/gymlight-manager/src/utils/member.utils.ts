import { ICheckedMemberResponse, IMemberResponse } from '@/types';

export const countRegisteredMembersByMonth = (memberList: IMemberResponse[], month: number) =>
  memberList
    .map((member) => new Date(member.startDate))
    .filter((date) => date.getMonth() + 1 === month).length;

export const countExpiredMembersByMonth = (memberList: IMemberResponse[], month: number) =>
  memberList
    .map((member) => new Date(member.endDate))
    .filter((date) => date.getMonth() + 1 === month).length;

export const useHourlyAttendanceStats = (attendanceList?: ICheckedMemberResponse[]) => {
  // 시간별 출석 통계 계산
  const statsMap = new Map<string, number>();

  attendanceList?.forEach((member: ICheckedMemberResponse) => {
    // "2024:10:31 14:32:33" → "14:00" 변환
    const hour = member.time.split(' ')[1].split(':')[0] + ':00';

    // 해당 시간에 대한 카운트 증가
    statsMap.set(hour, (statsMap.get(hour) || 0) + 1);
  });

  // 결과를 { hour: string; count: number }[] 형태로 변환
  return Array.from(statsMap.entries()).map(([hour, count]) => ({ hour, count }));
};
