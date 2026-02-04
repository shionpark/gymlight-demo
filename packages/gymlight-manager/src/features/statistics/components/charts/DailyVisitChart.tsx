import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { useHourlyAttendanceStats } from '@/utils/member.utils';
import type { ICheckedMemberResponse } from '@/types';

const DailyVisitChart = ({
  checkedInMembers,
  width,
  hasTitle,
}: {
  checkedInMembers?: ICheckedMemberResponse[];
  width?: number;
  hasTitle?: boolean;
}) => {
  const hourlyStats = useHourlyAttendanceStats(checkedInMembers);
  const allHours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}`);

  const attendanceData = allHours.map((hour) => {
    const entry = hourlyStats.find((stat) => stat.hour === `${hour}:00`);
    return entry ? entry.count : 0;
  });

  const totalAttendance = hourlyStats.reduce((sum, stat) => sum + stat.count, 0);

  const series = [
    {
      name: '회원수',
      data: attendanceData,
    },
  ];

  const options: Partial<ApexOptions> = {
    chart: {
      height: 340,
      type: 'area',
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'straight',
    },
    // colors: colorPalette,
    fill: {
      opacity: 1,
    },
    subtitle: {
      text: `${totalAttendance}`,
      align: 'center',
      margin: 30,
      offsetY: 40,
      style: {
        color: '#222',
        fontSize: '24px',
      },
    },
    title: {
      text: hasTitle ? '방문 회원수' : '',
      align: 'left',
      style: {
        fontSize: '18px',
      },
    },
    markers: {
      size: 0,
      style: 'hollow',
      hover: {
        opacity: 5,
      },
    } as ApexMarkers,
    // tooltip: {
    //   intersect: true,
    //   shared: false,
    // },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: allHours,
      tooltip: {
        enabled: false,
      },
      labels: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
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
    },
    // legend: {
    //   show: false,
    // },
  };

  return <Chart options={options} series={series} type="area" />;
};

export default DailyVisitChart;
