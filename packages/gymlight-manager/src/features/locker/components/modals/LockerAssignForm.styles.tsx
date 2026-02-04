import { styles } from 'gymlight-design-system';
import styled from '@emotion/styled';
import { flexColumnStyle, flexStyle } from '@/styles';

export const Wrapper = styled.div`
  ${flexColumnStyle};

  padding: ${styles.space.level5}rem;
  background: ${({ theme }) => theme.background.light};
  border: 1px solid ${({ theme }) => theme.border.default};

  .form-header {
    ${flexStyle};
    gap: ${styles.space.level2}rem;
  }

  .locker-number {
    display: inline-block;
    padding: ${styles.space.level3}rem 0;
    font-size: ${styles.fontSize.large}rem;
    font-weight: ${styles.fontWeight.bold};
  }

  form {
    ${flexColumnStyle};
    gap: ${styles.space.level1}rem;
    margin-top: ${styles.space.level3}rem;
  }
`;

export const AssignForm = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.light};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  & > button {
    white-space: nowrap;
  }
`;

export const InputWrapper = styled.div<{ buttonSizeSmall?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  height: 4rem;

  svg {
    width: 1.8rem;
    min-width: 1.8rem;
    margin-right: 0.4rem;
  }

  button {
    ${({ buttonSizeSmall }) => buttonSizeSmall && `width: 6rem`}
  }
`;

export const ButtonsWrapper = styled.div`
  ${flexColumnStyle}
  gap:${styles.space.level2}rem;
`;
