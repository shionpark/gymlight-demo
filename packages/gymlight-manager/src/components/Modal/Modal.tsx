import { ReactNode } from 'react';

import { useRecoilValue } from 'recoil';
import { modalState } from '@/states';

import { CloseButton } from '@/components';
import { stopPropagation } from '@/utils';

import type { ModalType } from '@/types';

import * as Styled from './Modal.styles';
interface ChildComponentProps<T> {
  data: T;
}

interface IModalProps<T> {
  title: string | ReactNode;
  children: (props: ChildComponentProps<T>) => ReactNode;
  onClose: () => void;
  subTitle?: string;
  size?: Styled.ModalSizeTypes;
  type?: ModalType;
}

const Modal = <T extends {}>({
  title,
  children,
  onClose,
  subTitle,
  size = 'md',
  type = 'default',
}: IModalProps<T>) => {
  const { isOpen, data } = useRecoilValue(modalState);

  const content = children({ data });

  return (
    <Styled.Overlay isOpen={isOpen} onMouseDown={onClose}>
      <Styled.Section size={size} onMouseDown={stopPropagation}>
        <Styled.Title noSubTitle={!subTitle?.length}>
          {title}
          {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
        </Styled.Title>
        <Styled.Content type={type} className="modal-content">
          {content}
        </Styled.Content>
        <CloseButton onClick={onClose} />
      </Styled.Section>
    </Styled.Overlay>
  );
};

export default Modal;
