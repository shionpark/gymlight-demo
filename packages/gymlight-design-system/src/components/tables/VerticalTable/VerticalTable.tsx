import type { HTMLAttributes, ReactNode } from 'react';

import * as Styled from './VerticalTable.styles';

interface IVerticalTableProps extends HTMLAttributes<HTMLTableElement> {
  columnWidths: (string | number)[];
  tableHeaderCells: ReactNode[];
  tableRows: ReactNode[][];
  height?: number;
}

const VerticalTable = ({
  columnWidths,
  tableHeaderCells,
  tableRows,
  height,
}: IVerticalTableProps) => {
  const calculatedWidths = Array.from({ length: tableHeaderCells.length }, (_, index) => {
    const width = columnWidths[index];
    if (typeof width === 'string') {
      return width;
    }
    if (typeof width === 'number' && !isNaN(width)) {
      return `${width}rem`;
    }
    return 'auto';
  });

  return (
    <Styled.TableWrapper>
      <Styled.Table customHeight={height} defaultHeight={tableRows.length}>
        <colgroup>
          {calculatedWidths.map((width, index) => (
            <col key={`cols${index}`} style={{ width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {tableHeaderCells.map((headerCell, index) => (
              <th key={`th-${index}`}>
                <Styled.CellComponentWrapper>{headerCell}</Styled.CellComponentWrapper>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, rowIndex) => (
            <tr key={`tr-${rowIndex}`}>
              {row.map((rowCell, cellIndex) => (
                <td key={`tr-${rowIndex}-${cellIndex}`}>
                  <Styled.CellComponentWrapper>{rowCell}</Styled.CellComponentWrapper>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.TableWrapper>
  );
};

export default VerticalTable;
