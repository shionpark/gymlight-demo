import { useModal } from '@/hooks';

import type { ModalType } from '@/types';
import type { ModalSizeTypes } from '@/components/Modal/Modal.styles';
import { ISalarySettlementFormProps } from '../components/SalarySettlementForm/SalarySettlementForm';

interface IModalDataProps {
  type: ModalType;
  size: ModalSizeTypes;
  salarySettlementFormProps?: ISalarySettlementFormProps;
}

export const useAccountingModals = () => {
  const { openModal, closeModal, data } = useModal<IModalDataProps>();

  const openSalarySettlementModal = (props?: ISalarySettlementFormProps) => {
    openModal({ type: 'salary-settlement', size: 'md', salarySettlementFormProps: props });
  };

  const modalTitleText = '정산';

  return {
    openSalarySettlementModal,
    modalTitleText,
    closeModal,
    data,
  };
};
