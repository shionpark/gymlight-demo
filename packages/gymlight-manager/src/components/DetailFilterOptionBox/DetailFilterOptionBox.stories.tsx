import { StoryObj, Meta } from '@storybook/react';
import DetailFilterOptionBox from './DetailFilterOptionBox';
import { useFilterOption } from '@/hooks';

const meta: Meta<typeof DetailFilterOptionBox> = {
  title: 'components/DetailFilterOptionBox',
  component: DetailFilterOptionBox,
  argTypes: {
    statusName: {
      control: 'text',
      description: 'status 정보의 종류',
    },
    statusFilterOptions: {
      control: 'array',
      description: 'status 상태가 될수있는 값들의 배열',
    },
    dateFilterOptions: {
      control: 'array',
      description: 'date 간격 상태값의 배열',
    },
    activeStatusFilterOptions: {
      control: 'array',
      description: '현재 활성화된 status Filter 옵션 배열 <br> statusFilterOptions의 부분집합',
    },
    getDateStateChangeHandler: {
      action: 'getDateStateChangeHandler',
      description: 'date 필터값의 상태 변경 핸들러를 생성하는 함수',
    },
    getStatusStateToggleHandler: {
      action: 'getStatusStateToggleHandler',
      description: 'status 필터값의 상태 변경 핸들러를 생성하는 함수',
    },
    dateFilterStates: {
      control: 'object',
      description: '날짜 필터의 상태값을 담은 객체',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DetailFilterOptionBox>;

export const Default: Story = {
  render: () => {
    const statusFilterOptions = ['만료예정', '만료', '신규'];
    const dateFilterOptions = ['시작일', '종료일'];
    const {
      activeStatusFilterOptions,
      dateFilterStates,
      getDateStateChangeHandler,
      getStatusStateToggleHandler,
    } = useFilterOption({
      statusFilterOptions,
      dateFilterOptions,
    });

    return (
      <DetailFilterOptionBox
        statusName="회원 상태"
        getDateStateChangeHandler={getDateStateChangeHandler}
        getStatusStateToggleHandler={getStatusStateToggleHandler}
        statusFilterOptions={statusFilterOptions}
        dateFilterOptions={dateFilterOptions}
        dateFilterStates={dateFilterStates}
        activeStatusFilterOptions={activeStatusFilterOptions}
      />
    );
  },
};
