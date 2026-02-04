import { useState } from 'react';

import { Select } from 'gymlight-design-system';

import { URLS } from '@/constants';
import type { IBranchNameResponse } from '@/types';

import { ProductGridContainer, useProductCategories, useProductList } from '@/features/product';
import { DashboardContainer, DashboardContainerHeader } from '../../DashboardContainer';

import * as Styled from './ProductDashboard.styles';
import { useProductCountSelect } from '@/features/dashboard/hooks';

const ProductDashboard = ({ activeBranch }: { activeBranch: IBranchNameResponse | null }) => {
  const sortParam = '생성일(최신순)';
  const { data: productData } = useProductList({
    sort: sortParam,
    branchName: activeBranch?.name || '',
  });

  const { data: productCategoryData } = useProductCategories();

  const { dataCounts, handleOptionChange } = useProductCountSelect(productData);

  return (
    <DashboardContainer
      title={
        <Styled.HeaderWrapper>
          <span>
            등록된 상품
            <DashboardContainerHeader>
              {sortParam} | 총 {dataCounts}/{productData?.totalElements}개
            </DashboardContainerHeader>
          </span>
          <Select wide={false} onChange={handleOptionChange}>
            {[5, 10, 15, '전체'].map((option) => (
              <option key={option} value={option}>
                {option !== '전체' ? `${option}개` : option} 조회
              </option>
            ))}
          </Select>
        </Styled.HeaderWrapper>
      }
      url={URLS.CLIENT.PRODUCT}
    >
      <Styled.ScrollWrapper>
        <ProductGridContainer
          productData={productData?.list}
          productCategoryData={productCategoryData}
          columns={productData?.list.length}
          preview={dataCounts}
        />
      </Styled.ScrollWrapper>
    </DashboardContainer>
  );
};

export default ProductDashboard;
