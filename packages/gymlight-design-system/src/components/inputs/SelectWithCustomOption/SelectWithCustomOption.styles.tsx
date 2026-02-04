import styled from '@emotion/styled';

interface IWrapperProps {
  isEditing?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ isEditing }) => (isEditing ? '1fr 1fr' : '1fr')};
  text-align: center;
`;

export const EditOptionInputWrapper = styled.div`
  display: flex;
`;
