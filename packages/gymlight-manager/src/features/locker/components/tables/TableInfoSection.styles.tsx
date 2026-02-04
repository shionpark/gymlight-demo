import styled from '@emotion/styled';
import { styles } from '@/styles';

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
  font-size: ${styles.fontSize.small}rem;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${styles.space.level1}rem ${styles.space.level2}rem;

    border-radius: ${styles.borderRadius.normal}rem;
    background: ${({ theme }) => theme.background.light};
    user-select: none;
    color: ${({ theme }) => theme.font.light};
    box-shadow: ${styles.shadow.light};

    & > svg {
      width: 1.4rem;
      margin-right: 0.4rem;
    }
  }
`;
