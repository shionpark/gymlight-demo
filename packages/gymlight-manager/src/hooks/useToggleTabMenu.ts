import { useState, useCallback, useEffect } from 'react';

/** 유효힌 탭 이름*/
type TabNameType<T extends readonly string[]> = T[number];

/** useToggleTabMenu 훅의 반환 타입 */
interface IUseToggleTabMenuReturnType<T extends readonly string[]> {
  /** 전체 탭의 활성화 상태 객체 */
  tabStates: Record<TabNameType<T>, boolean>;

  /** 탭 활성화 핸들러 생성함수 */
  getSelectTabHandler: (tabName: TabNameType<T>) => () => void;

  /** 현재 활성화된 탭 이름 */
  activeTab: TabNameType<T>;

  /** 활성화 상태 확인 함수 */
  checkIsActiveTab: (tabName: TabNameType<T>) => boolean;

  /** 상태 초기화 */
  reset: () => void;

  /** 탭 메뉴 관리 함수 */
  setActiveTab: React.SetStateAction<TabNameType<any>>;
}

/**
 * 입력된 탭 이름 배열을 기반으로 활성화된 탭을 관리하는 커스텀 훅
 *
 * @param tabNameList - 탭 이름 배열
 * 타입보호를 위해 입력값을 `as const`로 넣어주세요.
 *
 * 예시:
 * ```typescript
 * const tabNames = ['1번', '2번'] as const;
 *  useToggleTabMenu(tabNames)
 * ```
 */
export const useToggleTabMenu = <T extends readonly string[]>(
  tabNameList: T,
): IUseToggleTabMenuReturnType<T> => {
  type AvailableName = TabNameType<T>;

  const initActiveTab = tabNameList[0] as AvailableName;
  const [activeTab, setActiveTab] = useState(initActiveTab);

  const reset = () => {
    setActiveTab(initActiveTab);
  };

  const tabStates = tabNameList.reduce<Record<AvailableName, boolean>>(
    (acc, tabName) => ({ ...acc, [tabName]: tabName === activeTab }),
    {} as Record<AvailableName, boolean>,
  );

  const getSelectTabHandler = useCallback((tabName: AvailableName) => {
    return () => {
      setActiveTab(tabName);
    };
  }, []);

  const checkIsActiveTab = (tabName: AvailableName) => tabName === activeTab;

  return { activeTab, tabStates, reset, getSelectTabHandler, checkIsActiveTab, setActiveTab };
};
