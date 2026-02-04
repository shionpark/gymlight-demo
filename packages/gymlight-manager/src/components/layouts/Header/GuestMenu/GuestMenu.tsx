import { memo } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { URLS } from '@/constants';
import { parseLocationToRedirect } from '@/utils';

import { TransparentButton } from '../../TransparentButton';

import * as Styled from './GuestMenu.styles';

const GuestMenu = () => {
  const location = useLocation();
  const redirect = parseLocationToRedirect(location);

  return (
    <>
      <Styled.MenuItem>
        <TransparentButton>
          <Link to={URLS.CLIENT.JOIN} state={{ redirect }}>
            회원가입
          </Link>
        </TransparentButton>
      </Styled.MenuItem>
      <Styled.MenuItem>
        <TransparentButton>
          <Link to={URLS.CLIENT.LOGIN} state={{ redirect }}>
            로그인
          </Link>
        </TransparentButton>
      </Styled.MenuItem>
    </>
  );
};

export default memo(GuestMenu);
