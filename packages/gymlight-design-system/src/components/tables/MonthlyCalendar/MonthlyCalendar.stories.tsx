import type { Meta, StoryObj } from '@storybook/react';

import MonthlyCalendar from './MonthlyCalendar';

/** ## MonthlyCalendar
 *
 * ### 개요
 *
 * 달력
 *
 * ### 사용처
 *
 * - 트레이너 일정관리
 * - 팀원 트레이너 일정 조회
 *
 * ### 사용팁
 *
 * 표시할 범위에 해당하는 컴포넌트의 배열을
 * dayCells prop으로 제공하면 됩니다.
 *
 *
 */
const meta: Meta<typeof MonthlyCalendar> = {
  title: 'components/tables/MonthlyCalendar',
  component: MonthlyCalendar,
  argTypes: {
    dayCells: {
      description: '각 날짜에 대한 ReactNode 배열',
      control: 'array',
      table: {
        type: { summary: 'ReactNode[]' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MonthlyCalendar>;

export const Default: Story = {
  args: {
    dayCells: Array.from({ length: 30 }, (_, i) => <div>{i}</div>),
  },
};
