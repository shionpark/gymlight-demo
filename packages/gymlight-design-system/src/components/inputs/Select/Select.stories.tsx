import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'components/Inputs/Select',
  component: Select,
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
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    children: { control: 'text', description: 'Select options' },

    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="" disabled selected hidden>
          선택하세요
        </option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </>
    ),
    defaultValue: '',
  },
};

export const WithPreselectedOption: Story = {
  args: {
    children: (
      <>
        <option value="">선택하세요</option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </>
    ),
    defaultValue: 'option2',
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <option value="">선택하세요</option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </>
    ),
    disabled: true,
  },
};
