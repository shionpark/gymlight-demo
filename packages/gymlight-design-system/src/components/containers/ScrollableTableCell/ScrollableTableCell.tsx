import { memo } from 'react';
import type { HtmlHTMLAttributes, ReactNode } from 'react';

import { Cell } from './ScrollableTableCell.styles';

interface IScrollableTableCellProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ScrollableTableCell = ({ children, ...rest }: IScrollableTableCellProps) => (
  <Cell {...rest}> {children}</Cell>
);

ScrollableTableCell.displayName = 'ScrollableTableCell';

export default memo(ScrollableTableCell);
