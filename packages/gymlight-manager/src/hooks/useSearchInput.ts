import { useRef, useState } from 'react';

interface IUseSearchInputReturn {
  /**검색 input ref */
  searchInputRef: React.RefObject<HTMLInputElement>;

  /** 현재 검색어가 설정되어 있는지 여부*/
  isSearching: boolean;

  /** query에 연동할 상태값 */
  searchParam: string;
  /** 검색시작: input의 value를 searchParam에 저장 */
  runSearch: () => void;
  /** 검색 파라미터 초기화 함수 */
  initSearchInputValue: () => void;
  /** 검색종료: searchParam을 초기화 */
  endSearch: () => void;
}

/**
 * 쿼리에 사용하는 search 파라미터 state와 input 컴포넌트를 관리하는 커스텀 훅
 *
 */
export const useSearchInput = (): IUseSearchInputReturn => {
  const [searchParam, setSearchParam] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const runSearch = () => {
    if (!searchInputRef.current) {
      return;
    }
    setSearchParam(searchInputRef.current.value);
    setIsSearching(true);
  };

  const initSearchInputValue = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  const endSearch = () => {
    initSearchInputValue();
    setSearchParam('');
    setIsSearching(false);
  };

  return {
    searchInputRef,
    isSearching,

    searchParam,

    runSearch,
    endSearch,
    initSearchInputValue,
  };
};
