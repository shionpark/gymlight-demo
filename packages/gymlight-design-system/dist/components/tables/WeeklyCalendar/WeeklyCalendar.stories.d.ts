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
declare const meta: Meta<typeof WeeklyCalendar>;
export default meta;
type Story = StoryObj<typeof WeeklyCalendar>;
export declare const Default: Story;
