import { StoryObj, Meta } from '@storybook/react';
import LabeledContainer from './LabeledContainer';
/** ## LabeledContainer
 *
 * ### 개요
 *
 * label 컴포넌트를 묶어주는  컴포넌트
 *
 * ### 사용처
 *
 * - 컴포넌트에 라벨을 붙여주는 모든곳
 *
 * ### 사용팁
 *
 * flex-container입니다.
 * labelRatio와 label과 content의 너비 비율을 조정 할 수 있습니다.
 *
 *
 */
declare const meta: Meta<typeof LabeledContainer>;
export default meta;
type Story = StoryObj<typeof LabeledContainer>;
export declare const Default: Story;
export declare const Vertical: Story;
