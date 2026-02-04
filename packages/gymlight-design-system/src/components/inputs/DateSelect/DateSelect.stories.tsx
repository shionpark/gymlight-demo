import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { FieldRegisterType, IRegisterOptions, FieldErrorsType, RefTargetType } from '@/libs';
import { GlobalStyles, theme } from '@/styles';

import DateSelect from './DateSelect';

const mockRegister: FieldRegisterType = <Target extends RefTargetType>(
  options: IRegisterOptions,
) => {
  const ref = React.createRef<Target>();

  return {
    ref,
    name: options.name,
    placeholder: options.placeholder || '',
    onBlur: () => {
      console.log(`${options.name} 필드 블러 처리`);
    },
  };
};

const meta: Meta<typeof DateSelect> = {
  title: 'components/Inputs/DateSelect',
  component: DateSelect,
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
    register: { control: 'object' },
    errors: { control: 'object' },
    yearRange: { description: '커스텀 가능한 년도 선택 범위', control: 'array' },
    monthRange: { description: '커스텀 가능한 달 선택 범위', control: 'array' },
    daysRange: { description: '커스텀 가능한 날짜 선택 범위 ', control: 'array' },
  },
};

export default meta;

type Story = StoryObj<typeof DateSelect>;

export const Default: Story = {
  args: {
    name: 'birthdate',
    register: mockRegister,
    errors: {} as FieldErrorsType,
  },
};

export const WithErrorMessage: Story = {
  args: {
    name: 'birthdate',
    register: mockRegister,
    errors: {
      birthdateYear: '연도를 입력하세요',
      birthdateMonth: '월을 입력하세요',
      birthdateDay: '일을 입력하세요',
    } as FieldErrorsType,
  },
};
