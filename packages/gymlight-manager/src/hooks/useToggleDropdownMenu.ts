import { useState, useEffect, useRef, useCallback, type MutableRefObject } from 'react';

export interface UseToggleDropdownMenuReturn {
  /** 입력받은 드롭다운 수 길이의 배열 */
  dropdownMenuOpenStates: boolean[];

  /** 현재 인덱스의 드롭다운 메뉴 상태를 토글하는 함수  */
  toggleDropdownMenu: (itemIndex: number) => void;

  /** 현재 인덱스의 드롭다운 메뉴 상태를 리턴하는 함수  */
  checkDropdownMenuOpen: (itemIndex: number) => boolean;

  /** 현재 열려있는 드롭다운을 닫는 함수 */
  closeDropdownMenu: () => void;

  /** 드롭다운 메뉴에서 발생하는 이벤트를 감지하기 위해 전달하는 콜백 ref 함수  */
  setDropdownMenuRef: (index: number) => (node: HTMLDivElement | null) => void;

  /** Dropdown의 ref를 담은 배열 */
  dropdownMenuRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

/**
 * 입력받는 수만큼 드롭다운 ref를 생성하고 인덱스를 기반으로 드롭다운의 열림/닫힘 상태를 관리하기 위한 커스텀 훅
 *
 * @param numberOfItems - 드롭다운 개수
 *
 */
export const useToggleDropdownMenu = (numberOfItems: number): UseToggleDropdownMenuReturn => {
  const [dropdownMenuOpenStates, setDropdownMenuOpenState] = useState<boolean[]>(
    Array(numberOfItems).fill(false),
  );

  const closeDropdownMenu = () => {
    setDropdownMenuOpenState(Array(numberOfItems).fill(false));
  };

  const toggleDropdownMenu = (itemIndex: number) => {
    setDropdownMenuOpenState((prevState) =>
      prevState.map((isOpen, index) => (index === itemIndex ? !isOpen : false)),
    );
  };

  const dropdownMenuRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setDropdownMenuRef = useCallback(
    (index: number) => (node: HTMLDivElement | null) => {
      dropdownMenuRefs.current[index] = node;
    },
    [],
  );

  const checkDropdownMenuOpen = (itemIndex: number) => dropdownMenuOpenStates[itemIndex];

  useEffect(() => {
    if (numberOfItems) {
      closeDropdownMenu();
    }
  }, [numberOfItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      dropdownMenuRefs.current.forEach((ref) => {
        if (ref && !ref.contains(event.target as Node)) {
          setDropdownMenuOpenState((prevState) => prevState.map(() => false));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [numberOfItems]);

  return {
    dropdownMenuOpenStates,
    toggleDropdownMenu,
    checkDropdownMenuOpen,
    setDropdownMenuRef,
    closeDropdownMenu,
    dropdownMenuRefs,
  };
};
