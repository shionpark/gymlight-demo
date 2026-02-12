import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { Input, INPUT_OPTIONS, SquareButton, useForm } from 'gymlight-design-system';

import type { AuthType, ILoginFormRequest, UserRoleType } from '@/types';
import { setRedirect } from '@/utils';

import { AuthForm, AuthSection, useLogin } from '@/features/auth';

const DEMO_ACCOUNTS: { role: UserRoleType; label: string; email: string }[] = [
  { role: '관리자', label: '관리자', email: 'admin@gymlight.com' },
  { role: '매니저', label: '매니저', email: 'manager@gymlight.com' },
  { role: '트레이너', label: '트레이너', email: 'trainer1@gymlight.com' },
  { role: 'FC', label: 'FC', email: 'fc1@gymlight.com' },
];

const LoginPage = () => {
  const location = useLocation();

  const { register, handleSubmit, errors } = useForm<ILoginFormRequest>();
  const { mutate } = useLogin();

  const onValid = async (form: ILoginFormRequest) => {
    const { email, password } = form;

    mutate({ email, password });
  };

  const handleDemoLogin = (role: UserRoleType, email: string) => {
    mutate({ email, password: 'demo1234', role } as ILoginFormRequest & { role: UserRoleType });
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

        <div style={{ marginTop: '24px', borderTop: '1px solid #e5e5e5', paddingTop: '24px' }}>
          <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '16px' }}>
            데모 계정으로 로그인
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {DEMO_ACCOUNTS.map(({ role, label, email }) => (
              <SquareButton
                key={role}
                type="button"
                variant="outline"
                size="small"
                wide
                onClick={() => handleDemoLogin(role, email)}
              >
                {label}
              </SquareButton>
            ))}
          </div>
        </div>
      </AuthForm>
    </AuthSection>
  );
};

export default LoginPage;
