import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
`;

export const MockupBox = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 0.75rem;
  box-shadow:
    0 1rem 1.5rem -0.3rem rgba(0, 0, 0, 0.1),
    0 0.4rem 0.6rem -0.2rem rgba(0, 0, 0, 0.05);
`;

export const PreviewImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 0.75rem;
  box-shadow:
    0 1rem 1.5rem -0.3rem rgba(0, 0, 0, 0.1),
    0 0.4rem 0.6rem -0.2rem rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ImageInput = styled.input`
  width: 100%;
  margin: 0rem auto;
`;
