import { styles } from '@/styles';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
  margin: ${styles.space.level2}rem 0;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${styles.space.level1}rem;
    border-radius: ${styles.borderRadius.normal}rem;
    background: ${({ theme }) => transparentize(0.3, theme.background.light)};
    font-size: ${styles.fontSize.xsmall}rem;

    & > svg {
      width: ${styles.fontSize.small}rem;
      margin-right: ${styles.space.level1}rem;
    }
  }
`;
