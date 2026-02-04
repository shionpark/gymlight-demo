import styled from '@emotion/styled';

import { theme, styles } from '@/styles';
import { darken, lighten } from 'polished';

const ROW_HEIGHT = 3.6;
const ROW_HEIGHT_WITH_BORDER = ROW_HEIGHT + styles.border.level1 * 2;
const BROWSER_TABLE_OUTER_SPACE = 2.2;
const FIRST_CELL_ADJUSTMENT = 0.3;

export const TableWrapper = styled.div`
  width: 100%;
  max-height: 68rem;
  height: inherit;
  overflow: auto;
`;

export const Table = styled.table<{ customHeight?: number; defaultHeight: number }>`
  width: 100%;
  background: ${({ theme }) => theme.background.light};

  ${({ customHeight, defaultHeight }) => {
    if (customHeight) {
      return `height: ${customHeight}rem;
 `;
    }
    const dynamicHeight =
      (defaultHeight + 1) * ROW_HEIGHT_WITH_BORDER +
      FIRST_CELL_ADJUSTMENT * 2 +
      BROWSER_TABLE_OUTER_SPACE;
    return `
      height: ${Math.ceil(Math.max(dynamicHeight, 10))}rem;
    `;
  }}
  table-layout: fixed;

  word-break: break-all;

  border-collapse: collapse;
  border-spacing: 0;

  thead {
    position: sticky;
    top: -${FIRST_CELL_ADJUSTMENT}rem;
    background: ${({ theme }) => darken(0.06, theme.background.default)};
    border: ${styles.border.level1}rem solid;
    ${({ theme }) => darken(0.06, theme.background.default)};
    z-index: 10;

    tr {
      height: ${ROW_HEIGHT}rem;
      background: inherit;
      border-style: solid;
      border-color: ${theme.border.default};

      th {
        height: auto;
        border-left: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        z-index: 2;

        svg {
          width: 2rem;

          &:hover {
            cursor: pointer;
          }
        }
      }

      th:first-child {
        position: sticky;
        left: 0;
        background-color: ${({ theme }) => darken(0.06, theme.background.default)};
        box-shadow: 2px 0 5px -2px rgba(0, 0, 0, 0.3); /* 테두리 대신 box-shadow 사용 */
        z-index: 3;
        background-clip: padding-box; /* 테두리가 배경에 고정되도록 설정 */
      }
    }
  }

  tbody {
    background: ${({ theme }) => theme.background.light};

    tr {
      height: ${ROW_HEIGHT}rem;
      border-style: solid;
      border-color: ${theme.border.default};
      td {
        border-left: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        z-index: 1;
      }

      td:first-child {
        position: sticky;
        left: 0;
        z-index: 2;
        border-right: ${styles.border.level1}rem solid ${({ theme }) => theme.border.default};
        background-clip: padding-box;
      }
    }

    tr:hover {
      background: ${({ theme }) => lighten(0.01, theme.background.default)}; // 배경색 변경
    }
  }
`;

export const CellComponentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;
