import styled from '@emotion/styled';

import { flexCenterStyle, flexColumnStyle, flexStyle, styles } from '@/styles';

export const FlexContainer = styled.div`
  ${flexStyle};
`;

export const BranchCard = styled.div`
  ${flexStyle};
  justify-content: space-between;

  min-width: 44rem;
  padding: ${styles.space.level3}rem;
  border-radius: ${styles.borderRadius.normal}rem;
  box-shadow: ${styles.shadow.light};
`;

export const BranchNumber = styled.div`
  ${flexCenterStyle};

  width: 6rem;
  height: 6rem;
  text-align: center;
  margin-right: ${styles.space.level4}rem;

  color: ${({ theme }) => theme.font.default};
  border-radius: ${styles.borderRadius.round}rem;
  border: 1px solid ${({ theme }) => theme.border.default};
`;

export const BranchName = styled.div`
  display: flex;
  gap: ${styles.space.level3}rem;

  span {
    font-weight: ${styles.fontWeight.bold};
  }
`;

export const BranchTel = styled.div`
  ${flexColumnStyle}

  font-size: ${styles.fontSize.small}rem;
`;

export const BranchStaffInfo = styled.div`
  ${flexColumnStyle};
  align-items: center;
  gap: ${styles.space.level1}rem;
`;
