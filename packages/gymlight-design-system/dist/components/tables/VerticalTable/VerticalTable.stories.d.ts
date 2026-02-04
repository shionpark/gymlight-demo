import type { Meta, StoryObj } from '@storybook/react';
import VerticalTable from './VerticalTable';
/**  ## VerticalTable
 *
 * ### 개요
 *
 * 컬럼별 길이설정이 가능한 테이블 컴포넌트
 *
 * ### 사용처
 *
 * 한페이지를 차지하는 커다란 테이블이 필요한곳
 * - ex) 직원관리, 회원관리, 기타 조회페이지
 *
 *
 * ### 사용팁
 * - children을 사용하지 않습니다. tr, th, td와 같은 항목은 내부에서 생성됩니다.
 * - 모든 정보는 배열형태의 prop으로 입력받습니다.
 *
 *
 *
 *
 */
declare const meta: Meta<typeof VerticalTable>;
export default meta;
type Story = StoryObj<typeof VerticalTable>;
export declare const Default: Story;
/** 체크박스 결합
 *
 */
export declare const WithCheckbox: Story;
