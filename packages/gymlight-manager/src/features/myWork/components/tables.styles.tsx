import styled from '@emotion/styled';
import { DualSideBar } from 'gymlight-design-system';

export const MyWorkPageTabWrapper = styled.div`
  height: 82vh;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchSectionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DualSideHeader = styled(DualSideBar)`
  .right-section button {
    width: 8rem;
  }

  .left-section button {
    width: 5rem;
    margin-right: 1rem;
  }
`;

export const DualSideBottom = styled(DualSideBar)`
  padding-right: 2rem;
  .content > div {
    width: 10rem;
  }
`;
