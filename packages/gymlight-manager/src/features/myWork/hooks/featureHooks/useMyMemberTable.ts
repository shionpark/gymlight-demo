import { useSearchInput, usePagination } from '@/hooks';
import { useMyMemberList } from '../fetchHooks';
import { useMyWorkModals } from './useMyWorkModals';

export const useMyMemberTable = () => {
  const { currentPageNumber, handlePageNumberChange, handlePageSizeChange, pageSize } =
    usePagination();

  const {
    searchInputRef,
    isSearching,

    searchParam,
    runSearch,
    endSearch,
  } = useSearchInput();

  const { data: myMembers } = useMyMemberList({ pageNum: currentPageNumber, pageSize });

  const { openMemberDetailsModal, openScheduleFormModal } = useMyWorkModals();

  return {
    currentPageNumber,
    handlePageNumberChange,
    handlePageSizeChange,
    pageSize,

    searchInputRef,
    isSearching,
    myMembers,

    searchParam,

    openMemberDetailsModal,
    openScheduleFormModal,

    runSearch,
    endSearch,
  };
};
