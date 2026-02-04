import type { Meta, StoryObj } from '@storybook/react';
import SelectWithCustomOption from './SelectWithCustomOption';
/** ## SelectWithCustomOption
 *
 *
 * ## 개요
 *
 * 사용자가 value를 직접 수정할수있는 option을 포함하는 Select
 *
 * ## 사용처
 *
 * 페이지네이션 쿼리로 데이터를 조회하는곳, 그중에서 유저의 자율 설정이 필요하다 싶은 모든곳
 *
 * ## 사용 팁
 *
 * 그냥 일반 Select처럼 사용하세요.
 * children으로 option을 여러개 넣어주면 됩니다.
 *
 * 자동으로 "직접입력" 이라는 option이 추가되고, 해당 option 선택시, Select가 input으로 변경됩니다.
 * 만약 "직접입력" 텍스트를 다른 값으로 변경하고싶다면, triggerValue에 원하는 값을 전달해주세요.
 */
declare const meta: Meta<typeof SelectWithCustomOption>;
export default meta;
type Story = StoryObj<typeof SelectWithCustomOption>;
export declare const Default: Story;
