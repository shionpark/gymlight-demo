import { IProductCategoryResponse } from '@/types';

export const getCategoryInfoById = ({
  productCategoryData,
  categoryId,
}: {
  productCategoryData?: IProductCategoryResponse[];
  categoryId: number;
}) => {
  return productCategoryData?.find((product) => product.productCategoryId === categoryId) || null;
};
