import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';
import Pagination from './Pagination';
import { useState } from 'react';

/**
 *
 * ### 개요
 * 페이지의 넘김 버튼. 기본적으로 다섯개의 페이지가 보여지며, '다음' 버튼을 누르면 그 다음 다섯개의 페이지가 보여짐.
 *
 * 맨 처음 페이지를 클릭할 경우 왼쪽 화살표가 disabled 되며, 맨 마지막 페이지를 클릭할 경우 오른쪽 화살표가 disabled 됌.
 *
 * ### 사용법 예시
 * 작성하고 있는 컴포넌트 내에 page 상태를 관리하는 훅을 생성합니다.
 * 
 ```tsx
  const currentPage = 1;
  const [page, setPage] = useState(currentPage);
  const handlePage = (pageNum: number) => {
    setPage(pageNum);
  };
 ```
 * Pagination를 리턴합니다. 다음과 같이 작성할 수 있습니다.

 * ```tsx
 * <Pagination
    currentPage={page}
    totalPages={10}
    onPageChange={(pageNum) => handlePage(pageNum)}
  />
 * ```
 *
 */

const meta: Meta<typeof Pagination> = {
  title: 'Components/Buttons/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    onClick: { action: 'clicked' },
    onPageChange: { action: 'clicked' },
    variant: { control: 'text', options: ['normal', 'active'] },
    currentPage: { control: 'number', defaultValue: 1 },
    totalPages: { control: 'number', defaultValue: 10 },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    variant: 'normal',
    currentPage: 1,
    totalPages: 15,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      args.onPageChange(page);
    };

    return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
  },
};

export const Active: Story = {
  args: {
    ...Default,
    variant: 'active',
    currentPage: 1,
  },
};
