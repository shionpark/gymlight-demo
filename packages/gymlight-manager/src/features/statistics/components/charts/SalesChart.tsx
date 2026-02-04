import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ISalesChartProps {
  data?: number[];
}

const dailyData = [
  4700000, 4500000, 5400000, 3800000, 5600000, 2400000, 6500000, 3100000, 3700000, 3900000, 6200000,
  5100000, 3500000, 4100000, 3500000, 2700000, 9300000, 5300000, 6100000, 2700000, 5400000, 4300000,
  1900000, 4600000,
];

const SalesChart = ({ width }: { width?: number }) => {
  const series = [
    {
      name: '매출',
      data: dailyData,
    },
  ];

  const options: Partial<ApexOptions> = {
    chart: {
      id: 'sales-chart',
      group: 'sparklines',
      type: 'area',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'straight',
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
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
    xaxis: {
      type: 'datetime',
    },
    colors: ['#DCE6EC'],
    title: {
      text: `$${'235,312'}`,
      offsetX: 30,
      style: {
        fontSize: '24px',
        // cssClass: 'apexcharts-yaxis-title',
      },
    },
    subtitle: {
      text: '매출',
      offsetX: 30,
      style: {
        fontSize: '14px',
        // cssClass: 'apexcharts-yaxis-title',
      },
    },
  };

  return <Chart options={options} series={series} type="area" />;
};

export default SalesChart;
