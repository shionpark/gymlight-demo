import { styles } from 'gymlight-design-system';
import styled from '@emotion/styled';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

const paddingSpace = styles.space.level6;

export const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.background.light};
  margin: ${styles.space.level2}rem ${styles.space.level6}rem;
  border-radius: ${styles.borderRadius.normal}rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: ${styles.fontWeight.bold};
  padding: ${styles.space.level1}rem 0;
`;

export const InfoWrapper = styled.div`
  padding: ${styles.space.level5}rem ${paddingSpace}rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  font-size: ${styles.fontSize.small}rem;

  display: flex;
  flex-direction: column;
  gap: ${styles.space.level1}rem;
`;

export const DateInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DateInfo = styled.div`
  display: flex;
  gap: ${styles.space.level1}rem;
`;

export const Label = styled.span`
  font-weight: ${styles.fontWeight.bold};
`;

export const HitsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;
`;

export const Content = styled.div`
  height: 40rem;
  overflow: auto;
  padding: ${paddingSpace}rem;

  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${styles.space.level1}rem;

  &:hover {
    cursor: pointer;
  }
`;

export const OtherPost = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 0 ${styles.space.level6}rem;

  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

export const OtherPostTitle = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 4rem;
`;

export const ListButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & > button {
    width: 20rem;
  }
`;

export const LeftArrowIcon = styled(ChevronLeftIcon)`
  width: 2rem;
`;

export const TopArrowIcon = styled(ChevronUpIcon)`
  width: 2rem;
  stroke-width: 2.2px;
`;

export const DownArrowIcon = styled(ChevronDownIcon)`
  width: 2rem;
  stroke-width: 2.2px;
`;

export const EyesIcon = styled(EyeIcon)`
  width: 2rem;
`;

export const Line = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.border.dark};
  width: 2px;
  height: 10px;
  margin: 0 ${styles.space.level4}rem;
`;
