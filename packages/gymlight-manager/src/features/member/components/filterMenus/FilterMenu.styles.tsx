import { styles } from 'gymlight-design-system';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 35rem;
  width: 57rem;
  display: flex;
  flex-direction: column;
  padding: ${styles.space.level2}rem ${styles.space.level4}rem;

  background: ${({ theme }) => theme.background.light};
  border-radius: 0.4rem;

  h5 {
    font-size: ${styles.fontSize.large}rem;
    font-weight: ${styles.fontWeight.bold};
    margin-bottom: ${styles.space.level7}rem;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${styles.space.level4}rem;
  overflow: auto;
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4.8rem;
`;
