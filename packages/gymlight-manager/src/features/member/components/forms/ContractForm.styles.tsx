import styled from '@emotion/styled';

import { styles } from 'gymlight-design-system';

export const Wrapper = styled.div`
  margin: 0;
  padding: ${styles.space.level9}rem;

  height: 80vh;
  width: auto;

  max-width: 180rem;

  overflow-y: auto;
  background-color: white;
`;

export const MainTitle = styled.div`
  text-align: center;
  font-size: ${styles.fontSize.h4}rem;
  font-weight: ${styles.fontWeight.bold};
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: ${styles.fontSize.normal}rem;
  margin-bottom: ${styles.space.level3}rem;
`;

export const Section = styled.div`
  margin-bottom: ${styles.space.level2}rem;
  background-color: ${({ theme }) => theme.background.light};
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.div`
  background-color: ${({ theme }) => theme.background.dark};

  text-align: center;
  color: ${({ theme }) => theme.font.reverse};
  font-size: ${styles.fontSize.small};
  font-weight: ${styles.fontWeight.bold};

  padding: ${styles.space.level1}rem 0;
  margin-bottom: ${styles.space.level2}rem;
`;

export const WriteInputContainer = styled.div`
  width: 100%;
  display: flex;

  &:first-child {
    width: 100%;
  }

  input {
    text-align: right;
  }

  & > button,
  span {
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${styles.space.level1}rem 2rem;

  gap: 2rem;

  & > *:nth-child(1),
  & > *:nth-child(2) {
    width: 50%;
  }

  & > *:only-child {
    width: 100%;
  }
`;

// 계약서 구성 요소 - 서명란

export const SignaturesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${styles.space.level4}rem 2rem;

  gap: 2rem;

  & > div {
    flex-grow: 1;
  }
`;

export const SignatureHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.button.disabled};
  padding: 0rem ${styles.space.level2}rem;
`;
export const SignatureWrapper = styled.div`
  width: inherit;
  height: inherit;
  min-height: 13rem;
  border: solid 0.1rem ${({ theme }) => theme.button.disabled};
`;

export const SignatureImage = styled.img`
  width: 100%;
  height: 100%;

  cursor: not-allowed;
`;

// 계약서 구성 요소 - 약관 관련

export const Explanation = styled.pre`
  text-align: center;
`;

export const TermTitle = styled.div`
  text-align: left;
  font-size: ${styles.fontSize.normal}rem;
  font-weight: ${styles.fontWeight.bold};
  margin-top: ${styles.space.level2}rem;
  margin-bottom: ${styles.space.level1}rem;
`;

export const InContractExplanation = styled.pre`
  all: unset;
  display: block;
  font-family: inherit;
  white-space: pre;
  padding: ${styles.space.level1}rem ${styles.space.level5}rem;
  margin: 0;
`;

export const AddressBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0rem;
`;

export const DateContainer = styled.div`
  width: 20%;
  align-self:center;
  font-size:${styles.fontSize.small}rem;
  text-align: center;
  margin: ${styles.space.level2}rem 0;
  padding-bottom: ${styles.space.level1}reml
  border-bottom: 1px solid ${({ theme }) => theme.border.default}; 
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);`;

export const InputWithButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;
