import { Meta, StoryObj } from '@storybook/react';

import MembershipAgreementContract from './MembershipAgreementContract';
import { boolean } from 'ts-pattern/dist/patterns';
import { VisitPaths } from '@/constants';

/** ##  MembershipAgreementContract
 *
 * ### 개요
 *
 * 짐라이트 회원가입 계약서
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
const meta: Meta<typeof MembershipAgreementContract> = {
  title: 'features/member/components/MembershipAgreementContract',
  component: MembershipAgreementContract,
  argTypes: {
    username: {
      control: 'text',
      description: '회원의 이름',
    },
    gender: {
      control: 'radio',
      options: ['남성', '여성'],
      description: '회원의 성별',
    },
    address: {
      control: 'text',
      description: '회원의 주소',
    },
    birth: {
      control: 'date',
      description: '회원의 생년월일',
    },
    phone: {
      control: 'text',
      description: '회원의 전화번호',
    },
    visitPath: {
      control: 'select',
      options: VisitPaths,
      description: '회원이 헬스장을 방문한 경로',
    },
    joinReason: {
      control: 'select',
      options: [
        '가까운 동선',
        'OT 프로그램',
        '친절한 직원',
        '기구 & 시설',
        '전반적인 관리',
        '선택 안 함',
      ],
      description: '회원이 헬스장을 선택한 이유',
    },
    enrollCategory: {
      control: 'select',
      options: ['워크인', '소개', '기존신규', '당월신규', '만료', '만료예정', '미리재등록'],
      description: '회원의 등록 카테고리',
    },
    productName: {
      control: 'text',
      description: '등록 상품명',
    },
    notes: {
      control: 'text',
      description: '기타 중요 사항',
    },
    option: {
      control: 'object',
      description: '옵션: OT 여부 및 Miracle Ten Day 여부',
      details: {
        ot: boolean,
        miracleTenDays: boolean,
      },
    },
    membershipFee: {
      control: 'number',
      description: '회원권 요금',
    },
    lockerFee: {
      control: 'number',
      description: '락커 요금',
    },
    clothesFee: {
      control: 'number',
      description: '옷 요금',
    },
    accountOwnerName: {
      control: 'text',
      description: '계좌 이름',
    },
    totalAmount: {
      control: 'number',
      description: '총 요금',
    },
    cardAmount: {
      control: 'number',
      description: '카드로 결제한 금액',
    },
    cashAmount: {
      control: 'number',
      description: '현금으로 결제한 금액',
    },
    bankTransferAmount: {
      control: 'number',
      description: '계좌이체로 결제한 금액',
    },
    receivableAmount: {
      control: 'number',
      description: '미수금',
    },
    signatureImage: {
      control: 'text',
      description: '회원의 서명',
    },
    contractDate: {
      control: 'text',
      description: '계약서 작성일',
    },
    cardCompany: {
      control: 'text',
      description: '결제 카드사',
    },
  },
};
export default meta;

type Story = StoryObj<typeof MembershipAgreementContract>;

export const Example: Story = {
  args: {
    ...{
      username: '홍길동',
      gender: '남',
      birth: '1990-01-01',
      phone: '010-1234-5678',
      address: '서울특별시 강남구 역삼동 123-45',
      visitRoute: '인터넷검색',
      joinReason: '거리',
      enrollCategory: '신규',
      productName: '1개월 회원권',
      significant: '리더님 지인',
      option: {
        ot: true,
        miracleTenDay: false,
      },
      FCEnrollFee: 50000,
      membershipFee: 100000,
      lockerFee: 10000,
      clothesFee: 5000,
      accountName: '홍길동',

      totalAmount: 165000,
      cardAmount: 150000,
      cashAmount: 10000,
      bankTranferAmount: 5000,
      receivableAmount: 0,

      contractDate: '2024-09-31',

      signatureImage:
        'data:image/png;base64,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wgkQIOB3Eq0BAgQIEHgq4PTQSpgKCInWAwECBDoWcJLYcfOVToAAgYmA70C0HIREa4AAAQIEnggIiRYCAQIECAiI1sBcwEmiNUGAAIGOBYTEjpuvdAIECJwEhERLQUi0BggQIEDgmYCQaDEQIECgb4HxdxHtB32vg2n1fmhgLRAgQKBzAS8KOl8AyidAoHsBIbH7JfAcwBASvT6wLggQINCxgE2g4+YrnQABAicBJ0eWwihgLVgLBAgQIOAnhdYAAQIECDwRGMPB8N9+gNjfovAVKP31XMUECBA4K+CFgMVBgAABAvNTpKmIfSL3+piGQz8gyN1r1REgQOBiAZv/xVQuJECAQFcCwkP+djs9zt9jFRIgQOAqASHxKjY3ESBAoCsBYSJfu/3uYb6eqogAAQKrCQiJq1F6EAECBNILTMPiUOzw95v0VecocDgZHv5M932vAXL0VhUECBBYXcAGsTqpBxIgQCC9wDwszgu2t9SxBOZvGR5nJdzX0R+zIECAQLUCNvJqW2NiBAgQaErgvuAomOzTznkwHPvixHcff6MQIEAghYCQmKKNiiBAgECVAudOsqaTFR7LW3efK9NyU3cQIECAwERASLQcCBAgQGBvgftOHYf52J+eduW23yUc+zV3dFq490o2HgECBJIK2ISTNlZZBAgQaEzgvtOxc+W0FpTG0DfWc+k+7G2jjS1o0yVAgEDLApduTi3XaO4ECBAg0K7ANFRl37NaC7ztriozJ0CAAIE7BbJvuNpPgAABAgQIECBAgAABAgUCQmIBlksJECBAgAABAgQIECCQXUBIzN5h9REgQIAAAQIECBAgQKBAQEgswHIpAQIECBAgQIAAAQIEsgsIidk7rD4CBAgQIECAAAECBAgUCAiJBVguJUCAAAECBAgQIECAQHYBITF7h9VHgAABAgQIECBAgACBAgEhsQDLpQQIECBAgAABAgQIEMguICRm77D6CBAgQIAAAQIECBAgUCAgJBZguZQAAQIECBAgQIAAAQLZBYTE7B1WHwECBAgQIECAAAECBAoEhMQCLJcSIECAAAECBAgQIEAgu4CQmL3D6iNAgAABAgQIECBAgECBgJBYgOVSAgQIECBAgAABAgQIZBcQErN3WH0ECBAgQIAAAQIECBAoEBASC7BcSoAAAQIECBAgQIAAgewCQmL2DquPAAECBAgQIECAAAECBQJCYgGWSwkQIECAAAECBAgQIJBdQEjM3mH1ESBAgAABAgQIECBAoEBASCzAcikBAgQIECBAgAABAgSyCwiJ2TusPgIECBAgQIAAAQIECBQICIkFWC4lQIAAAQIECBAgQIBAdgEhMXuH1UeAAAECBAgQIECAAIECASGxAMulBAgQIECAAAECBAgQyC4gJGbvsPoIECBAgAABAgQIECBQICAkFmC5lAABAgQIECBAgAABAtkFhMTsHVYfAQIECBAgQIAAAQIECgSExAIslxIgQIAAAQIECBAgQCC7gJCYvcPqI0CAAAECBAgQIECAQIGAkFiA5VICBAgQIECAAAECBAhkF/gXv/vKY/dMXdEAAAAASUVORK5CYII=',
    },
  },
};
