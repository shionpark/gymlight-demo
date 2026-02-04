import { styles } from '@/styles';
import styled from '@emotion/styled';

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${styles.space.level1}rem;

  height: ${styles.component.header.height}rem;
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
    ${styles.transition.button};
  }

  & > svg {
    width: ${styles.fontSize.h3}rem;
    height: ${styles.fontSize.h3}rem;

    color: ${({ theme }) => theme.font.default};
    margin-left: ${styles.space.level3}rem;
  }
`;

export const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${styles.space.level3}rem;
  font-size: ${styles.fontSize.small}rem;

  .profile-name {
    font-weight: ${styles.fontWeight.bold}rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: ${styles.space.level1}rem;
    font-size: ${styles.fontSize.xsmall}rem;
  }
`;
