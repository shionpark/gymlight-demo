import { IModalDataProps, openCustomModal } from '@/utils';
import { IProductFormProps } from '@/features/product/components/ProductForm/ProductForm';

interface UseProductModalParams<T> {
  openModal: (data: IModalDataProps<T>) => void;
  closeModal: () => void;
  data?: IModalDataProps<T>;
}

export const useProductModal = ({
  openModal,
  closeModal,
  data,
}: UseProductModalParams<IProductFormProps>) => {
  const openProductModal = () => {
    const title = '상품 등록';
    openCustomModal({
      openModal,
      modalType: 'product-modal',
      size: 'sm',
      title,
    });
  };

  const openProductFormModal = (props?: IProductFormProps) => {
    const title = props?.isEdit ? '상품 수정' : '상품 등록';
    openCustomModal({
      openModal,
      modalType: 'product-create',
      size: 'md',
      title,
      customProps: props,
    });
  };

  return {
    openProductModal,
    openProductFormModal,

    closeModal,
    data,
  };
};
