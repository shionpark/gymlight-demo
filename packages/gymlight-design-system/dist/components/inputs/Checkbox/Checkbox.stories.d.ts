import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
/** ## Checkbox
 *
 * ### 개요
 *
 * 특정 데이터를 선택하는데에 사용하기위한 체크박스
 *
 * ### 사용처
 *
 * 테이블 데이터 선택, 약관동의
 *
 * ### 팁
 *
 * 마우스 클릭 상호작용을 구현하려면 외부에서 id와 checked state를 prop으로 제공해야 합니다.
 * - 하단의 Default 항목만 직접 체크박스를 클릭하는 상호작용이 가능합니다.
 *     - show code 버튼으로 예시코드를 살펴보세요.
 * - 나머지항목은 스토리북의 controls 패널을 통해 디자인을 확인할 수있습니다.
 *
 * 체크박스와 실제로 상호작용이 가능하게 state가 연동된 항목에서는 controls 패널로 값을 변경할 수없습니다.
 * */
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof Checkbox>;
/** 기본
 *
 */
export declare const Default: Story;
/** 비활성화
 *
 */
export declare const Disabled: Story;
/** 선택적 체크박스
 *
 */
export declare const Optional: Story;
/** 필수 체크박스
 * - 주변에 붉은 shadow 디자인이 적용됩니다.
 */
export declare const Required: Story;
