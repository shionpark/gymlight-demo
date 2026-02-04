import { Dropdown, SquareButton } from 'gymlight-design-system';
import { CheckIcon } from '@heroicons/react/24/outline';

import { useToggleDropdownMenu } from '@/hooks';

import * as Styled from './SortDropdown.styles';

interface SortDropdownProps<T extends string> {
  sortParam: T;
  sortOptions: T[];
  setSortParam: (value: T) => void;
}

const SortDropdown = <T extends string>({
  sortParam,
  sortOptions,
  setSortParam,
}: SortDropdownProps<T>) => {
  const {
    toggleDropdownMenu: toggleFilterMenu,
    setDropdownMenuRef: setFilterMenuRef,
    checkDropdownMenuOpen: checkFilterMenuOpen,
    closeDropdownMenu: closeFilterDropdownMenu,
  } = useToggleDropdownMenu(1);

  const clickSortParam = (option: T) => {
    setSortParam(option);
    closeFilterDropdownMenu();
  };

  return (
    <Dropdown
      ref={setFilterMenuRef(0)}
      align="left"
      button={
        <SquareButton size="small" variant="outline" onClick={() => toggleFilterMenu(0)}>
          {sortParam}
          <Styled.Icon />
        </SquareButton>
      }
      distance={10}
      isDropdownMenuOpened={checkFilterMenuOpen(0)}
    >
      {sortOptions.map((option) => (
        <Styled.OptionWrapper key={option} onClick={() => clickSortParam(option)}>
          <span>{option}</span>
          {sortParam === option && <CheckIcon />}
        </Styled.OptionWrapper>
      ))}
    </Dropdown>
  );
};

export default SortDropdown;
