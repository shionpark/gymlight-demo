import type { Meta, StoryObj } from '@storybook/react';
import SquareButton from './SquareButton';
/**
 *
 * ### 개요
 * 일반적으로 사용되는 버튼. 버튼의 텍스트 및 아이콘을 children으로 받음.
 *
 *  아이콘을 추가하고 싶을 경우, span 태그 내에 아이콘을 추가해야함.
 *
 *
 *
 */
declare const meta: Meta<typeof SquareButton>;
export default meta;
type Story = StoryObj<typeof SquareButton>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Active: Story;
export declare const Primary: Story;
export declare const Wide: Story;
export declare const WithIcon: Story;
