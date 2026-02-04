import { useState } from 'react';

import { useSearchInput } from '@/hooks';

export const useMemberSearch = () => {
  const [activeMemberId, setActiveMemberId] = useState<number>();

  const { searchParam, searchInputRef, isSearching, runSearch, initSearchInputValue, endSearch } =
    useSearchInput();

  const handleActiveMemberId = (activeId?: number) => {
    setActiveMemberId((prev) => (prev === activeId ? undefined : activeId));
  };

  const resetState = () => {
    setActiveMemberId(undefined);
    endSearch();
  };

  return {
    searchInputRef,
    isSearching,
    searchParam,
    runSearch,
    initSearchInputValue,
    endSearch,
    resetState,

    activeMemberId,
    setActiveMemberId,
    handleActiveMemberId,
  };
};

export interface IReturnOfUseMemberSearch extends ReturnType<typeof useMemberSearch> {}
