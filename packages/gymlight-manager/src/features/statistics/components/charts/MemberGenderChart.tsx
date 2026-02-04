import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import type { IMemberResponse } from '@/types';

const MemberGenderChart = ({ members }: { members?: IMemberResponse[] }) => {
  // 성별별 인원수 계산
  const transformData = (data?: IMemberResponse[]) => {
    let maleCount = 0;
    let femaleCount = 0;

    data?.forEach((member) => {
      if (member.gender === '남') maleCount++;
      else if (member.gender === '여') femaleCount++;
    });

    return {
      labels: ['남성', '여성'],
      series: [maleCount, femaleCount],
    };
  };

  const { labels, series } = transformData(members);

  // ApexCharts 옵션
  const options: Partial<ApexOptions> = {
    chart: {
      id: 'member-gender-ratio',
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
    colors: ['#4A90E2', '#FF69B4'],
    title: {
      text: '회원 성별',
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

export default MemberGenderChart;
