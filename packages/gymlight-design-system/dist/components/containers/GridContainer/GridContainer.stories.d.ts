import { StoryObj, Meta } from '@storybook/react';
import GridContainer from './GridContainer';
/** ## GridContainer
 *
 * ### 개요
 *
 * 그리드 요소들을 감싸는 컨테이너 컴포넌트
 *
 * ### 사용처
 *
 * 그리드 컨테이너를 사용하는 모든 곳
 *
 * ### 사용팁
 *
 * 기본 그리드 방향은 가로입니다.
 * 따라서 direction boolean값을 설정하면 세로로 바뀌고 columns 값이 rows처럼 설정됩니다.
 *
 */
declare const meta: Meta<typeof GridContainer>;
export default meta;
type Story = StoryObj<typeof GridContainer>;
export declare const Horizontal: Story;
export declare const Vertical: Story;
