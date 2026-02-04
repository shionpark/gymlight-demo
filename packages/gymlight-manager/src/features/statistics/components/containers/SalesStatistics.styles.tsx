import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 78rem;

  .scrollable {
    height: 56rem;
    overflow: auto;
  }

  .total-table {
    display: flex;
    justify-content: right;
    padding-left: 50rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
  margin-bottom: ${styles.space.level3}rem;
`;
