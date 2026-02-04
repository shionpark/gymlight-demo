import { useState } from 'react';
import type { IProductListResponse } from '@/types';

export const useProductCountSelect = (productData?: IProductListResponse) => {
  const [dataCounts, setDataCounts] = useState(5);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;
    if (value === '전체') {
      setDataCounts(productData?.totalElements || 0);
      return;
    }
    setDataCounts(+value);
  };

  return {
    dataCounts: productData?.totalElements ? dataCounts : 0,
    handleOptionChange,
  };
};
