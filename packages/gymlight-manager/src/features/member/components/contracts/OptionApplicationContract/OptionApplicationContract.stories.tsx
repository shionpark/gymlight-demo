import { Meta, StoryObj } from '@storybook/react';

import OptionApplicationContract from './OptionApplicationContract';

/** ##  OptionApplicationContract
 *
 * ### 개요
 *
 * 짐라이트 옵션 신청 계약서
 *
 * ### 사용 위치
 *
 * 결제정보, 계약서 보기
 *
 * ### 사용팁
 *
 * 이 컴포넌트는 사용자와의 상호작용이 하나도 없습니다.
 * 그저 입력받은 prop에 따라서 계약서를 그려줍니다.
 *
 */
const meta: Meta<typeof OptionApplicationContract> = {
  title: 'features/member/OptionApplicationContract',
  component: OptionApplicationContract,
  argTypes: {
    name: {
      control: 'text',
      description: '회원의 이름',
    },
    phone: {
      control: 'text',
      description: '회원의 전화번호',
    },
    clothesFee: {
      control: 'number',
      description: '운동복 대여료',
    },
    lockerFee: {
      control: 'number',
      description: '개인락커 대여료',
    },

    period: {
      control: 'text',
      description: '대여 기간',
    },

    signatureImage: {
      control: 'text',
      description: '회원 서명 (Base64 인코딩된 SVG 데이터)',
    },
    contractDate: {
      control: 'text',
      description: '서명 날짜',
    },
  },
};
export default meta;

type Story = StoryObj<typeof OptionApplicationContract>;

export const Example: Story = {
  args: {
    ...{
      name: '홍길동',
      phone: '010-1234-5678',
      clothesFee: 50000,
      lockerFee: 30000,
      totalAmount: 80000, // 총 금액
      period: '2024-07-01 ~ 2024-12-31',
      lockerNumber: 42,
      lockerPassword: 1234,
      memberSignature:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGQ9Ik0xMCAxMCBRIDIwIDIwLCAzMCAxMCBUIDUwIDEwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz48cGF0aCBkPSJNNjAgMzAgUSAgNzAgMjAsIDgwIDMwIFQgOTAgMzAiIHN0cm9rZT0iYmxhY2siIGZpbGw9InRyYW5zcGFyZW50IiAvPjwvc3ZnPg==', // 회원 서명 (base64 인코딩된 SVG)
      staffSignature:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGQ9Ik0xMCAxMCBRIDIwIDIwLCAzMCAxMCBUIDUwIDEwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz48cGF0aCBkPSJNNjAgMzAgUSAgNzAgMjAsIDgwIDMwIFQgOTAgMzAiIHN0cm9rZT0iYmxhY2siIGZpbGw9InRyYW5zcGFyZW50IiAvPjwvc3ZnPg==', // 직원 서명 (base64 인코딩된 SVG)
      date: '2023-09-23',
    },
  },
};
