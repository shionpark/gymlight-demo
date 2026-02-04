import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from '@/styles';

import SearchInput from './SearchInput';

/**
 *
 * ### 개요
 *
 * 검색을 위한 Input
 *
 * ### 사용처
 *
 * Header 및 Table
 *
 * ### 설명
 * Input 컴포넌트에서 SearchInput 컴포넌트에 불필요한 속성은 제거하여 작성했습니다.
 *
 * 스타일적으로 바뀐 부분은 아이콘과 border radius가 추가되었습니다!!!!
 * */

const meta: Meta<typeof SearchInput> = {
  title: 'components/Inputs/SearchInput',
  component: SearchInput,
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
    errorMessage: { control: 'text' },

    onChange: { action: 'changed' },
    onKeyDown: { action: 'key down' },
    onKeyPress: { action: 'key press' },
    onBlur: { action: 'blurred' },

    size: { control: { type: 'radio', options: ['small', 'normal'] } },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

/** 기본 검색창 */
export const Default: Story = {
  args: {
    name: 'default',
    placeholder: '검색어 입력',
    size: 'normal',
    errorMessage: '',
    readOnly: false,
  },
};

/** 에러 메시지 검색창 */
export const WithErrorMessage: Story = {
  args: {
    name: 'with-error',
    placeholder: '검색어 입력',
    errorMessage: '잘못된 검색어입니다.',
    size: 'normal',
  },
};

/** ReadOnly 상태 스토리 */
export const ReadOnly: Story = {
  args: {
    name: 'read-only',
    placeholder: '읽기 전용 필드',
    readOnly: true,
    size: 'normal',
  },
};

/** 작은 사이즈 검색창 */
export const SmallSize: Story = {
  args: {
    name: 'small-size',
    placeholder: '작은 입력 필드',
    size: 'small',
  },
};

export const WithInitFn: Story = {
  args: {
    ...Default.args,
    handleInit: () => alert('click!'),
  },
};
