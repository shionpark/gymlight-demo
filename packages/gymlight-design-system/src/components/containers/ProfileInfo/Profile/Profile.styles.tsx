import styled from '@emotion/styled';

export const ProfileImage = styled.div`
  height: 4rem;
  width: 4rem;
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
