import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import type { IMemberResponse } from '@/types';
import { ChartContainer } from '../containers';

const MemberAgeChart = ({ members }: { members?: IMemberResponse[] }) => {
  // 연령대 그룹화 함수
  const getAgeGroup = (age: number): string => {
    if (age < 20) return '10대 이하';
    if (age < 30) return '20대';
    if (age < 40) return '30대';
    if (age < 50) return '40대';
    if (age < 60) return '50대';
    return '60대 이상';
  };

  // 연령대별 인원수 계산
  const transformData = (data?: IMemberResponse[]) => {
    const ageGroupMap = new Map<string, number>();

    data?.forEach((member) => {
      const group = getAgeGroup(member.age);
      ageGroupMap.set(group, (ageGroupMap.get(group) || 0) + 1);
    });

    return {
      labels: Array.from(ageGroupMap.keys()),
      series: Array.from(ageGroupMap.values()),
    };
  };

  const { labels, series } = transformData(members);

  // ApexCharts 옵션
  const options: Partial<ApexOptions> = {
    chart: {
      id: 'member-age-ratio',
      type: 'pie',
    },
    labels,
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        pie: {
          size: '75%',
        },
        offsetY: 8,
      },
      stroke: {
        colors: undefined,
      },
    } as ApexPlotOptions,
    colors: ['#e76f51', '#f4a261', '#e9c46a', '#8ab17d', '#2a9d8f', '#00537a'],
    title: {
      text: '회원 연령',
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

export default MemberAgeChart;
