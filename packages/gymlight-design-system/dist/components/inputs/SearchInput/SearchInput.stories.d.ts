import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';
/**
 *
 * ### 개요
 *
 * 검색을 위한 Input
 *
 * ### 사용처
 *
 * Header 및 Table
 *
 * ### 설명
 * Input 컴포넌트에서 SearchInput 컴포넌트에 불필요한 속성은 제거하여 작성했습니다.
 *
 * 스타일적으로 바뀐 부분은 아이콘과 border radius가 추가되었습니다!!!!
 * */
declare const meta: Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof SearchInput>;
/** 기본 검색창 */
export declare const Default: Story;
/** 에러 메시지 검색창 */
export declare const WithErrorMessage: Story;
/** ReadOnly 상태 스토리 */
export declare const ReadOnly: Story;
/** 작은 사이즈 검색창 */
export declare const SmallSize: Story;
export declare const WithInitFn: Story;
