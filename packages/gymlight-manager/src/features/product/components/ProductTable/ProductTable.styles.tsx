import { DropdownForMenu, styles } from 'gymlight-design-system';
import { flexColumnStyle, flexStyle } from '@/styles';
import styled from '@emotion/styled';
import { lighten } from 'polished';

export const TableInfoSection = styled.div`
  display: grid;
  gap: ${styles.space.level1}rem;
  margin-bottom: ${styles.space.level2}rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
  font-size: ${styles.fontSize.small}rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level3}rem;
`;

export const OptionWrapper = styled(DropdownForMenu)`
  display: flex;
  align-items: center;

  text-align: left;
  white-space: nowrap;
  gap: 0.4rem;

  & > svg {
    width: 2rem;
  }
`;

export const FlexColumnContainer = styled.div`
  ${flexColumnStyle};
  position: relative;
`;

export const FlexContainer = styled.div`
  ${flexStyle};
  position: relative;
`;

export const OptionsMenuButton = styled.div`
  ${flexStyle};
  justify-content: center;

  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 5rem;

  white-space: nowrap;
  margin-left: ${styles.space.level1}rem;
  font-size: ${styles.fontSize.xxsmall}rem;
  color: ${({ theme }) => theme.font.reverse};
  border-radius: ${styles.borderRadius.round}rem;
  background: ${({ theme }) => theme.color.primary};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => lighten(0.08, theme.color.primary)};
  }
`;

export const OptionsMenuContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: ${({ isOpen }) => (isOpen ? '0.8rem' : '')};
  opacity: 0.84;
  box-shadow: ${styles.shadow.bottom1};

  ${flexStyle};
  background: white;
  position: absolute;
  top: 1.8rem;
  left: 5.6rem;
  z-index: 4;
  border-radius: 0.8rem;
  white-space: nowrap;
`;

export const DropdownContainer = styled.div`
  align-items: left;
`;
