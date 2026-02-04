import { useCallback, useMemo } from 'react';

import type { ProductCategoryCodeType, ProductCategoryType } from '@/types';
import { useProductCategories } from '../../fetchHooks';

export const useProductCategoryData = () => {
  const { data: productCategoryData } = useProductCategories();

  const categoryOptions = useMemo(
    () => productCategoryData?.filter(({ name }) => name !== '패키지'),
    [productCategoryData],
  );

  const categoryNames = useMemo(
    () => productCategoryData?.map((category) => category.name),
    [productCategoryData],
  );

  const getCategoryInfoByName = useCallback(
    (categoryName: ProductCategoryType) =>
      productCategoryData?.find(({ name }) => name === categoryName) || null,
    [productCategoryData],
  );

  return {
    categoryOptions,
    categoryNames,
    getCategoryInfoByName,
    productCategoryData,
  };
};
