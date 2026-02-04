import { useState } from 'react';
import type { ForwardRefExoticComponent, SVGProps } from 'react';

import type { ProductSortType } from '@/types';

import {
  BarsArrowUpIcon as AscIcon,
  BarsArrowDownIcon as DescIcon,
  ChevronUpDownIcon as DefaultIcon,
} from '@heroicons/react/24/outline';

interface ISortToggleButtonProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  buttonName: string;
}

/**
 * 상품 테이블에서 선택한 컬럼의 데이터를 정렬하기 위한 커스텀 훅
 */

export const useProductSort = (initialSortOption: ProductSortType = '생성일(최신순)') => {
  const PRODUCT_SORT_OPTIONS: ProductSortType[] = [
    '상품 이름(가나다순)',
    '상품 이름 역순(가나다순)',
    '정가(높은순)',
    '정가(낮은순)',
    '판매가(높은순)',
    '판매가(낮은순)',
    '이용 기간(높은순)',
    '이용 기간(낮은순)',
    '이용 횟수(높은순)',
    '이용 횟수(낮은순)',
    '생성일(오래된순)',
    '생성일(최신순)',
    '수정일(오래된순)',
    '수정일(최신순)',
  ];

  const [sortParam, setSortParam] = useState<ProductSortType>(initialSortOption);

  const getNumericIcon = (
    ascCondition: boolean,
  ): ForwardRefExoticComponent<SVGProps<SVGSVGElement>> => (ascCondition ? AscIcon : DescIcon);

  const ProductNameIcon = getNumericIcon(sortParam === ('상품 이름(가나다순)' as ProductSortType));
  const OriginalPriceIcon = getNumericIcon(sortParam === ('정가(높은순)' as ProductSortType));
  const SellingPriceIcon = getNumericIcon(sortParam === ('판매가(높은순)' as ProductSortType));
  const DurationIcon = getNumericIcon(sortParam === ('이용 기간(높은순)' as ProductSortType));
  const CountIcon = getNumericIcon(sortParam === ('이용 횟수(높은순)' as ProductSortType));
  const CreatedAtIcon = getNumericIcon(sortParam === ('생성일(최신순)' as ProductSortType));
  const UpdatedAtIcon = getNumericIcon(sortParam === ('수정일(최신순)' as ProductSortType));

  const toggleSortParam = (ascOption: ProductSortType, descOption: ProductSortType) => () => {
    setSortParam((prev) => (prev === ascOption ? descOption : ascOption));
  };

  const productNameButtonProps: ISortToggleButtonProps = {
    buttonName: '상품명',
    icon: ProductNameIcon,
    onClick: toggleSortParam('상품 이름(가나다순)', '상품 이름 역순(가나다순)'),
  };

  const originalPriceButtonProps: ISortToggleButtonProps = {
    buttonName: '정가',
    icon: OriginalPriceIcon,
    onClick: toggleSortParam('정가(높은순)', '정가(낮은순)'),
  };

  const sellingPriceButtonProps: ISortToggleButtonProps = {
    buttonName: '판매가',
    icon: SellingPriceIcon,
    onClick: toggleSortParam('판매가(높은순)', '판매가(낮은순)'),
  };

  const durationButtonProps: ISortToggleButtonProps = {
    buttonName: '기간',
    icon: DurationIcon,
    onClick: toggleSortParam('이용 기간(높은순)', '이용 기간(낮은순)'),
  };

  const countButtonProps: ISortToggleButtonProps = {
    buttonName: '횟수',
    icon: CountIcon,
    onClick: toggleSortParam('이용 횟수(높은순)', '이용 횟수(낮은순)'),
  };

  const createdAtButtonProps: ISortToggleButtonProps = {
    buttonName: '생성일',
    icon: CreatedAtIcon,
    onClick: toggleSortParam('생성일(최신순)', '생성일(오래된순)'),
  };

  const updatedAtButtonProps: ISortToggleButtonProps = {
    buttonName: '수정일',
    icon: UpdatedAtIcon,
    onClick: toggleSortParam('수정일(최신순)', '수정일(오래된순)'),
  };

  return {
    sortParam,
    setSortParam,
    PRODUCT_SORT_OPTIONS,
    productNameButtonProps,
    originalPriceButtonProps,
    sellingPriceButtonProps,
    durationButtonProps,
    countButtonProps,
    createdAtButtonProps,
    updatedAtButtonProps,
  };
};
