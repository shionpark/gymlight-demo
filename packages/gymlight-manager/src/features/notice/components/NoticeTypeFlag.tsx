import { StatusButton } from 'gymlight-design-system';

import { theme } from '@/styles';
import { NoticeTypes } from '../constant';

interface INoticeTypeFlagProps {
  type: NoticeTypes | '알수없음';
}

const NoticeTypeFlag = ({ type }: INoticeTypeFlagProps) => {
  const noticeTypeColors = {
    공지: theme.noticeColors.notice,
    이벤트: theme.noticeColors.event,
    알수없음: theme.noticeColors.undefined,
  };

  return <StatusButton className="flag-btn" colors={noticeTypeColors} status={type} />;
};

export default NoticeTypeFlag;
