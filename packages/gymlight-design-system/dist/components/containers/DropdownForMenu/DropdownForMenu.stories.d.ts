import type { StoryObj, Meta } from '@storybook/react';
import DropdownForMenu from './DropdownForMenu';
/**  ## DropdownForMenu
 *
 * ### 개요
 *
 * 드롭다운 메뉴 스타일 컴포넌트
 *
 * ### 사용처
 *
 * Dropdown 컴포넌트의 children으로 전달하는 각 메뉴를 감싸서 사용
 *
 *
 * ### 사용팁
 *
 * DropdownForMenu에 전달하는 children 요소에 커스텀 스타일링을 할 수 있습니다.
 *
 */
declare const meta: Meta<typeof DropdownForMenu>;
export default meta;
type Story = StoryObj<typeof DropdownForMenu>;
/** 기본
 *
 */
export declare const Default: Story;
/** Dropdown과 함께 사용 */
export declare const WithDropdown: Story;
/** 커스텀 스타일 */
export declare const CustomDropdownForMenu: Story;
