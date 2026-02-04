import { Meta, StoryObj } from '@storybook/react';
import TabButton from './TabButton';
/**
 *
 * ### 개요
 *
 * 페이지의 하위 요소. 탭을 클릭하면 해당 탭에 맞는 컴포넌트가 보여짐.
 *
 * ### 사용처
 *
 * 회원관리(공통), 통계관리(관리자), 회계관리(관리자), 지점관리(관리자), 내업무관리(트레이너), 실적관리(트레이너) 페이지
 *
 */
declare const meta: Meta<typeof TabButton>;
export default meta;
type Story = StoryObj<typeof TabButton>;
export declare const Default: Story;
export declare const Active: Story;
export declare const OverflowOutline: Story;
