import { Meta, StoryObj } from '@storybook/react';
import StatusButton from './StatusButton';
/**
 * #### 개요
 *
 * prop으로 넘겨주는 색상코드(`colors`)에서 현재 상태(`status`)의 배경색을 갖는 버튼
 *
 * #### 사용처
 *
 * 상품의 카테고리 버튼(ex.회원권, PT, ...), 락커의 상태 표시 버튼(ex.사용가능, 사용중, ...)
 *
 * #### 사용 방법
 *
 * 색상 코드 객체와 현재 버튼의 상태를 prop으로 넘겨줌
 *
 */
declare const meta: Meta<typeof StatusButton>;
export default meta;
type Story = StoryObj<typeof StatusButton>;
export declare const Default: Story;
export declare const FormattedText: Story;
