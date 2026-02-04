import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';
/** ## Textarea
 *
 * ### 개요
 *
 * 여러줄의 텍스트를 입력받거나, 표시하기위한 컴포넌트
 *
 * ### 사용처
 *
 * 폼, 상세정보 모달
 *
 * ### 팁
 *
 * 텍스트 길이정보를 업데이트 하기위해서는 text state를 제공해주어야 합니다.
 * - Default 컴포넌트의 show code 버튼을 누르면 참고 코드를 볼 수 있습니다.
 * - read-only모드인경우에는 텍스트 길이가 표시되지 않습니다.
 *
 *
 */
declare const meta: Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof Textarea>;
/** 기본 (입력 모드)
 * - 텍스트 입력 가능
 * - 글자수 표시
 */
export declare const Default: Story;
/** 읽기 전용모드
 * - 텍스트 조회만 가능
 * - 글자수, 오류메시지 미표시
 */
export declare const ReadOnly: Story;
/** 오류 메시지 존재
 * - 메시지를 좌측 하단에 표기
 * - 입력 모드에서만 표시됨
 *
 */
export declare const withError: Story;
/** 작은사이즈
 * size를 small로 설정한것
 * - 입력 모드에서만 표시됨
 *
 */
export declare const SmallSize: Story;
