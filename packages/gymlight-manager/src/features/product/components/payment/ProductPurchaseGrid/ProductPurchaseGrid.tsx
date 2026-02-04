import { DualSideBar, SquareButton } from 'gymlight-design-system';

import { IProductCategoryResponse, IProductResponse, ProductCategoryType } from '@/types';
import { formatDurationUnit, formatPrice, getCategoryInfoById } from '@/utils';

import { ProductPaymentList } from '../ProductPaymentList';

import * as Styled from './ProductPurchaseGrid.styles';
import { ProductStatusFlag } from '../../ProductStatusFlag';
import { AuthLoading } from '@/features/auth';

interface IProductPurchaseGridProps {
  productData: IProductResponse[];
  dropdownMenuRef?: React.RefObject<HTMLDivElement>;
  checkDropdownMenuOpen?: (itemIndex: number) => boolean;
  toggleDropdownMenu?: (itemIndex: number) => void;
  handleProductDelete?: () => void;
  handleProductClick: (event: React.MouseEvent<HTMLDivElement>, dataId: number) => void;
  resetSelection: () => void;
  checkboxStates: boolean[];
  removeSelectedItem: (dataId: number) => void;
  selectedItems: IProductResponse[];
  getTabButtonVariant: (tab: any) => any;
  productCategoryTabs: string[];
  getSelectTabHandler: (tab: any) => any;
  productCategories: IProductCategoryResponse[];
  getProductCategoryNameByCategoryId: (categoryId: number) => Styled.CategoryStatusType;
}

const ProductPurchaseGrid = ({
  productData,
  checkboxStates,
  handleProductClick,
  selectedItems,
  resetSelection,
  removeSelectedItem,
  getTabButtonVariant,
  productCategoryTabs,
  getSelectTabHandler,
  productCategories,
}: IProductPurchaseGridProps) => {
  if (!productCategories) {
    return <AuthLoading />;
  }
  return (
    <Styled.ProductGridForRegisterMemberWrapper>
      <Styled.ButtonsWrapper>
        {productCategoryTabs.map((tab, index) => (
          <SquareButton
            key={`${tab}-${index}`}
            size="small"
            variant={getTabButtonVariant(tab)}
            onClick={getSelectTabHandler(tab)}
          >
            {tab}
          </SquareButton>
        ))}
      </Styled.ButtonsWrapper>
      <Styled.GridAndListContainer>
        <Styled.GridContainer>
          {productData?.map((product: IProductResponse) => {
            const {
              productId,
              categoryId,
              name,
              duration,
              sessions,
              originalPrice,
              sellingPrice,
              status,
            } = product;

            const categoryName = getCategoryInfoById({
              productCategoryData: productCategories,
              categoryId,
            })?.name;
            return (
              <Styled.GridItem
                key={productId}
                checked={checkboxStates[productId]}
                onClick={(event) => handleProductClick(event, productId)}
              >
                <Styled.AbsoluteWrapper>
                  <Styled.Category categoryOrStatus={categoryName as ProductCategoryType}>
                    {categoryName}
                  </Styled.Category>
                  <ProductStatusFlag status={status} />
                </Styled.AbsoluteWrapper>

                <Styled.ProductName>{name}</Styled.ProductName>
                <Styled.ProductCard>
                  <DualSideBar
                    leftSideChildren={[<span>기간</span>]}
                    rightSideChildren={[
                      <span>{formatDurationUnit(duration).value}</span>,
                      <span>{formatDurationUnit(duration).unit}</span>,
                    ]}
                  />
                  <DualSideBar
                    leftSideChildren={[<span>횟수</span>]}
                    rightSideChildren={[<span>{+sessions}회</span>]}
                  />
                  <Styled.Line />
                  <DualSideBar
                    leftSideChildren={[<span>정가</span>]}
                    rightSideChildren={[
                      <Styled.OriginalPrice>{formatPrice(+originalPrice)}원</Styled.OriginalPrice>,
                    ]}
                  />
                  <DualSideBar
                    leftSideChildren={[<span>판매가</span>]}
                    rightSideChildren={[<span>{formatPrice(+sellingPrice)}원</span>]}
                  />
                </Styled.ProductCard>
              </Styled.GridItem>
            );
          })}
        </Styled.GridContainer>

        <Styled.ListContainer>
          <ProductPaymentList
            selectedProducts={selectedItems}
            resetProductSelection={resetSelection}
            removeSelectedProduct={removeSelectedItem}
          />
        </Styled.ListContainer>
      </Styled.GridAndListContainer>
    </Styled.ProductGridForRegisterMemberWrapper>
  );
};

export default ProductPurchaseGrid;
