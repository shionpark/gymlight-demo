import { useEffect, useMemo } from 'react';

import { useToggleTabMenu } from '@/hooks';
import type { ProductCategoryType } from '@/types';

import { useProductCategoryData } from './useProductCategoryData';

export const useProductCategorySelect = () => {
  const { categoryOptions, categoryNames, getCategoryInfoByName, productCategoryData } =
    useProductCategoryData();

  const categoryTabs = useMemo(
    () => (categoryNames ? ['전체', ...categoryNames] : []),
    [categoryNames],
  );

  const {
    activeTab: activeCategory,
    setActiveTab: setActiveCategory,
    checkIsActiveTab: checkIsActiveCategory,
    getSelectTabHandler: getSelectActiveHandler,
  } = useToggleTabMenu(categoryTabs);

  const activeCategoryData = getCategoryInfoByName(activeCategory as ProductCategoryType);

  useEffect(() => {
    setActiveCategory(categoryTabs[0]);
  }, [categoryTabs]);

  return {
    productCategoryData,
    categoryOptions,
    categoryTabs,
    activeCategoryData,

    setActiveCategory,
    checkIsActiveCategory,
    getSelectActiveHandler,
  };
};

export interface IProductCategorySelectProps extends ReturnType<typeof useProductCategorySelect> {}
