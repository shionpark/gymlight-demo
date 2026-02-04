import { styles } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level2}rem;

  .children-inputs {
    display: flex;
    flex-direction: column;
    gap: ${styles.space.level1}rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${styles.fontSize.xsmall}rem;
  gap: ${styles.space.level3}rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    gap: ${styles.space.level2}rem;
  }

  .icon {
    width: 1.6rem;
  }
`;
