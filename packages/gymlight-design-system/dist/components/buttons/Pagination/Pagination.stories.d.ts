import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';
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
declare const meta: Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof Pagination>;
export declare const Default: Story;
export declare const Active: Story;
