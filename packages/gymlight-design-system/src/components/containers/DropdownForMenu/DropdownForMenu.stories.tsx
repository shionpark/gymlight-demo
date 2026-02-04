import type { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';

import DropdownForMenu from './DropdownForMenu';
import Dropdown from '../Dropdown/Dropdown';

/**  ## DropdownForMenu
 *
 * ### 개요
 *
 * 드롭다운 메뉴 스타일 컴포넌트
 *
 * ### 사용처
 *
 * Dropdown 컴포넌트의 children으로 전달하는 각 메뉴를 감싸서 사용
 *
 *
 * ### 사용팁
 *
 * DropdownForMenu에 전달하는 children 요소에 커스텀 스타일링을 할 수 있습니다.
 *
 */
const meta: Meta<typeof DropdownForMenu> = {
  title: 'components/Containers/Dropdown/DropdownForMenu',
  component: DropdownForMenu,
  argTypes: {
    children: {
      description: '텍스트 및 아이콘 삽입',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownForMenu>;

/** 기본
 *
 */
export const Default: Story = {
  render: () => (
    <>
      <DropdownForMenu>드롭다운 메뉴 1</DropdownForMenu>
      <DropdownForMenu>드롭다운 메뉴 2</DropdownForMenu>
      <DropdownForMenu>드롭다운 메뉴 3</DropdownForMenu>
      <DropdownForMenu>드롭다운 메뉴 4</DropdownForMenu>
      <DropdownForMenu>드롭다운 메뉴 5</DropdownForMenu>
    </>
  ),
};

/** Dropdown과 함께 사용 */
export const WithDropdown: Story = {
  render: () => {
    const [isDropdownMenuOpened, setIsDropdownVisible] = useState(false);
    const onClickDropdown = () => setIsDropdownVisible((prev) => !prev);

    return (
      <Dropdown
        isDropdownMenuOpened={isDropdownMenuOpened}
        button={<button onClick={onClickDropdown}>드롭다운 버튼</button>}
      >
        <DropdownForMenu>드롭다운 메뉴1</DropdownForMenu>
        <DropdownForMenu>드롭다운 메뉴2</DropdownForMenu>
        <DropdownForMenu>드롭다운 메뉴3</DropdownForMenu>
      </Dropdown>
    );
  },
};

/** 커스텀 스타일 */
export const CustomDropdownForMenu: Story = {
  render: () => {
    const [isDropdownMenuOpened, setIsDropdownVisible] = useState(false);
    const onClickDropdown = () => setIsDropdownVisible((prev) => !prev);

    return (
      <Dropdown
        isDropdownMenuOpened={isDropdownMenuOpened}
        button={<button onClick={onClickDropdown}>커스텀 버튼</button>}
      >
        <DropdownForMenu>
          <div>커스텀</div>
          <div>버튼</div>
          <div>드롭다운</div>
        </DropdownForMenu>
        <DropdownForMenu>
          <div style={{ color: 'red' }}>커스텀 버튼 드롭다운</div>
        </DropdownForMenu>
        <DropdownForMenu style={{ background: 'yellow' }}>커스텀 버튼 드롭다운</DropdownForMenu>
      </Dropdown>
    );
  },
};
