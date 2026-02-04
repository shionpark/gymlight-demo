import { ManagementSection } from 'gymlight-design-system';

import { EnrollButton, Modal } from '@/components';
import { IModalDataProps } from '@/utils';
import { useModal } from '@/hooks';

import { ProductForm, ProductTable, useProductModal, useProductTable } from '@/features/product';
import type { IProductFormProps } from '@/features/product/components/ProductForm/ProductForm';

import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const ProductPage = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps<IProductFormProps>>();

  const { openProductModal, openProductFormModal } = useProductModal({
    openModal,
    closeModal,
    data,
  });

  const productTableProps = useProductTable();

  return (
    <>
      <ManagementSection
        buttons={
          <EnrollButton
            label="상품 등록"
            Icon={ShoppingBagIcon}
            size="small"
            onClick={() => openProductFormModal()}
          />
        }
      >
        <ProductTable {...productTableProps} openProductFormModal={openProductFormModal} />
      </ManagementSection>
      <Modal title={data?.title} onClose={closeModal} type={data?.type} size={data?.size}>
        {() => (
          <>
            {data?.type === 'product-create' && (
              <ProductForm
                {...productTableProps}
                {...data?.customProps}
                openProductModal={openProductModal}
                closeModal={closeModal}
              />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default ProductPage;
