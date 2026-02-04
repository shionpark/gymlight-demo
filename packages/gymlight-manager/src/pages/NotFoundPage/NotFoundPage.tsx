import * as Styled from './NotFoundPage.styles';

import { SquareButton } from 'gymlight-design-system';

import { useNavigate } from 'react-router';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);
  const handleGoHome = () => navigate('/');

  return (
    <div>
      <Styled.Wrapper>
        <Styled.LogoImage src="/images/logo.png" alt="logo" />

        <Styled.Code>404 NotFound</Styled.Code>
        <Styled.Explanation>존재하지 않는 페이지 입니다.</Styled.Explanation>
        <Styled.ButtonContainer>
          <SquareButton onClick={handleGoBack}>뒤로가기 </SquareButton>
          <SquareButton onClick={handleGoHome} variant="primary">
            홈
          </SquareButton>
        </Styled.ButtonContainer>
      </Styled.Wrapper>
    </div>
  );
};

export default NotFoundPage;
