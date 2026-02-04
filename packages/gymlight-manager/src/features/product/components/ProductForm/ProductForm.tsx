import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { Checkbox, Input, LabeledContainer, Select, SquareButton } from 'gymlight-design-system';

import { activeBranchState } from '@/states';
import type { DurationUnitType, ProductCategoryCodeType, ProductStatusType } from '@/types';

import {
  IProductTableProps,
  usePackageProduct,
  useProductFormState,
  useProductFormValidation,
} from '@/features/product';

import * as Styled from './ProductForm.styles';
import { getCategoryInfoById } from '@/utils';
import { DURATION_UNIT_OPTIONS } from '@/constants';

export interface IProductFormProps {
  name?: string;
  status?: ProductStatusType;
  isEdit?: boolean;
  display?: boolean;
  durationUnit?: DurationUnitType;
  sessions?: number;
  productId?: number;
  categoryId?: number;
  categoryCode?: ProductCategoryCodeType;
  sellingPrice?: number;
  originalPrice?: number;
  formattedDuration?: {
    formattedValue: number;
    overMonth: boolean;
  };
}

interface ProductFormProps extends IProductTableProps, IProductFormProps {
  openProductModal: () => void;
  closeModal: () => void;
}

const ProductForm = ({
  isEdit,
  productId,
  productData,
  categorySelectProps: { productCategoryData, categoryOptions },
  openProductModal,
  closeModal,
  ...initValues
}: ProductFormProps) => {
  const activeBranch = useRecoilValue(activeBranchState);

  const {
    productFormState: { status, durationUnit, display, categoryId },

    statusOptions,
    displayOptions,

    handleStatusSelect,
    handleDurationUnitSelect,
    handleCategorySelect,

    getSelectDisplayHandler,
    checkIsDisplay,
  } = useProductFormState({
    status: initValues.status,
    durationUnit: initValues.durationUnit || '개월',
    // ? 'month'
    // : initValues.formattedDuration?.overMonth
    //   ? 'month'
    //   : 'day',
    display: initValues.display,
    categoryId: initValues.categoryId,
  });

  const { register, handleSubmitCreateProduct, handleSubmitUpdateProduct } =
    useProductFormValidation({ closeModal });

  const categoryInfo = getCategoryInfoById({ productCategoryData, categoryId });
  const categoryCode = categoryInfo?.code;

  const isPTProduct = categoryCode === 'PT';
  const isPackageProduct = categoryCode === 'PACKAGE';
  const isOtherProduct = !isPTProduct && !isPackageProduct;

  const {
    checkedProductOptions,
    toggleOneProductOption,
    isProductChecked,
    handleSelectChange,
    selectedProductIds,
  } = usePackageProduct({ categoryOptions });

  return (
    <Styled.StyledForm
      onSubmit={
        isEdit
          ? handleSubmitUpdateProduct({ status, durationUnit, display, categoryId }, productId!)
          : handleSubmitCreateProduct(
              { status, durationUnit, display, categoryId },
              selectedProductIds,
              activeBranch?.branchId,
            )
      }
    >
      {isEdit && (
        <>
          <LabeledContainer labelText="상태" vertical>
            <Select name="status" onChange={handleStatusSelect} value={status}>
              {statusOptions?.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </LabeledContainer>
          <Styled.TabWrapper>
            {displayOptions.map((option, index) => (
              <Styled.TabItem
                key={index}
                onClick={getSelectDisplayHandler(option)}
                isActive={checkIsDisplay(option)}
              >
                {option}
              </Styled.TabItem>
            ))}
          </Styled.TabWrapper>
        </>
      )}
      <LabeledContainer labelText="종류" vertical>
        <Select
          onChange={handleCategorySelect}
          value={categoryId}
          defaultValue={isEdit ? categoryId : ''}
          disabled={isEdit}
        >
          {productCategoryData?.map(({ productCategoryId, name }) => (
            <option key={productCategoryId} value={productCategoryId}>
              {name}
            </option>
          ))}
        </Select>
      </LabeledContainer>
      <LabeledContainer labelText="상품명" vertical>
        <Input
          type="text"
          {...register({
            name: 'name',
            defaultValue: initValues.name,
            placeholder: '상품명을 입력해주세요.',
          })}
        />
      </LabeledContainer>
      <LabeledContainer
        labelText="기간"
        vertical
        style={{ display: (isPackageProduct && !isEdit) || isPTProduct ? 'none' : 'block' }}
      >
        <Styled.InputWrapper>
          <Input
            type="number"
            min={0}
            {...register({
              name: 'duration',
              defaultValue: initValues.formattedDuration?.formattedValue || 0,
              placeholder: '기간을 입력해주세요.',
            })}
          />
          <Select name="durationUnit" value={durationUnit} onChange={handleDurationUnitSelect}>
            {DURATION_UNIT_OPTIONS.map((unit, index) => (
              <option value={unit} key={`${unit}-${index}`}>
                {unit}
              </option>
            ))}
          </Select>
        </Styled.InputWrapper>
      </LabeledContainer>
      <LabeledContainer
        labelText="횟수"
        vertical
        style={{ display: (isPackageProduct && !isEdit) || isOtherProduct ? 'none' : 'block' }}
      >
        <Styled.InputWrapper>
          <Input
            type="number"
            min={0}
            {...register({
              name: 'sessions',
              defaultValue: initValues.sessions || 0,
              placeholder: '횟수를 입력해주세요.',
            })}
            readOnly={isOtherProduct}
          />
          <span>회</span>
        </Styled.InputWrapper>
      </LabeledContainer>
      <LabeledContainer labelText="정가" vertical>
        <Styled.PriceWrapper>
          <Input
            type="number"
            border="bottom"
            min={0}
            {...register({
              name: 'originalPrice',
              defaultValue: initValues.originalPrice,
              placeholder: '0',
            })}
          />
          <span>원</span>
        </Styled.PriceWrapper>
      </LabeledContainer>
      <LabeledContainer labelText="판매가" vertical>
        <Styled.PriceWrapper>
          <Input
            type="number"
            border="bottom"
            min={0}
            {...register({
              name: 'sellingPrice',
              defaultValue: initValues.sellingPrice,
              placeholder: '0',
            })}
          />
          <span>원</span>
        </Styled.PriceWrapper>
      </LabeledContainer>
      <LabeledContainer
        labelText="상품 선택"
        vertical
        style={{ display: isPackageProduct && !isEdit ? 'block' : 'none' }}
      >
        {categoryOptions?.map(({ productCategoryId, name }, index) => (
          <Styled.ProductOptionSelectSection key={productCategoryId}>
            <div className="checkbox-wrapper">
              <Checkbox
                id={`${productCategoryId}-${name}`}
                checked={checkedProductOptions[index]}
                onClick={() => toggleOneProductOption(index)}
              />
              <span>{name}</span>
            </div>
            <Select
              disabled={!isProductChecked(index)}
              onChange={(e) => handleSelectChange(index, +e.target.value)}
            >
              <option value="" selected hidden>
                선택하세요
              </option>
              {productData?.list
                .filter((product) => product.categoryId === productCategoryId)
                .map((data) => (
                  <option key={data.productId} value={data.productId}>
                    {data.name}
                  </option>
                ))}
            </Select>
          </Styled.ProductOptionSelectSection>
        ))}
      </LabeledContainer>
      <SquareButton wide variant="primary" disabled={isPackageProduct && isEdit}>
        {isPackageProduct && isEdit ? '수정이 불가한 상품입니다.' : isEdit ? '수정' : '등록'}
      </SquareButton>
    </Styled.StyledForm>
  );
};

export default memo(ProductForm);
