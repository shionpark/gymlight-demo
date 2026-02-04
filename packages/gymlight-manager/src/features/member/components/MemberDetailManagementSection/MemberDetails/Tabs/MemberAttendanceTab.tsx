import { DateFilterOptionBox } from '@/components';

import {
  Checkbox,
  VerticalTable,
  DualSideBar,
  TablePaginationManager,
} from 'gymlight-design-system';

import { tableCellWidth } from '@/styles/variables';
import * as TabStyle from './tab.styles';

export interface IAttendanceData {
  id: number;
  date: string;
}
interface IMemberAttendanceTabProps {
  data: {
    list: IAttendanceData[];
    totalElement: number;
    totalPages: number;
  };
}
const MemberAttendanceTab = () => {
  const tableHeaderCells = ['✔️', 'No.', '출석일시'];

  const columnWidths = [tableCellWidth.checkbox, tableCellWidth.xs, tableCellWidth.auto];

  return (
    <TabStyle.Wrapper>
      <DualSideBar />
      <VerticalTable
        height={30}
        tableHeaderCells={tableHeaderCells}
        tableRows={[]}
        columnWidths={columnWidths}
      />
    </TabStyle.Wrapper>
  );
};
export default MemberAttendanceTab;
