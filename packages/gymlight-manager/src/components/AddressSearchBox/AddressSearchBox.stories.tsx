import type { Meta, StoryObj } from '@storybook/react';

import AddressSearchBox from './AddressSearchBox';

import { useState } from 'react';
import type { IAddressData } from '@/libs';

/** ## AddressSearchBox
 *
 * ### 개요
 *
 * 다음 카카오 주소 api검색 기능을 제공하는 컴포넌트
 *
 * ### 사용처
 *
 * 주소검색기능이 필요한 모든곳
 * - ex) 지점추가, 회원등록 ..
 *
 * ### 사용팁
 *
 * 주소 정보를 저장하기 위한 state의 setState 함수를 takeAddressState prop으로 제공해주세요.
 * 이 컴포넌트 내부에서 선택한 주소에 대한  정보를 담은 객체가 해당 state에 저장될 것입니다.
 *
 *
 *
 */
const meta: Meta<typeof AddressSearchBox> = {
  title: 'features/common/AddressSearchBox',
  component: AddressSearchBox,
  argTypes: {
    takeAddressState: { description: '선택된 주소를 저장할 setState 함수' },
    takeErrorState: { description: '발생한 에러를 저장할 setState함수 ' },
  },
};

export default meta;

type Story = StoryObj<typeof AddressSearchBox>;

/** 기본 디자인 */
export const Default: Story = {};

/** State 연동
 *
 * 클릭시 응답받은 객체가 console.log로 출력
 */
export const WithState: Story = {
  render: () => {
    const [addressState, setAddressState] = useState<IAddressData>();
    const clickAddress = (addressData: IAddressData) => {
      setAddressState(addressData);
      console.log(addressState);
    };
    return <AddressSearchBox takeAddressState={clickAddress} />;
  },
};
