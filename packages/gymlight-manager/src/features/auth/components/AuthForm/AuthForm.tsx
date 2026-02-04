import type React from 'react';
import { memo } from 'react';

import type { AuthType } from '@/types';

import { AuthTitle, Form } from './AuthForm.styles';

interface IAuthFormProps {
  title: AuthType;
  children: React.ReactNode;

  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const AuthForm = ({ title, children, onSubmit }: IAuthFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <AuthTitle>
        <span>{title}</span>
      </AuthTitle>
      {children}
    </Form>
  );
};

export default memo(AuthForm);
