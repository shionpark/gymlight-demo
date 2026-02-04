import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { IMemberResponse, MemberStatusType } from '@/types';

const MemberStatusChart = ({ members }: { members: IMemberResponse[] }) => {
  // 상태별 카운트 함수
  const countMemberStatus = (members: IMemberResponse[]) => {
    return members.reduce(
      (acc, member) => {
        if (member.status === '활성화') acc.active++;
        else if (member.status === '만료') acc.expired++;
        else if (member.status === '홀딩') acc.holding++;
        else if (member.status === '만료예정') acc.due++;
        return acc;
      },
      { active: 0, expired: 0, holding: 0, due: 0 },
    );
  };

  const { active, expired, holding, due } = countMemberStatus(members);

  // 차트 데이터 설정
  const labels: MemberStatusType[] = ['활성화', '만료', '홀딩', '만료예정'];
  const series = [active, expired, holding, due];

  // ApexCharts 옵션
  const options: Partial<ApexOptions> = {
    chart: {
      id: 'member-status-ratio',
      type: 'pie',
    },
    labels,
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: '75%',
        },
        offsetY: 8,
      },
      stroke: {
        colors: undefined,
      },
    } as ApexPlotOptions,
    colors: ['#76FF7B', '#FBBEA4', '#F190B3', '#FF7F3E'],
    title: {
      text: '회원 활성 상태',
      style: {
        fontSize: '18px',
      },
    },
    legend: {
      position: 'left',
      offsetY: 60,
    },
  };

  return <Chart options={options} series={series} type="pie" />;
};

export default MemberStatusChart;
