import { useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { FieldRegisterType, IRegisterOptions, RefTargetType } from '@/libs';
import { GlobalStyles, theme } from '@/styles';

import PhoneInput from './PhoneInput';

const mockRegister: FieldRegisterType = <Target extends RefTargetType>(
  options: IRegisterOptions,
) => {
  const ref = useRef<Target>(null);

  return {
    ref,
    name: options.name,
    placeholder: options.placeholder || '',
    onBlur: () => {
      console.log(`${options.name} 필드 블러 처리`);
    },
  };
};

const meta: Meta<typeof PhoneInput> = {
  title: 'components/Inputs/PhoneInput',
  component: PhoneInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    name: { control: 'text' },
    defaultValue: { control: 'text' },
    placeholder: { control: 'text' },
    register: { control: 'object' },
    validationRules: { control: 'object' },
    requiredMessage: { control: 'text' },
    errors: { control: 'object' },
    wide: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    name: 'phone',
    defaultValue: '010-',
    placeholder: '010-XXXX-XXXX',
    register: mockRegister,
    errors: {},
    wide: false,
  },
};

export const WithErrorMessage: Story = {
  args: {
    name: 'phone',
    defaultValue: '010-1234-5678',
    placeholder: '010-XXXX-XXXX',
    register: mockRegister,
    errors: {
      phone: '휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.',
    },
    wide: false,
  },
};

export const WideInput: Story = {
  args: {
    name: 'phone',
    defaultValue: '010-',
    placeholder: '010-XXXX-XXXX',
    register: mockRegister,
    errors: {},
    wide: true,
  },
};

export const WithPreselectedNumber: Story = {
  args: {
    name: 'phone',
    defaultValue: '010-1234-5678',
    placeholder: '010-XXXX-XXXX',
    register: mockRegister,
    errors: {},
    wide: false,
  },
};
