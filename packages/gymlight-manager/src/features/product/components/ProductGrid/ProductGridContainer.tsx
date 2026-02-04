import { GridContainer } from 'gymlight-design-system';

import { getCategoryInfoById } from '@/utils';
import type { IProductCategoryResponse, IProductResponse, ProductCategoryType } from '@/types';

import ProductGridItem from './ProductGridItem';

interface IProductGridContainerProps {
  productData?: IProductResponse[];
  productCategoryData?: IProductCategoryResponse[];
  columns?: number;
  preview?: number;
}

const ProductGridContainer = ({
  productData,
  productCategoryData,
  columns,
  preview,
}: IProductGridContainerProps) => {
  const formattedProductData = preview ? productData?.slice(0, preview) : productData;

  return (
    <GridContainer columns={columns || 5}>
      {formattedProductData?.map((product) => {
        const productStatus = getCategoryInfoById({
          productCategoryData,
          categoryId: product.categoryId,
        })?.name as ProductCategoryType;

        return [
          <ProductGridItem
            name={product.name}
            status={product.status}
            category={productStatus}
            duration={product.duration}
            sessions={product.sessions}
            productId={product.productId}
            sellingPrice={product.sellingPrice}
            originalPrice={product.originalPrice}
          />,
        ];
      })}
    </GridContainer>
  );
};

export default ProductGridContainer;
