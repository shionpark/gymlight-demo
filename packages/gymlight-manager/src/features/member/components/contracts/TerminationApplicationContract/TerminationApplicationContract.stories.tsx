import { Meta, StoryObj } from '@storybook/react';

import TerminationApplicationContract from './TerminationApplicationContract';

/** ##  TerminationApplicationContract
 *
 * ### 개요
 *
 * 짐라이트 해지 신청 계약서
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
const meta: Meta<typeof TerminationApplicationContract> = {
  title: 'features/member/TerminationApplicationContract',
  component: TerminationApplicationContract,
  argTypes: {
    applicationData: {
      phone: {
        control: 'text',
        description: '회원 전화번호',
      },
      productName: {
        control: 'text',
        description: '상품 이름',
      },
      paidAmount: {
        control: 'text',
        description: '등록 금액',
      },
      paymentMethod: {
        control: 'radio',
        options: ['현금', '카드'],
        description: '결제 방법',
      },
      joinDate: {
        control: 'text',
        description: '가입일',
      },
      terminationDate: {
        control: 'text',
        description: '해지일',
      },
      reason: {
        control: 'text',
        description: '해지 사유',
      },
    },
    deductionData: {
      penaltyAmount: {
        control: 'text',
        description: '위약금',
      },
      usagePeriod: {
        control: 'text',
        description: '사용 기간',
      },
      usageAmount: {
        control: 'text',
        description: '사용 금액',
      },
      freePtAmount: {
        control: 'text',
        description: '무료 PT 금액',
      },
      gift: {
        control: 'text',
        description: '사은품',
      },
      totalDeductionAmount: {
        control: 'text',
        description: '총 공제 금액',
      },
      refundAmount: {
        control: 'text',
        description: '환불 금액',
      },
    },
    refundData: {
      method: {
        control: 'radio',
        options: ['카드취소', '계좌이체'],
        description: '환불 수단',
      },
      provider: {
        control: 'text',
        description: '카드사 또는 은행명',
      },
      identifier: {
        control: 'text',
        description: '카드번호 또는 계좌번호',
      },
      ownerName: {
        control: 'text',
        description: '명의자 이름',
      },
    },
    signatureImage: {
      control: 'text',
      description: '회원 서명 (Base64 인코딩된 SVG 데이터)',
    },
    date: {
      control: 'text',
      description: '서명 날짜',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TerminationApplicationContract>;

export const Example: Story = {
  args: {
    ...{
      name: '홍길동',
      phone: '010-1234-5678',
      clothesRentalFee: 50000,
      lockerRentalFee: 30000,
      totalFee: 80000, // 총 금액
      period: '2024-07-01 ~ 2024-12-31',
      lockerNumber: 42,
      lockerPassword: 1234,
      memberSignature:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxwYXRoIGQ9Ik0xMCAxMCBRIDIwIDIwLCAzMCAxMCBUIDUwIDEwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz48cGF0aCBkPSJNNjAgMzAgUSAgNzAgMjAsIDgwIDMwIFQgOTAgMzAiIHN0cm9rZT0iYmxhY2siIGZpbGw9InRyYW5zcGFyZW50IiAvPjwvc3ZnPg==', // 회원 서명 (base64 인코딩된 SVG)
      date: '2023-09-23',
    },
  },
};
