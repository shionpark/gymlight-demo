import { usePagination } from '@/hooks';
import { useCouponList } from '../../fetchHooks';
import { useMyBranchInfo } from '@/features/auth';

export const useCouponMemberTable = () => {
  const { branchName } = useMyBranchInfo();

  // 페이지네이션 관리
  const { handlePageNumberChange, currentPageNumber, handlePageSizeChange, pageSize } =
    usePagination();

  // sort option 관리

  // 데이터 fetch api - 쿠폰 회원 목록
  //
  const { data } = useCouponList(
    {
      pageNum: currentPageNumber,
      pageSize: pageSize,
      branchName: branchName as string,
    },
    { enabled: Boolean(branchName) },
  );

  return {
    data,

    handlePageNumberChange,
    currentPageNumber,
    pageSize,
    handlePageSizeChange,
  };
};
