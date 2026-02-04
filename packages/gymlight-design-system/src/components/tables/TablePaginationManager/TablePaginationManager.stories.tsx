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
const meta: Meta<typeof TablePaginationManager> = {
  title: 'components/tables/TablePaginationManager',
  component: TablePaginationManager,
  argTypes: {
    currentPageIndexNumber: {
      control: { type: 'number' },
      description: '현재 페이지 번호',
      defaultValue: 1,
    },
    totalPageNumber: {
      control: { type: 'number' },
      description: '전체 페이지 수',
      defaultValue: 10,
    },
    pageSize: {
      control: { type: 'select' },
      options: [3, 5, 10, 15, 18, 20],
      description: '한 페이지에 표시할 데이터 수',
      defaultValue: 10,
    },
    handlePageIndexNumberChange: {
      action: 'Page index changed',
      description: '페이지 번호를 변경하는 핸들러',
    },
    handlePageSizeChange: {
      action: 'Page size changed',
      description: '페이지 크기를 변경하는 핸들러',
    },
    tableDataName: {
      control: { type: 'text' },
      description: '테이블 데이터의 이름 (예: 게시글, 사용자 등)',
      defaultValue: '게시글',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TablePaginationManager>;

export const Default: Story = {
  args: {
    currentPageIndexNumber: 1,
    totalPageNumber: 10,
    pageSize: 10,
    handlePageIndexNumberChange: (page) => console.log('Page changed:', page),
    handlePageSizeChange: (event) => console.log('Page size changed:', event.target.value),
    tableDataName: '데이터',
  },
};
