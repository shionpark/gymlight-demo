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
declare const meta: Meta<typeof MonthlyCalendar>;
export default meta;
type Story = StoryObj<typeof MonthlyCalendar>;
export declare const Default: Story;
