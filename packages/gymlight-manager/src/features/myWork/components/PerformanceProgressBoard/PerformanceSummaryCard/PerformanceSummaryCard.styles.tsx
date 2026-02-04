import styled from '@emotion/styled';
import { SquareButton, styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: white;

  padding: 0.5rem 1.5rem;

  display: flex;
  align-items: center;

  gap: ${styles.space.level4}rem;

  & svg {
    width: 5em;
  }
`;

export const InfoContainer = styled.div`
  width: 85%;
  max-width: 80rem;
`;

export const InfoContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: ${styles.fontSize.h6}rem;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  text-align: left;
  font-size: ${styles.fontSize.small}rem;
`;

export const ViewButton = styled(SquareButton)`
  width: 8rem;
  height: 2.5rem;
`;
