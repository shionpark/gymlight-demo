import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { countExpiredMembersByMonth, countRegisteredMembersByMonth } from '@/utils/member.utils';
import { IMemberResponse } from '@/types';

const MemberCountsChart = ({ members }: { members: IMemberResponse[] }) => {
  const getMonthlyMemberStats = (memberList: IMemberResponse[], months: number[]) => {
    return months.map((month) => ({
      month: `${month}월`,
      registered: countRegisteredMembersByMonth(memberList, month),
      expired: countExpiredMembersByMonth(memberList, month),
    }));
  };

  // 1월~5월 데이터 생성
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const monthlyStats = getMonthlyMemberStats(members, months);

  // ApexCharts 옵션
  const series = [
    {
      name: '등록 회원 수',
      data: monthlyStats.map((stat) => stat.registered),
    },
    {
      name: '만료 회원 수',
      data: monthlyStats.map((stat) => stat.expired),
    },
  ];

  // TODO: x축을 일,월,시간 중 어떻게 할지?

  const options: Partial<ApexOptions> = {
    chart: {
      id: 'member-register-expired-count-ratio',
      height: 340,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      stroke: {
        width: 4,
        curve: 'smooth',
      },
    } as ApexPlotOptions,
    colors: ['#77B6EA', '#545454'],
    title: {
      floating: false,
      text: '등록/만료 회원',
      align: 'left',
      style: {
        fontSize: '18px',
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: monthlyStats.map((stat) => stat.month), // ['1월', '2월', '3월', '4월', '5월']
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      min: 0,
    },
    legend: {},
    stroke: {
      curve: 'smooth',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
  };

  return <Chart options={options} series={series} type="line" />;
};

export default MemberCountsChart;
