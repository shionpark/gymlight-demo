import styled from '@emotion/styled';
import { buttonsWrapper, flexStyle, styles } from '@/styles';

import { DropdownForMenu } from 'gymlight-design-system';

export const Details = styled.div`
  ${buttonsWrapper};
  font-size: ${styles.fontSize.small}rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;

  select {
    width: 10rem;
  }
`;

export const OptionWrapper = styled(DropdownForMenu)`
  display: flex;
  align-items: center;

  text-align: left;
  white-space: nowrap;
  gap: 0.4rem;

  & > svg {
    width: 2rem;
  }
`;
