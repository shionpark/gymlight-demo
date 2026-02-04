import { useCallback, useEffect, useState } from 'react';

import { useToggleTabMenu } from '@/hooks';
import type { DurationUnitType, ProductStatusType } from '@/types';

export interface IProductFormState {
  status: ProductStatusType;
  durationUnit: DurationUnitType;
  display: boolean;
  categoryId: number;
}

const DEFAULT_PRODUCT_FORM_STATE: IProductFormState = {
  status: '판매중' as ProductStatusType,
  durationUnit: '개월',
  display: false,
  categoryId: 1,
};

export const useProductFormState = ({
  status,
  durationUnit,
  display,
  categoryId,
}: {
  status?: ProductStatusType;
  durationUnit?: DurationUnitType;
  display?: boolean;
  categoryId?: number;
}) => {
  const [productFormState, setProductFormState] = useState<IProductFormState>({
    status: status || DEFAULT_PRODUCT_FORM_STATE.status,
    durationUnit: durationUnit || '개월',
    display: display || DEFAULT_PRODUCT_FORM_STATE.display,
    categoryId: categoryId || DEFAULT_PRODUCT_FORM_STATE.categoryId,
  });

  const statusOptions = ['판매중', '이벤트', '판매중지', '삭제'] as ProductStatusType[];
  const displayOptions = ['진열', '진열하지 않음'];

  const {
    getSelectTabHandler: getSelectDisplayHandler,
    checkIsActiveTab: checkIsDisplay,
    activeTab: setDisplayTab,
    setActiveTab: setActiveDisplayTab,
  } = useToggleTabMenu(displayOptions);

  const handleStatusSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value: status },
    } = e;
    setProductFormState((prev) => ({
      ...prev,
      status: status as ProductStatusType,
    }));
  }, []);

  const handleDurationUnitSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value: durationUnit },
    } = e;
    setProductFormState((prev) => ({
      ...prev,
      durationUnit: durationUnit as DurationUnitType,
    }));
  }, []);

  const handleCategorySelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value: categoryId },
    } = e;
    setProductFormState((prev) => ({
      ...prev,
      categoryId: +categoryId,
    }));
  }, []);

  useEffect(() => {
    setProductFormState((prev) => ({
      ...prev,
      display: setDisplayTab === '진열',
    }));
  }, [setDisplayTab]);

  useEffect(() => {
    !display && setActiveDisplayTab('진열하지 않음');
  }, []);

  return {
    productFormState,

    statusOptions,
    displayOptions,

    handleStatusSelect,
    handleDurationUnitSelect,
    handleCategorySelect,

    getSelectDisplayHandler,
    checkIsDisplay,
  };
};

export interface IUseProductFormStateProps extends ReturnType<typeof useProductFormState> {}
