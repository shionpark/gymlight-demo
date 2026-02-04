import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

const setSectionStyle = (isEdit: boolean) => {
  if (isEdit) {
    return css`
      width: 100%;
    `;
  }
  return css`
    display: grid;
    grid-template-columns: 0.7fr 2.3fr;
    gap: ${styles.space.level5}rem;
    height: 100%;
  `;
};

export const ModalSection = styled.div<{ isEdit?: boolean }>`
  ${({ isEdit }) => setSectionStyle(isEdit || false)}
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-left: ${styles.space.level1}rem;
    font-size: ${styles.fontSize.small}rem;
  }
`;

export const DirectionSection = styled.div`
  display: flex;
  gap: ${styles.space.level3}rem;
`;

export const GridWrapper = styled.div`
  background: ${({ theme }) => theme.button.disabled};
  height: 60rem;
  overflow: auto;

  & > div {
    height: inherit;
    overflow: auto;
    padding: ${styles.space.level2}rem;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: ${styles.fontSize.small}rem;
`;
