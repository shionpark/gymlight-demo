import { styles } from '@/styles';
import styled from '@emotion/styled';

export const CalendarTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    position: sticky;
    top: -0.3rem;
    background: ${({ theme }) => theme.background.light};
    border: ${styles.border.level1}rem solid ${({ theme }) => theme.border.dark};
    z-index: 10;

    tr {
      height: 3.6rem;
      background: inherit;
      border-style: solid;
      border-color: ${({ theme }) => theme.border.default};

      th {
        height: 100%;

        display: table-cell;
        vertical-align: middle;
        text-align: center;

        &:first-child {
          background: ${({ theme }) => theme.tableCells.holiday};
          border-left: 0rem;
          border-top-left-radius: 0.8rem;
        }

        svg {
          width: 2rem;

          &:hover {
            cursor: pointer;
          }
        }

        &:last-child {
          border-top-right-radius: 0.8rem;
        }
      }
    }
  }

  tbody {
    background: ${({ theme }) => theme.background.light};

    tr {
      height: 12rem;
      border-style: solid;
      border-color: ${({ theme }) => theme.border.default};
      td {
        height: inherit;
        border-left: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        border-right: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};
      }
    }
  }

  max-height: 70rem;
  overflow-y: auto;
  word-break: break-all;
`;
export const CellComponentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${styles.border.level1}rem;

  text-align: center;

  overflow-y: auto;
  overflow-x: hidden;
`;
