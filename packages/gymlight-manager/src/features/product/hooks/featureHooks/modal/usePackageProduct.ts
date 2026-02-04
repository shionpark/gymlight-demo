import { useState } from 'react';
import { useToggleCheckbox } from '@/hooks';
import { IProductCategoryResponse } from '@/types';

export const usePackageProduct = ({
  categoryOptions,
}: {
  categoryOptions?: IProductCategoryResponse[];
}) => {
  const [selectValues, setSelectValues] = useState<number[]>(
    new Array(categoryOptions?.length || 0).fill(''),
  );

  const {
    checkboxStates: checkedProductOptions,
    toggleOneCheckbox: toggleOneProductOption,
    isChecked: isProductChecked,
  } = useToggleCheckbox(categoryOptions?.length || 0);

  const handleSelectChange = (index: number, value: number) => {
    setSelectValues((prev) => {
      const updatedValues = [...prev];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const getSelectedProducts = () => {
    return checkedProductOptions
      .map((isChecked, index) => (isChecked ? selectValues[index] : null))
      .filter((value): value is number => value !== null);
  };

  const selectedProductIds: number[] = getSelectedProducts();

  return {
    checkedProductOptions,
    toggleOneProductOption,
    isProductChecked,
    handleSelectChange,
    selectedProductIds,
  };
};
