import styled from '@emotion/styled';

import { styles } from '@/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .info-title {
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    font-size: ${styles.fontSize.normal}rem;
    padding: ${styles.border.level2}rem 0rem;
  }
  .underLine {
    font-size: ${styles.fontSize.normal}rem;
    text-decoration: underline;
  }
`;

export const Paragraph = styled.div`
  margin-top: 0.8rem;
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewContainer = styled.div`
  height: 96%;
  overflow-y: scroll;
  & > div {
    font-size: ${styles.fontSize.small}rem;
  }
  .article-title {
    font-size: ${styles.fontSize.normal}rem;
    color: black;
  }
`;

export const EnrollSlider = styled.div<{ index: number }>`
  width: 100%;
  height: 38rem;
  position: relative;
  padding: 2rem;

  font-size: ${styles.fontSize.small}rem;

  .pagination {
  }
`;

export const PersonalInformationUseAgreement = styled.div`
  border: 0.15rem black solid;
  padding: 1.5rem;
`;
