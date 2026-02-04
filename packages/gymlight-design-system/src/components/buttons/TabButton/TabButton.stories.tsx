import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';

import TabButton from './TabButton';

/**
 *
 * ### 개요
 *
 * 페이지의 하위 요소. 탭을 클릭하면 해당 탭에 맞는 컴포넌트가 보여짐.
 *
 * ### 사용처
 *
 * 회원관리(공통), 통계관리(관리자), 회계관리(관리자), 지점관리(관리자), 내업무관리(트레이너), 실적관리(트레이너) 페이지
 *
 */

const meta: Meta<typeof TabButton> = {
  title: 'Components/Buttons/TabButton',
  component: TabButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TabButton>;

export const Default: Story = {
  args: {
    children: 'Tab',
  },
};

export const Active: Story = {
  args: {
    children: 'Tab',
    active: true,
  },
  render: (args) => (
    <>
      <TabButton {...args} />
    </>
  ),
};

export const OverflowOutline: Story = {
  args: {
    children: 'Tab',
  },
  render: (args) => (
    <>
      <TabButton {...args} />
      <TabButton {...args} />
      <TabButton {...args} />
      <TabButton className="selected" {...args} />
    </>
  ),
};
