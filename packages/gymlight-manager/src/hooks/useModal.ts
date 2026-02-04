import { useRecoilState } from 'recoil';
import { IModalState, modalState as modalAtom } from '@/states';

export const useModal = <T = unknown>() => {
  const [modalState, setModalState] = useRecoilState<IModalState<T>>(modalAtom);

  const openModal = (data?: T) => {
    setModalState({ isOpen: true, data });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false, data: undefined }));
  };

  return { ...modalState, openModal, closeModal };
};
