import { useState } from 'react';

export interface UseToggleCheckboxReturn {
  /** 입력받은 체크박스 수 길이의 배열 */
  checkboxStates: boolean[];

  /** 현재 인덱스의 체크박스 상태를 토글하는 함수  */
  toggleOneCheckbox: (itemIndex: number) => void;

  /** 전체 체크박스 상태를 토글하는 함수  */
  toggleAllCheckboxes: () => void;

  /** 전체 체크박스 상태를 초기화(false)하는 함수  */
  resetCheckboxes: () => void;

  /** 인덱스로 체크박스 체크여부를 확인하는 함수*/
  isChecked: (index: number) => boolean;

  /** 전체 체크박스 중에서 선택된 체크박스 수  */
  checkboxCountSelected: number;
}

/**
 * 입력받는 수만큼 체크박스를 생성하고 인덱스를 기반으로 체크박스 상태를 관리하기 위한 커스텀 훅
 *
 * @param numberOfItems - 체크박스 개수
 *
 */
export const useToggleCheckbox = (numberOfItems: number): UseToggleCheckboxReturn => {
  const [checkboxStates, setCheckBoxStates] = useState<boolean[]>(
    new Array(numberOfItems).fill(false),
  );

  const toggleOneCheckbox = (itemIndex: number) => {
    setCheckBoxStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[itemIndex] = !updatedStates[itemIndex];
      return updatedStates;
    });
  };

  const toggleAllCheckboxes = () => {
    setCheckBoxStates((prev) => {
      const checkedCount = prev.filter((check) => check).length;

      if (checkedCount < numberOfItems) {
        return new Array(numberOfItems).fill(true);
      }
      return new Array(numberOfItems).fill(false);
    });
  };

  const resetCheckboxes = () => {
    setCheckBoxStates((prev) => new Array(prev.length).fill(false));
  };

  const checkboxCountSelected = checkboxStates.filter((check) => check).length;

  const isChecked = (index: number) => checkboxStates[index];

  return {
    checkboxStates,
    checkboxCountSelected,
    toggleOneCheckbox,
    toggleAllCheckboxes,
    resetCheckboxes,
    isChecked,
  };
};
