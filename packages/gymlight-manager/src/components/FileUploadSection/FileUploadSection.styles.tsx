import styled from '@emotion/styled';
import { Input, styles } from 'gymlight-design-system';

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-right: ${styles.space.level3}rem;
  }
`;

export const FileInput = styled(Input)`
  display: none;
`;
