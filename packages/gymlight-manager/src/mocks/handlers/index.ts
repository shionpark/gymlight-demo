import { authHandlers } from './auth.handlers';
import { userHandlers } from './user.handlers';
import { dashboardHandlers } from './dashboard.handlers';
import { branchHandlers } from './branch.handlers';
import { memberHandlers } from './member.handlers';
import { productHandlers } from './product.handlers';
import { staffHandlers } from './staff.handlers';
import { teamHandlers } from './team.handlers';
import { attendanceHandlers } from './attendance.handlers';
import { lockerHandlers } from './locker.handlers';
import { noticeHandlers } from './notice.handlers';

export const handlers = [
  ...authHandlers,
  ...userHandlers,
  ...dashboardHandlers,
  ...branchHandlers,
  ...memberHandlers,
  ...productHandlers,
  ...staffHandlers,
  ...teamHandlers,
  ...attendanceHandlers,
  ...noticeHandlers,
  ...lockerHandlers,
];
