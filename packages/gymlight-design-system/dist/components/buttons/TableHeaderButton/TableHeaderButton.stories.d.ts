import type { StoryObj, Meta } from '@storybook/react';
import TableHeaderButton from './TableHeaderButton';
/**  ## TableHeaderButton
 *
 * ### 개요
 *
 * 테이블에서 컬럼의 현재 정렬 상태를 보여주고, 정렬을 트리거하는 데 사용되는 버튼
 *
 * ### 사용처
 *
 * 테이블의 헤더중 정렬 기능이 있는 컬럼의 헤더
 *
 * ### 사용팁
 *
 * 정렬기능이 있는 테이블의 헤더 컴포넌트로 제공해주세요.
 * iconAnnotation을 사용하실거라면, 버튼의 width를 충분히 확보해주세요
 *
 */
declare const meta: Meta<typeof TableHeaderButton>;
export default meta;
type Story = StoryObj<typeof TableHeaderButton>;
/** Default
 *
 * sortOrder가 asc로 설정된 모습
 */
export declare const Default: Story;
/** WithIcon
 *
 * sortOrder가 asc로 설정된 모습
 */
export declare const WithIcon: Story;
/** With IconAnnotation
 *
 * 정렬 순서에 보충설명이 들어간 모습
 */
export declare const WithIconAnnotation: Story;
