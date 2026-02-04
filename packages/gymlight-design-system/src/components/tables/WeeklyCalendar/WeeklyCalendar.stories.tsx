import type { Meta, StoryObj } from '@storybook/react';

import WeeklyCalendar from './WeeklyCalendar';

/** ## WeeklyCalendar
 *
 * ### 개요
 *
 * 주간 계획표를 표시하기 위한 테이블
 *
 * ### 사용처
 *
 * -  트레이너의 업무관리
 * - 팀장트레이너의 팀관리
 *
 * ### 사용 팁
 *
 * dateCells, dayCells 모두 길이가 7인 배열이어야합니다.
 *
 *
 */
const meta: Meta<typeof WeeklyCalendar> = {
  title: 'components/tables/WeeklyCalendar',
  component: WeeklyCalendar,
  argTypes: {
    dateCells: {
      description: '날짜를 표시하는 컴포넌트 배열',
      details: 'ReactNode[]',
    },
    dayCells: {
      description: '스케쥴 컴포넌트 배열을 원소로 갖는 배열',
      details: 'ReactNode[][]',
    },
  },
};

export default meta;

type Story = StoryObj<typeof WeeklyCalendar>;

export const Default: Story = {
  args: {
    dayCells: Array.from({ length: 7 }, (_, i) =>
      Array.from({ length: 4 }, (_, j) => (
        <div>
          {i}일정{j}
        </div>
      )),
    ),
    dateCells: Array.from({ length: 7 }, (_, i) => i + 1),
  },
};
