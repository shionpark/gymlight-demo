import styled from '@emotion/styled';

import { styles } from '@/styles';

export const StyledSelect = styled.select<{ wide: boolean }>`
  -webkit-appearance: none;
  appearance: none;

  background: url(/images/selector.png) no-repeat ${({ theme }) => theme.color.white};
  background-size: 8rem 4rem;
  background-position: right 0.3rem center;

  width: ${({ wide }) => (wide ? '100%' : 'auto')};

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
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.button.activeReverse};
    color: ${({ theme }) => theme.font.dark};

    &::placeholder {
      color: ${({ theme }) => theme.color.lightGray};
    }
  }
`;
