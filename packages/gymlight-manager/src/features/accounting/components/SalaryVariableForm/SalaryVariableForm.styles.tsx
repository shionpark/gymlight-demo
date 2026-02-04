import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;

  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  position: relative;
`;

export const NormalVariableWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 75rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 0.5rem;

  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 0;
`;

export const CardTitle = styled.h3`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 0.5rem;
  font-size: ${styles.fontSize.small}rem;
  font-weight: ${styles.fontWeight.bold}rem;
  background-color: ${({ theme }) => theme.background.dark};
  color: white;
  margin: 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${styles.fontSize.xsmall}rem;
`;

export const TableCell = styled.td<{ isHeader?: boolean }>`
  border: 1px solid ${({ theme }) => theme.background.default};
  padding: 0.5rem;
  ${({ isHeader }) => isHeader && `font-weight: 600;`}
  font-size: ${styles.fontSize.xsmall}rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid #e2e8f0;
  border-radius: 0.25rem;
  text-align: right;

  &[type='number'][readonly] {
    background-color: ${({ theme }) => theme.background.default};
    cursor: not-allowed;
  }
`;

export const InputWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const DarkHeader = styled.div`
  background-color: ${({ theme }) => theme.background.dark};
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-weight: 500;
`;

export const SmallInput = styled(Input)`
  width: 8rem;
  text-align: center;
`;

export const RatioTableSetWrapper = styled.div`
  display: flex;

  gap: 1rem;
  justify-content: space-between;
`;

export const RatioTableWithPointWrapper = styled.div`
  flex: 1.5;
  overflow-x: auto;
`;

export const RatioTableWrapper = styled.div`
  flex: 1;
  overflow-x: auto;
`;

export const RatioTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th,
  td {
    border:
      0,
      1px solid #e2e8f0;
    padding: 0.25rem;
    font-size: ${styles.fontSize.xsmall}rem;
  }

  th {
    background-color: #4b5563;
    color: white;
    font-size: ${styles.fontSize.small}rem;
  }

  .highlighted {
    background-color: #ffedd5;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  position: absolute;

  right: 2rem;
  width: 20rem;

  display: grid;
  @media (min-width: 75rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 1rem;
`;

export const RightAlignContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
`;
