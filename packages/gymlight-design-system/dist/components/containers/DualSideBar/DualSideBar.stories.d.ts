import type { StoryObj, Meta } from '@storybook/react';
import DualSideBar from './DualSideBar';
/**  ## DualSideBar
 *
 * ### 개요
 *
 * 좌우로 구성된 두 영역에 요소를 배치할 수 있는 컨테이너
 *
 * ### 사용처
 *
 *  **내부 탭** 이 있는 페이지 또는 모달:  좌우로 구분되는 선택 항목을 관리할 때 유용
 *
 *
 * ### 사용팁
 *
 * - `leftSideChildren`에는 왼쪽 영역에 들어갈 컴포넌트를 전달하고, `rightSideChildren`에는 오른쪽 영역에 들어갈 컴포넌트를 전달합니다.
 * - 기본적으로 prop의 값은 ReactNode[] 입니다
 *
 *  탭 전환 버튼은 여러가지 버튼들이 독립적으로 선언됩니다.
 * 따라서  <> </>태그를 통한 한개의 컴포넌트로 전달하는것보다, 배열의 형태로 전달하는것이 낫다고 여겨져 이렇게 만들었습니다.
 *
 *
 *
 **/
declare const meta: Meta<typeof DualSideBar>;
export default meta;
type Story = StoryObj<typeof DualSideBar>;
/**기본 디자인 */
export declare const Default: Story;
