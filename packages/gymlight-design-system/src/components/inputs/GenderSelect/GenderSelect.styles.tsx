import styled from '@emotion/styled';

import { styles } from '@/styles';

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  appearance: none;

  background: url(/images/selector.png) no-repeat ${({ theme }) => theme.color.white};
  background-size: 8rem 4rem;
  background-position: right 0.3rem center;

  width: 100%;
  height: 4rem;

  padding: 0.6rem 1.2rem;

  outline: none;

  font-size: ${styles.fontSize.small}rem;

  border: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};

  &::placeholder {
    color: ${({ theme }) => theme.font.light};
  }

  &:focus {
    outline: ${styles.border.level1}rem solid ${({ theme }) => theme.border.dark};
  }
`;
