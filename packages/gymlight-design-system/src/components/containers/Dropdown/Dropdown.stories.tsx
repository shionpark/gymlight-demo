import type { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';
import Dropdown from './Dropdown';

/**  ## Dropdown
 *
 * ### 개요
 *
 * 버튼과 섹션을 제공하면, 그 둘을 드롭다운으로 결합하여 제공하는 컴포넌트
 *
 * ### 사용처
 *
 * 한페이지를 차지하는 커다란 테이블이 필요한곳
 * - ex) 직원관리, 회원관리, 기타 조회페이지
 *
 *
 * ### 사용팁
 *
 *- 드롭다운 토글용 버튼 컴포넌트를 button에 삽입하고, 내용을 children에 삽입하세요
 *- 버튼을 따로 제공하지 않으면, 미트볼 모양의 default 버튼이 생성됩니다.
 *	    - default 버튼에 삽입하고 싶은 prop은 그냥 DropDown의 prop으로 제공하면 됩니다.
 *
 */
const meta: Meta<typeof Dropdown> = {
  title: 'components/Containers/Dropdown',
  component: Dropdown,
  argTypes: {
    button: {
      description: '드롭다운 토글 버튼 <br> 값을 제공하지 않으면 기본디자인이 생성됩니다.',
    },

    isDropdownMenuOpened: {
      description: '드롭다운 섹션의 오픈 여부',
      control: 'boolean',
    },

    distance: {
      description: '드롭다운 섹션과 토글 버튼간의 간격 (rem)',
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

/** 기본
 *
 */
export const Default: Story = {
  render: () => (
    <Dropdown isDropdownMenuOpened>
      <ul>
        <li>드롭다운 1</li>
        <li>드롭다운 2</li>
        <li>드롭다운 3</li>
        <li>드롭다운 4</li>
      </ul>
    </Dropdown>
  ),
};

/** 외부에서 버튼 삽입 */
export const WithCustomButton: Story = {
  render: () => {
    const [isDropdownMenuOpened, setIsDropdownVisible] = useState(false);
    const onClickDropdown = () => setIsDropdownVisible((prev) => !prev);

    return (
      <Dropdown
        isDropdownMenuOpened={isDropdownMenuOpened}
        button={<button onClick={onClickDropdown}>커스텀 버튼</button>}
      >
        <ul>
          <li> 커스텀 버튼 드롭다운</li>
        </ul>
      </Dropdown>
    );
  },
};

/** 왼쪽으로 확장되는 섹션 */
export const leftExpand: Story = {
  args: { ...Default.args, align: 'left', isDropdownMenuOpened: true },
};

/** 오른쪽으로 확장되는 섹션 */
export const rightSpread: Story = {
  args: { ...Default.args, align: 'right', isDropdownMenuOpened: true },
};
