import { flexStyle, styles } from '@/styles';
import styled from '@emotion/styled';

export const TypeCheckSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level4}rem;

  & > div {
    display: flex;
    align-items: center;
  }

  span {
    margin-right: ${styles.space.level1}rem;
    font-size: ${styles.fontSize.small}rem;
  }
`;

export const DateSection = styled.div`
  ${flexStyle};
  width: 100%;
  justify-content: space-between;

  input {
    margin-left: 0.8rem;
    width: 22rem;
  }
`;
