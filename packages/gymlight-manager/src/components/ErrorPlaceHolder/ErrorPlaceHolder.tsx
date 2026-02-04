import {
  NoSymbolIcon as NotAllowedIcon,
  WrenchScrewdriverIcon as NotReadyIcon,
  FolderOpenIcon as NoDataIcon,
  ExclamationCircleIcon as ErrorIcon,
} from '@heroicons/react/24/outline';

import * as Styled from './ErrorPlaceHolder.styles';

interface IErrorPlaceHolderProps {
  vertical?: boolean;
  type: 'error' | 'no-data' | 'not-ready' | 'not-allowed';
  message?: string;
}

const ErrorPlaceHolder = ({ type, message, vertical = true }: IErrorPlaceHolderProps) => {
  const Icons = {
    error: <ErrorIcon width={50} />,
    'no-data': <NoDataIcon width={50} />,
    'not-allowed': <NotAllowedIcon width={50} />,
    'not-ready': <NotReadyIcon width={50} />,
  };

  const messages = {
    error: '알 수 없는 에러가 발생했습니다.',
    'no-data': '현재 데이터가 없어서 접근할 수 없습니다.',
    'not-allowed': '접근 권한이 없습니다.',
    'not-ready': '준비 중입니다.',
  };

  return (
    <Styled.Wrapper vertical={vertical}>
      {Icons[type]}
      <div>{message ? message : messages[type]}</div>
    </Styled.Wrapper>
  );
};

export default ErrorPlaceHolder;
