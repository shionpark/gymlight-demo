import { Meta, StoryObj } from '@storybook/react';

import TransferApplicationContract from './TransferApplicationContract';

/** ##  TransferApplicationContract
 *
 * ### 개요
 *
 * 짐라이트 양도 신청 계약서
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
const meta: Meta<typeof TransferApplicationContract> = {
  title: 'features/member/TransferApplicationContract',
  component: TransferApplicationContract,
  argTypes: {
    transferorInfo: {
      phone: {
        control: 'text',
        description: '양도인의 전화번호',
        defaultValue: '010-1234-5678',
      },
    },
    transfereeInfo: {
      birthDate: {
        control: 'text',
        description: '양수인의 생년월일',
        defaultValue: '1995-05-15',
      },
      startDate: {
        control: 'text',
        description: '양수 시작일',
        defaultValue: '2023-09-01',
      },
      phone: {
        control: 'text',
        description: '양수인의 전화번호',
        defaultValue: '010-8765-4321',
      },
      transferFee: {
        control: 'text',
        description: '양도 수수료',
        defaultValue: '100,000원',
      },
      signature: {
        control: 'text',
        description: '양수인의 서명 (Base64 인코딩된 SVG 데이터)',
        defaultValue:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGQ9Ik0xMCAzMCBRIDIwIDIwLCAzMCAzMCBUIDUwIDMwIiBzdHJva2U9ImJsdWUiIGZpbGw9InRyYW5zcGFyZW50IiAvPjxwYXRoIGQ9Ik02MCAxMCBRIDcwIDIwLCA4MCAxMCBUIDkwIDEwIiBzdHJva2U9ImJsdWUiIGZpbGw9InRyYW5zcGFyZW50IiAvPjwvc3ZnPg==',
      },
    },
    contractDate: {
      control: 'text',
      description: '계약 날짜',
      defaultValue: '2023-09-23',
    },
    signatureImage: {
      control: 'text',
      description: ' 서명 (Base64 인코딩된 SVG 데이터)',
      defaultValue:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGQ9Ik0yMCAxMCBMNDAgMzAgTTQwIDEwIEwyMCAzMCIgc3Ryb2tlPSJyZWQiIGZpbGw9InRyYW5zcGFyZW50IiAvPjwvc3ZnPg==',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TransferApplicationContract>;

export const Example: Story = {
  args: {
    ...{
      transferorInfo: {
        name: '홍길동',

        phone: '010-1234-5678',
      },
      transfereeInfo: {
        name: '김철수',
        gender: '남',
        birthDate: '1995-05-15',
        startDate: '2023-09-01',
        phone: '010-8765-4321',
      },
      date: '2023-09-23',
      signatureImage:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGQ9Ik0yMCAxMCBMNDAgMzAgTTQwIDEwIEwyMCAzMCIgc3Ryb2tlPSJyZWQiIGZpbGw9InRyYW5zcGFyZW50IiAvPjwvc3ZnPg==',
      transferFee: 50000,
    },
  },
};
