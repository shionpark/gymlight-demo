import { useState } from 'react';

export interface UseCheckboxSelectionReturn<T> {
  /** 선택된 데이터를 저장하는 배열 */
  selectedItems: T[];

  /** 데이터 길이의 체크박스 선택 유무를 갖는 배열 */
  checkboxStates: boolean[];

  /** 체크박스 하나를 토글하는 함수 */
  toggleOneCheckbox: (dataId: number) => void;

  /** 데이터를 선택하거나 해제하는 함수 */
  selectOrDeselectItem: (dataId: number) => void;

  /** 선택한 데이터를 제거하는 함수 */
  removeSelectedItem: (dataId: number) => void;

  /** 선택된 데이터를 초기화하는 함수 */
  resetSelection: () => void;
}

/**
 * 선택된 데이터와 체크박스 상태를 관리하는 훅
 *
 * @param initialData - 객체 데이터 배열
 * @param idField - 객체 데이터의 고유 id 필드
 *
 */
export const useCheckboxSelection = <T>(
  initialData: T[],
  idField: keyof T,
): UseCheckboxSelectionReturn<T> => {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(
    new Array(initialData.length).fill(false),
  );

  const toggleOneCheckbox = (dataId: number) => {
    setCheckboxStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[dataId] = !updatedStates[dataId];
      return updatedStates;
    });
  };

  /** 데이터 내부 id 필드값
   * ex. 상품 데이터: productId, 락커 데이터: lockerId */
  const getIdValue = (data: T) => data[idField] as unknown as number;

  const removeSelectedItem = (dataId: number) => {
    setSelectedItems((prev) => prev.filter((item) => getIdValue(item) !== dataId));
    toggleOneCheckbox(dataId);
  };

  const selectOrDeselectItem = (dataId: number) => {
    const isAlreadySelected = selectedItems.some(
      (selectedItem) => getIdValue(selectedItem) === dataId,
    );

    if (isAlreadySelected) {
      removeSelectedItem(dataId);
    } else {
      toggleOneCheckbox(dataId);
      const selectedItem = initialData.find((item) => getIdValue(item) === dataId);
      if (selectedItem) {
        setSelectedItems((prev) => [...prev, selectedItem]);
      }
    }
  };

  const resetSelection = () => {
    setSelectedItems([]);
    setCheckboxStates(new Array(initialData.length).fill(false));
  };

  return {
    selectedItems,
    checkboxStates,
    toggleOneCheckbox,
    selectOrDeselectItem,
    removeSelectedItem,
    resetSelection,
  };
};
