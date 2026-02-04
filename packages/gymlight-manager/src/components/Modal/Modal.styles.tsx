import styled from '@emotion/styled';

import { styles, Theme } from '@/styles';
import { setModalSize, setModalStyle, setOverlayStyle } from '@/styles/modal';
import { ModalType } from '@/types';
import { css } from '@emotion/react';

interface IOverlayStyleProps {
  isOpen: boolean;
}

export const Overlay = styled.div<IOverlayStyleProps>`
  background: rgba(0, 0, 0, 0.7);

  ${({ isOpen }) => setOverlayStyle(isOpen)};

  z-index: 900;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition:
    visibility 0.2s linear,
    opacity 0.2s linear;

  & > * {
    ${({ isOpen }) => setOverlayStyle(isOpen)};
    transition: transform 0.3s ease;
  }
`;

export type ModalSizeTypes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ModalSizeConfig = {
  [key in ModalSizeTypes]: {
    width: number;
    height: number;
  };
};

export const modalSize: ModalSizeConfig = {
  sm: {
    width: 40,
    height: 54,
  },
  md: {
    width: 60,
    height: 70,
  },
  lg: {
    width: 80,
    height: 80,
  },
  xl: {
    width: 100,
    height: 80,
  },
  '2xl': {
    width: 130,
    height: 80,
  },
};

interface IModalSectionProps {
  size: ModalSizeTypes;
  theme?: Theme;
}

export const Section = styled.div<IModalSectionProps>`
  ${({ size }) => setModalSize(size)}

  position: relative;
  background-color: ${({ theme }) => theme.background.light};
  border-radius: ${styles.borderRadius.normal}rem;

  .iconButton {
    position: absolute;
    top: ${styles.space.level7}rem;
    right: ${styles.space.level7}rem;
  }

  display: flex;
  flex-direction: column;
  padding: ${styles.space.level6}rem;
  gap: ${styles.space.level1}rem;
`;

//존재하면 false
export const Title = styled.div<{ noSubTitle: boolean }>`
  display: flex;
  flex-direction: ${({ noSubTitle }) => (noSubTitle ? 'row' : 'column')};
  align-items: ${({ noSubTitle }) => (noSubTitle ? 'center' : 'start')};
  padding: ${styles.space.level3}rem;

  font-size: ${styles.fontSize.h5}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const SubTitle = styled.span`
  font-size: 1.28rem;
  color: ${({ theme }) => theme.font.light};
  font-weight: normal;
`;

export const Content = styled.div<{ type: ModalType }>`
  overflow: auto;
  padding: 0 ${styles.space.level4}rem;
  ${({ theme, type }) => setModalStyle(theme, type)};
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 2rem;
  padding: ${styles.space.level1}rem;
`;
