import styled from '@emotion/styled';
import { styles } from '@/styles';

export const CalendarTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-spacing: 0;
  overflow: hidden;

  thead {
    position: sticky;
    top: -0.3rem;
    background: ${({ theme }) => theme.background.default};
    border: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};

    z-index: 10;

    tr {
      height: 4rem;
      background: white;
      border-style: solid;
      border-color: ${({ theme }) => theme.border.default};

      th {
        height: inherit;

        &:first-child {
          background: ${({ theme }) => theme.tableCells.holiday};
        }

        display: table-cell;
        vertical-align: middle;
        text-align: center;

        svg {
          width: 2rem;

          &:hover {
            cursor: pointer;
          }
        }
        &:first-child {
          border-top-left-radius: 0.8rem;
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
      height: 30rem;
      border-style: solid;
      border-color: ${({ theme }) => theme.border.default};
      td {
        height: inherit;
        width: inherit;
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
  gap: 1rem;
`;

export const DayCellWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
`;
