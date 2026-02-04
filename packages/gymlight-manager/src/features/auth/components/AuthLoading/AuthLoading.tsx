import * as Styled from './AuthLoading.styles';

const AuthLoading: React.FC = () => {
  return (
    <Styled.SpinnerContainer>
      <Styled.Spinner />
      <Styled.LoadingText>로딩 중입니다...</Styled.LoadingText>
    </Styled.SpinnerContainer>
  );
};

export default AuthLoading;
