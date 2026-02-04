import { styles } from '@/styles';
import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  display: block;

  border: none;
  background: inherit;
  cursor: pointer;

  font-weight: ${styles.fontWeight.bold};
  font-size: ${styles.fontSize.normal}rem;

  &:hover {
    background-color: ${({ theme }) => theme.background.light};
    box-shadow: inset 0 0 0 0.1rem ${({ theme }) => theme.border.dark};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const SmallText = styled.span`
  font-size: ${styles.fontSize.xsmall}rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-left: ${styles.space.level1};
    width: 2rem;
    height: 2rem;
  }
`;
