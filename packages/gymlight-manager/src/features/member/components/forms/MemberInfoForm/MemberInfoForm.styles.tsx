import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 80rem;
  & > div {
    gap: 2rem;
  }
  height: auto;
`;

export const AddressInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 1rem;
`;

export const SquareButtonContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ConditionalComponentWrapper = styled.div<{ isEdit?: boolean }>`
  display: ${({ isEdit }) => (isEdit ? 'block' : 'none')};
  width: 35rem;
  margin: 0 auto 2rem auto;
`;

export const ProfileImageContainer = styled.div<{ isEdit?: boolean }>`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: dashed 0.2rem ${({ isEdit }) => (isEdit ? 'black' : 'lightgray')};

  & > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const CameraOpenButtonWrapper = styled.div`
  margin: auto 0 0.5rem 2rem;
`;
