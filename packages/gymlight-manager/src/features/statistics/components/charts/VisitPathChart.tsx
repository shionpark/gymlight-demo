import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { VisitPaths } from '@/constants';

const VisitPathChart = () => {
  const generateDummyData = () => Array.from({ length: 8 }, () => Math.floor(Math.random() * 20));

  const series = VisitPaths.map((path) => ({
    name: path,
    data: generateDummyData(),
  }));

  const optionsBar: Partial<ApexOptions> = {
    chart: {
      type: 'bar',
      height: 380,
      width: '100%',
      stacked: true,
      stackType: '100%',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
      },
    },
    // colors: colorPalette,
    dataLabels: {
      enabled: false,
    },
    labels: ['10', '11', '12', '13', '14', '15', '16', '17'],
    xaxis: {
      categories: [
        '2011 Q1',
        '2011 Q2',
        '2011 Q3',
        '2011 Q4',
        '2012 Q1',
        '2012 Q2',
        '2012 Q3',
        '2012 Q4',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#78909c',
        },
      },
    },
    title: {
      text: '방문 경로',
      align: 'left',
      style: {
        fontSize: '18px',
      },
    },
  };

  return <Chart options={optionsBar} series={series} type="bar" />;
};

export default VisitPathChart;
