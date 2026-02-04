import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';

import StatusButton from './StatusButton';

/**
 * #### 개요
 *
 * prop으로 넘겨주는 색상코드(`colors`)에서 현재 상태(`status`)의 배경색을 갖는 버튼
 *
 * #### 사용처
 *
 * 상품의 카테고리 버튼(ex.회원권, PT, ...), 락커의 상태 표시 버튼(ex.사용가능, 사용중, ...)
 *
 * #### 사용 방법
 *
 * 색상 코드 객체와 현재 버튼의 상태를 prop으로 넘겨줌
 *
 */

const meta: Meta<typeof StatusButton> = {
  title: 'Components/Buttons/StatusButton',
  component: StatusButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    colors: { control: 'text' },
    status: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof StatusButton>;

export const Default: Story = {
  render: (args) => {
    const productStatus = {
      판매중: '#32CD32',
      판매중지: '#FF4500',
      이벤트: '#FFA500',
      삭제: '#FF0000',
    };
    const status = '판매중';
    return <StatusButton colors={productStatus} status={status} />;
  },
};

export const FormattedText: Story = {
  render: (args) => {
    const productCategories = {
      PT: '#FFD700',
      운동복: '#FF6347',
      회원권: '#4682B4',
      락커: '#6A5ACD',
      패키지: '#20B2AA',
    };
    const status = '회원권';
    return (
      <StatusButton colors={productCategories} status={status}>{`판매중: ${status}`}</StatusButton>
    );
  },
};
