import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ISalesChartProps {
  data: number[];
}

const ProfitChart = ({ data }: ISalesChartProps) => {
  const series = [
    {
      name: '이익',
      data,
    },
  ];

  const options: Partial<ApexOptions> = {
    chart: {
      id: 'profit-chart',
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
      text: '이익',
      offsetX: 30,
      style: {
        fontSize: '14px',
        // cssClass: 'apexcharts-yaxis-title',
      },
    },
  };

  return <Chart options={options} series={series} type="area" />;
};

export default ProfitChart;
