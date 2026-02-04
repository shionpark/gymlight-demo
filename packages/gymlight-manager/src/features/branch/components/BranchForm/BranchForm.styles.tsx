import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const TelInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level3}rem;
`;

export const AddressBtnWrapper = styled.div`
  display: flex;
  margin-top: ${styles.space.level1}rem;
`;

export const FormWrapper = styled.div`
  height: 100%;

  position: relative;
`;

export const StyledForm = styled.form`
  height: 50rem;
  overflow: auto;
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;
`;
export const AddressBoxContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  .label {
    margin-left: 1rem;
  }
  & > button {
    margin-top: 2rem;
  }
`;
