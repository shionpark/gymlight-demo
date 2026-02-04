import { useForm } from 'gymlight-design-system';

import type {
  DurationUnitType,
  ICreatePackageProductRequest,
  ICreateProductRequest,
  ProductCategoryCodeType,
} from '@/types';
import { formatDurationFromUnit, hasEmptyFields } from '@/utils';

import { useCreatePackageProduct, useCreateProduct, useUpdateProduct } from '../../mutateHooks';
import type { IProductFormState } from './useProductFormState';

interface IProductFormFields extends ICreateProductRequest {
  durationUnit: DurationUnitType;
  productCategoryId: number;
  productCategoryCode: ProductCategoryCodeType;
}

export const useProductFormValidation = ({ closeModal }: { closeModal: () => void }) => {
  const { register, handleSubmit, reset } = useForm<IProductFormFields>();

  const onSuccessAdditional = () => {
    closeModal();
    if (reset) reset();
  };

  const { mutate: createProduct } = useCreateProduct({
    onSuccessAdditional,
  });
  const { mutate: updateProduct } = useUpdateProduct({
    onSuccessAdditional,
  });
  const { mutate: createPackageProduct } = useCreatePackageProduct({
    onSuccessAdditional,
  });

  const onValidCreateProduct = (
    productFormState: IProductFormState,
    selectedProductIds: number[],
    branchId?: number,
  ) => {
    return async (form: ICreateProductRequest) => {
      if (hasEmptyFields(form)) {
        alert('모든 필수 값을 입력해주세요.');
        return;
      }

      const alertMessage = '상품을 등록하시겠습니까?';

      if (!confirm(alertMessage)) {
        return;
      }

      const { durationUnit, categoryId } = productFormState;
      const { name, duration, sessions, sellingPrice, originalPrice } = form;

      const commonPayload: ICreateProductRequest = {
        name,
        branchId,
        duration: duration && durationUnit ? formatDurationFromUnit(+duration, durationUnit) : 0,
        sessions: sessions ? +sessions : 0,
        sellingPrice: +sellingPrice,
        originalPrice: +originalPrice,
        productCategoryId: categoryId,
      };

      const packagePayload: ICreatePackageProductRequest = {
        name,
        branchId,
        sellingPrice: +sellingPrice,
        originalPrice: +originalPrice,
        productCategoryId: categoryId,
        productIds: selectedProductIds,
      };

      categoryId === 1 ? createPackageProduct(packagePayload) : createProduct(commonPayload);
    };
  };

  const onValidUpdateProduct = (productFormState: IProductFormState, productId: number) => {
    return async (form: IProductFormFields) => {
      const alertMessage = '상품을 수정하시겠습니까?';

      if (!confirm(alertMessage)) {
        return;
      }

      const { status, durationUnit, display } = productFormState;
      const { name, originalPrice, sellingPrice, duration, sessions } = form;

      const payload: any = {
        productId,
        name,
        status,
        originalPrice: +originalPrice,
        sellingPrice: +sellingPrice,
        duration: duration && durationUnit ? formatDurationFromUnit(+duration, durationUnit) : 0,
        sessions: sessions ? +sessions : 0,
        display,
      };

      updateProduct(payload);
    };
  };

  const handleSubmitCreateProduct = (
    state: IProductFormState,
    selectedProductIds: number[],
    branchId?: number,
  ) => {
    const onValid = onValidCreateProduct(state, selectedProductIds, branchId);
    return handleSubmit(onValid);
  };

  const handleSubmitUpdateProduct = (state: IProductFormState, productId: number) => {
    const onValid = onValidUpdateProduct(state, productId);
    return handleSubmit(onValid);
  };

  return {
    register,
    handleSubmit,
    reset,

    handleSubmitCreateProduct,
    handleSubmitUpdateProduct,
  };
};

export interface IUseProductFormValidationProps
  extends ReturnType<typeof useProductFormValidation> {}
