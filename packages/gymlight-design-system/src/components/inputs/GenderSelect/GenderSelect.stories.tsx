import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';

import GenderSelect from './GenderSelect';

const meta: Meta<typeof GenderSelect> = {
  title: 'components/Inputs/GenderSelect',
  component: GenderSelect,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    name: {
      control: 'text',
      description: '선택 필드의 이름을 지정합니다.',
    },
    values: {
      control: 'array',
      description: '드롭다운에 표시할 값들의 배열을 지정합니다.',
      defaultValue: ['Male', 'Female', 'Other'],
    },
    defaultValue: {
      control: 'text',
      description: '초기 선택된 값을 지정합니다.',
    },
    value: {
      control: 'text',
      description: '현재 선택된 값을 지정합니다.',
    },
    onChange: {
      action: 'changed',
      description: '선택된 값이 변경될 때 호출되는 핸들러입니다.',
    },
    onBlur: {
      action: 'blurred',
      description: '선택 필드가 포커스를 잃을 때 호출되는 핸들러입니다.',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof GenderSelect>;

export const Default: Story = {
  args: {
    name: 'gender',
    values: ['남', '여'],
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'gender',
    values: ['남', '여'],
    defaultValue: '남',
  },
};

export const ControlledValue: Story = {
  args: {
    name: 'gender',
    values: ['남', '여'],
    value: '남',
  },
};
