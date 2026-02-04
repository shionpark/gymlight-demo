import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  text-align: center;
  font-size: ${styles.fontSize.h4}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const SmallLabeledContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .labeled-container {
    max-height: 8rem;
    align-items: flex-start;
  }

  .label {
    height: 3rem;
    font-weight: bold;
  }

  .content {
    height: 100%;
  }
  margin-bottom: 2rem;
`;

export const ProductCategoryButtonContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  & > * {
    width: 6rem;
  }
`;

export const BottomSquareButtonContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
