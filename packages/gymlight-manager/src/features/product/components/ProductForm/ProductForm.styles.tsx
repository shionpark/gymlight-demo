import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';
import { flexColumnStyle, flexStyle } from '@/styles/setCommonStyle';

export const StyledForm = styled.form`
  ${flexColumnStyle};
  gap: ${styles.space.level4}rem;

  & > button {
    margin-top: ${styles.space.level2}rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
  margin-top: ${styles.space.level1}rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;

  & > span {
    font-size: ${styles.fontSize.small}rem;
  }

  & > select {
    width: 10rem;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level2}rem;
  font-size: ${styles.fontSize.small}rem;

  input {
    text-align: right;
  }
`;

export const TabWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
`;

export const TabItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  text-align: center;
  font-size: ${styles.fontSize.small}rem;
  color: ${({ isActive, theme }) => (isActive ? theme.color.white : theme.font.default)};

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary : theme.background.default};
  border: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme.color.primary}` : `1px solid ${theme.border.default}`};
  cursor: pointer;

  ${styles.transition.button}
`;

export const ProductOptionSelectSection = styled.div`
  ${flexStyle};

  .checkbox-wrapper {
    ${flexStyle};
    gap: ${styles.space.level1}rem;

    span {
      width: 10rem;
      font-size: ${styles.fontSize.small}rem;
    }
  }
`;
