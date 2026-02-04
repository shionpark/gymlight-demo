import { StoryObj, Meta } from '@storybook/react';
import TablePaginationManager from './TablePaginationManager';
/**## TablePaginationManager
 *
 *
 * ### 개요
 *
 * 테이블의 하단에서, 페이지 네이션 기능을 담당하는 컴포넌트
 *
 * ### 사용처
 *
 * 페이지네이션 쿼리와 테이블을 사용하는곳 어디든
 *
 *
 */
declare const meta: Meta<typeof TablePaginationManager>;
export default meta;
type Story = StoryObj<typeof TablePaginationManager>;
export declare const Default: Story;
