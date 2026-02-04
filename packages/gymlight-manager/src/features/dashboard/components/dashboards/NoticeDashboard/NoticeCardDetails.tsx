import { CalendarIcon, EyeIcon, UserIcon } from '@heroicons/react/24/outline';
import * as Styled from './NoticeCardDetails.styles';

interface INoticeCardDetailsProps {
  createdDate?: string;
  authorName?: string;
  views?: number;
}

const NoticeCardDetails = ({ createdDate, authorName, views }: INoticeCardDetailsProps) => {
  return (
    <Styled.Wrapper>
      <div className="section">
        <CalendarIcon />
        {createdDate}
      </div>
      <div className="section">
        <UserIcon />
        {authorName}
      </div>
      <div className="section">
        <EyeIcon />
        {views || 0}
      </div>
    </Styled.Wrapper>
  );
};

export default NoticeCardDetails;
