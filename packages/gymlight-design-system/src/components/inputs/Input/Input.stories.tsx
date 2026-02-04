import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'components/Inputs/Input',
  component: Input,
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
    type: { control: 'text' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
    placeholder: { control: 'text' },
    readOnly: { control: 'boolean' },
    width: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    minLength: { control: 'number' },
    maxLength: { control: 'number' },
    pattern: { control: 'text' },
    errorMessage: { control: 'text' },

    onChange: { action: 'changed' },
    onKeyDown: { action: 'key down' },
    onKeyPress: { action: 'key press' },
    onBlur: { action: 'blurred' },

    size: { control: { type: 'radio', options: ['small', 'normal'] } },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// 기본 스토리 정의
export const Default: Story = {
  args: {
    name: 'default',
    placeholder: '입력하세요',
    size: 'normal',
    errorMessage: '',
  },
};

// 에러 메시지 스토리
export const WithErrorMessage: Story = {
  args: {
    name: 'with-error',
    placeholder: '입력하세요',
    errorMessage: '이 필드는 필수입니다.',
    size: 'normal',
  },
};

// ReadOnly 상태 스토리
export const ReadOnly: Story = {
  args: {
    name: 'read-only',
    value: '읽기 전용 텍스트',
    readOnly: true,
    size: 'normal',
  },
};

// 작은 사이즈 스토리
export const SmallSize: Story = {
  args: {
    name: 'small-size',
    placeholder: '작은 입력 필드',
    size: 'small',
  },
};

// 숫자 입력 필드 스토리
export const NumberInput: Story = {
  args: {
    name: 'number-input',
    type: 'number',
    placeholder: '숫자를 입력하세요',
    min: 0,
    max: 100,
  },
};
