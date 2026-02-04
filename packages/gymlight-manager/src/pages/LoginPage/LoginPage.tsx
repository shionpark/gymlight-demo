import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { Input, INPUT_OPTIONS, SquareButton, useForm } from 'gymlight-design-system';

import type { AuthType, ILoginFormRequest } from '@/types';
import { setRedirect } from '@/utils';

import { AuthForm, AuthSection, useLogin } from '@/features/auth';

const LoginPage = () => {
  const location = useLocation();

  const { register, handleSubmit, errors } = useForm<ILoginFormRequest>();
  const { mutate } = useLogin();

  const onValid = async (form: ILoginFormRequest) => {
    const { email, password } = form;

    mutate({ email, password });
  };

  const authType: AuthType = '로그인';

  useEffect(() => {
    setRedirect(location);
  }, [location]);

  return (
    <AuthSection>
      <AuthForm title={authType} onSubmit={handleSubmit(onValid)}>
        <Input
          type="email"
          errorMessage={errors.email}
          {...register({
            name: 'email',
            placeholder: '이메일을 입력해주세요',
            validationRules: INPUT_OPTIONS.EMAIL,
          })}
        />
        <Input
          type="password"
          errorMessage={errors.password}
          {...register({
            name: 'password',
            placeholder: '비밀번호',
            validationRules: INPUT_OPTIONS.PASSWORD,
          })}
        />
        <SquareButton variant="normal" size="normal" wide>
          로그인
        </SquareButton>
      </AuthForm>
    </AuthSection>
  );
};

export default LoginPage;
