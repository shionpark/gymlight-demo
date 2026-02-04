import { TabButton } from 'gymlight-design-system';

import * as Styled from './TabButtons.styles';

type TabNameType<T extends readonly string[]> = T[number];

interface ITabButtonsBoxProps<T extends readonly string[]> {
  tabMenus: T;
  checkIsActiveTab: (tabName: TabNameType<T>) => boolean;
  getSelectTabHandler: (tabName: TabNameType<T>) => () => void;
  totalElements?: number;
}

const TabButtons = <T extends readonly string[]>({
  tabMenus,
  checkIsActiveTab,
  getSelectTabHandler,
  totalElements,
}: ITabButtonsBoxProps<T>) => {
  return (
    <>
      {tabMenus.map((tabName) => (
        <TabButton
          key={tabName}
          active={checkIsActiveTab(tabName)}
          onClick={getSelectTabHandler(tabName)}
        >
          <Styled.Wrapper>
            <span>{tabName}</span>
            {checkIsActiveTab(tabName) && totalElements && (
              <Styled.TotalElements>{totalElements}</Styled.TotalElements>
            )}
          </Styled.Wrapper>
        </TabButton>
      ))}
    </>
  );
};

export default TabButtons;
