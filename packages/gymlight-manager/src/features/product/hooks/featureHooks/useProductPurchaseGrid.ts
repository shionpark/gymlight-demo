import { useCallback, useEffect, useMemo } from 'react';

import { useRecoilValue } from 'recoil';
import { activeBranchState } from '@/states';

import type { IProductResponse } from '@/types';

import { PRODUCT_CATEGORY_CODES } from '@/constants';

import { useCheckboxSelection, useToggleTabMenu } from '@/hooks';

import { useMe } from '@/features/auth';
import { useBranchNameList } from '@/features/branch';

import { useProductCategories, useProductList } from '@/features/product';
import { getCategoryInfoById } from '@/utils';

interface IUseProductPurchaseGridParams {
  isOptional?: boolean;
}
export const useProductPurchaseGrid = (props?: IUseProductPurchaseGridParams) => {
  // 카테고리별 버튼 생성
  const { data: productCategories } = useProductCategories();

  const productCategoryTabs = productCategories
    ? props?.isOptional
      ? ['전체', ...productCategories!.map(({ name }) => name)].filter(
          (tabName) => tabName !== '패키지' && tabName !== '회원권' && tabName !== 'PT',
        )
      : ['전체', ...productCategories!.map(({ name }) => name)]
    : ([] as const);

  const productCategoryMap: { [key: string]: { code: string; productCategoryId: number } } =
    productCategories
      ? Object.fromEntries(
          productCategories.map(({ name, productCategoryId, code }) => [
            name,
            { productCategoryId, code },
          ]),
        )
      : {};

  const { activeTab, getSelectTabHandler, checkIsActiveTab, setActiveTab } =
    useToggleTabMenu(productCategoryTabs);

  const getTabButtonVariant = (
    tabName: (typeof productCategoryTabs)[number],
  ): 'normal' | 'reverse' | 'outline' | 'primary' | 'primary-outline' | 'error-outline' => {
    return checkIsActiveTab(tabName) ? 'primary' : 'outline';
  };

  // 대상 지점 선택
  const activeBranch = useRecoilValue(activeBranchState);
  const { data: meData } = useMe();

  const isAdmin = meData?.role === '관리자';
  const { data: branchNames } = useBranchNameList();

  const staffBranchName = useMemo(() => {
    if (!meData?.branchId || !branchNames) return undefined;
    return branchNames.find(({ branchId }) => branchId === meData.branchId)?.name;
  }, [meData?.branchId, branchNames]);
  meData?.branchId;

  const categoryCode = useMemo(
    () =>
      activeTab !== '전체' && productCategoryMap[activeTab]
        ? PRODUCT_CATEGORY_CODES[activeTab as keyof typeof PRODUCT_CATEGORY_CODES]
        : undefined,
    [activeTab, productCategoryMap],
  );

  // Data Fetch
  const { data: rawProductData } = useProductList({
    categoryCode,
    sort: '생성일(최신순)',
    branchName: isAdmin ? activeBranch?.name || '' : (staffBranchName as string),
    pageSize: 1000000,
  });

  const productDataList = useMemo(
    () => (rawProductData?.list ? rawProductData.list : []),
    [rawProductData],
  );

  const optionalProductDataList = rawProductData?.list.filter(({ categoryId }) =>
    productCategories && productCategoryMap['PT'] && productCategoryMap['회원권']
      ? categoryId !== productCategoryMap['PT']['productCategoryId'] &&
        categoryId !== +productCategoryMap['회원권']['productCategoryId']
      : false,
  );

  const {
    selectedItems,
    checkboxStates,
    toggleOneCheckbox,
    selectOrDeselectItem,
    resetSelection,
    removeSelectedItem,
  } = useCheckboxSelection<IProductResponse>(productDataList, 'productId');

  const handleProductClick = (event: React.MouseEvent<HTMLDivElement>, dataId: number) => {
    selectOrDeselectItem(dataId);
  };

  useEffect(() => {
    setActiveTab('전체');
  }, []);

  const getCategoryNameByCategoryId = useCallback(
    () => (categoryId: number) =>
      getCategoryInfoById({
        productCategoryData: productCategories,
        categoryId,
      })?.name,
    [productCategories],
  );

  return {
    activeTab,
    getSelectTabHandler,
    getTabButtonVariant,
    handleProductClick,
    productData: productDataList,
    optionalProductData: optionalProductDataList,
    resetSelection,
    removeSelectedItem,
    selectedItems,
    checkboxStates,
    toggleOneCheckbox,
    productCategoryTabs,

    productCategories,
  };
};
