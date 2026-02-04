import { DualSideBar, IconButton, SquareButton } from 'gymlight-design-system';

import { IProductResponse } from '@/types';
import { formatDurationUnit, formatPrice } from '@/utils';

import * as Styled from './ProductPaymentList.styles';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface IProductPaymentListProps {
  selectedProducts: IProductResponse[];
  resetProductSelection: () => void;
  removeSelectedProduct: (dataId: number) => void;
}

const ProductPaymentList = ({
  selectedProducts,
  resetProductSelection,
  removeSelectedProduct,
}: IProductPaymentListProps) => {
  const calculateTotalSellingPrice = (): number => {
    return selectedProducts.reduce((total, product) => total + product.sellingPrice, 0);
  };

  const totalPayments = formatPrice(calculateTotalSellingPrice());

  return (
    <Styled.SectionWrapper>
      <Styled.Title>결제할 상품</Styled.Title>
      <DualSideBar
        leftSideChildren={[<span>총 {selectedProducts.length}개</span>]}
        rightSideChildren={[
          <SquareButton type="button" size="small" onClick={resetProductSelection}>
            전체 취소
          </SquareButton>,
        ]}
      />
      <Styled.ListWrapper>
        {selectedProducts.map((product) => {
          const { productId, name, sellingPrice, duration, sessions } = product;
          const durationInfo = formatDurationUnit(duration);
          return (
            <Styled.Item key={productId}>
              <IconButton
                size="small"
                variant="icon-only"
                icon={<XMarkIcon />}
                onClick={() => removeSelectedProduct(productId)}
              />
              <Styled.ItemInfoWrapper>
                <div>
                  <Styled.ItemCores>{name}</Styled.ItemCores>
                  <Styled.ItemDetails>
                    {durationInfo.value}
                    {durationInfo.unit} / {+sessions}회
                  </Styled.ItemDetails>
                </div>
                <Styled.ItemCores>{formatPrice(sellingPrice)}원</Styled.ItemCores>
              </Styled.ItemInfoWrapper>
            </Styled.Item>
          );
        })}
      </Styled.ListWrapper>
      <Styled.StyledButton type="button" variant="primary" wide>
        {totalPayments}원 결제하기
      </Styled.StyledButton>
    </Styled.SectionWrapper>
  );
};

export default ProductPaymentList;
