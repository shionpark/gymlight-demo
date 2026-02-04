import type { StoryObj, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
/**  ## Dropdown
 *
 * ### 개요
 *
 * 버튼과 섹션을 제공하면, 그 둘을 드롭다운으로 결합하여 제공하는 컴포넌트
 *
 * ### 사용처
 *
 * 한페이지를 차지하는 커다란 테이블이 필요한곳
 * - ex) 직원관리, 회원관리, 기타 조회페이지
 *
 *
 * ### 사용팁
 *
 *- 드롭다운 토글용 버튼 컴포넌트를 button에 삽입하고, 내용을 children에 삽입하세요
 *- 버튼을 따로 제공하지 않으면, 미트볼 모양의 default 버튼이 생성됩니다.
 *	    - default 버튼에 삽입하고 싶은 prop은 그냥 DropDown의 prop으로 제공하면 됩니다.
 *
 */
declare const meta: Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof Dropdown>;
/** 기본
 *
 */
export declare const Default: Story;
/** 외부에서 버튼 삽입 */
export declare const WithCustomButton: Story;
/** 왼쪽으로 확장되는 섹션 */
export declare const leftExpand: Story;
/** 오른쪽으로 확장되는 섹션 */
export declare const rightSpread: Story;
