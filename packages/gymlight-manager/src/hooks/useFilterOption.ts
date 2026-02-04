import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { useState } from 'react';

/**
 * @template T - 상태 필터 이름 배열
 * @template D - 날짜범위 필터 이름 배열
 */
interface IUseFilterOptionsParameter<T extends readonly string[], D extends readonly string[]> {
  statusFilterOptions?: T;
  dateFilterOptions?: D;
}

/** 날짜 필터 상태 값 */
interface DateRange {
  from: string;
  to: string;
}

/** 유효한 status 필터 */
type FilterOptionsType<A> = A extends readonly (infer B)[] ? B : string;

/**
 * useFilterOption 훅의 반환 타입
 *
 * @template T - status filter 이름 배열
 * @template D - date filter 이름 배열
 */

interface IUseFilterStatesReturn<T extends readonly string[], D extends readonly string[]> {
  /** 활성화된 상태 필터 배열 */
  activeStatusFilterOptions: FilterOptionsType<T>[];

  /** 상태 필터 토글 핸들러 생성함수 */
  getStatusStateToggleHandler: (status: FilterOptionsType<T>) => MouseEventHandler;

  /** 상태 필터 필수 선택 토글 핸들러 생성함수 */
  getRequiredStatusStateToggleHandler: (status: FilterOptionsType<T>) => MouseEventHandler;

  /** 상태 필터 활성화 체크함수*/
  checkIsActiveStatusFilter: (status: FilterOptionsType<T>) => boolean;

  /** 모든 상태 필터 활성화 함수 */
  activateAllStatusFilters: () => void;

  /**특정 상태 필터 활성화 함수 (초기화용)*/
  activateSomeStatusFilters: (activeOptions: FilterOptionsType<T>[]) => void;

  /** 모든 상태 필터 비활성화 함수*/
  deactivateAllStatusFilters: () => void;

  /** 날짜 필터 상태 객체 (필터 옵션마다 from/to 값 포함) */
  dateFilterStates: Record<FilterOptionsType<D>, DateRange>;

  /** 날짜 범위 변경 핸들러 생성함수 */
  getDateStateChangeHandler: (
    name: FilterOptionsType<D>,
    boundary: 'from' | 'to',
  ) => ChangeEventHandler;

  /** */
  getDateFilterStateAsArray: (dateFilterName: FilterOptionsType<D>) => [string, string];

  /** 날짜 필터의 값 설정*/
  setDateFilterState: ({
    dateFilterName,
    from,
    to,
  }: {
    dateFilterName: FilterOptionsType<D>;
    from: string;
    to: string;
  }) => void;
  /** 모든 필터 상태를 초기화 */
  reset: () => void;
}

/**
 * 데이터 필터링을 위한 상태와 날짜 필터의 state를 관리하는 커스텀 훅
 *
 * @param {IUseFilterOptionsParameter<T, D>} options - {  statusFilterOptions?: string[];  dateFilterOptions?: string[];}
 * @param {string[]} [options.statusFilterOptions] - 상태 필터 이름 목록
 * @param {string[]} [options.dateFilterOptions] - 날짜 필터 이름 목록
 *
 * @returns {IUseFilterStatesReturn<T, D>}필터 상태 및 그에대한 핸들러 함수
 *
 * 사용예시:
 *
 * 타입 보호를 위해, 각 배열은 `as const`로 선언하여 넣어주세요.
 * ```typescript
 * const statusFilterOptions = ['신규', '만료'] as const;
 * const dateFilterOptions = ['가입일', '만료일'] as const
 *  useFilterOption({statusFilterOptions, dateFilterOptions})
 * ```
 */
export const useFilterOption = <T extends readonly string[], D extends readonly string[]>({
  statusFilterOptions = [] as unknown as T,
  dateFilterOptions = [] as unknown as D,
}: IUseFilterOptionsParameter<T, D>): IUseFilterStatesReturn<T, D> => {
  type StatusType = FilterOptionsType<T>;
  type DateType = FilterOptionsType<D>;

  const initStatusFilterState: Record<FilterOptionsType<T>, boolean> = Object.fromEntries(
    statusFilterOptions.map((statusName) => [statusName, true]),
  ) as Record<StatusType, boolean>;

  const [statusFilterStates, setStatusFilterStates] = useState(initStatusFilterState);

  const getStatusStateToggleHandler: (name: StatusType) => () => void = (name: StatusType) => {
    return () => {
      setStatusFilterStates((prev) => ({ ...prev, [name]: !prev[name] }));
    };
  };

  const getRequiredStatusStateToggleHandler: (name: StatusType) => () => void = (
    name: StatusType,
  ) => {
    return () => {
      setStatusFilterStates((prev) => {
        const activeFilters = Object.values(prev).filter(Boolean).length;
        const nextState = !prev[name];

        if (activeFilters === 1 && !nextState) {
          return prev;
        }

        return { ...prev, [name]: nextState };
      });
    };
  };

  const activateAllStatusFilters = () => {
    const statusState = Object.fromEntries(statusFilterOptions.map((key) => [key, true])) as Record<
      StatusType,
      boolean
    >;

    setStatusFilterStates(statusState);
  };

  const activateSomeStatusFilters = (activeOptions: StatusType[]) => {
    const statusState = Object.fromEntries(
      statusFilterOptions.map((key) => [key, activeOptions.includes(key as StatusType)]),
    ) as Record<StatusType, boolean>;

    setStatusFilterStates(statusState);
  };

  const deactivateAllStatusFilters = () => {
    const statusState = Object.fromEntries(
      statusFilterOptions.map((key) => [key, false]),
    ) as Record<StatusType, boolean>;

    setStatusFilterStates(statusState);
  };

  const activeStatusFilterOptions: StatusType[] = Object.entries(statusFilterStates).reduce(
    (acc, [status, isActive]) => {
      if (isActive) {
        acc.push(status as StatusType);
      }
      return acc;
    },
    [] as StatusType[],
  );

  const checkIsActiveStatusFilter = (statusFilterName: StatusType): boolean =>
    activeStatusFilterOptions.includes(statusFilterName);

  const initDateFilterState: Record<DateType, DateRange> = Object.fromEntries(
    dateFilterOptions.map((dateFilterName) => [dateFilterName, { from: '', to: '' }]),
  ) as Record<DateType, DateRange>;

  const [dateFilterStates, setDateFilterStates] = useState(initDateFilterState);

  const getDateStateChangeHandler =
    (name: DateType, boundary: 'from' | 'to'): ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      setDateFilterStates((prev) => ({
        ...prev,
        [name]: { ...prev[name], [boundary]: event.target.value },
      }));
    };

  const getDateFilterStateAsArray = (dateFilterName: DateType) => {
    const { from, to } = dateFilterStates[dateFilterName];
    return [from, to] as [string, string];
  };

  const setDateFilterState = ({
    dateFilterName,
    from,
    to,
  }: {
    dateFilterName: DateType;
    from: string;
    to: string;
  }) => {
    setDateFilterStates((prev) => ({ ...prev, [dateFilterName]: { from, to } }));
  };

  const reset = () => {
    setStatusFilterStates(initStatusFilterState);
    setDateFilterStates(initDateFilterState);
  };

  return {
    activeStatusFilterOptions,
    getStatusStateToggleHandler,
    getRequiredStatusStateToggleHandler,
    checkIsActiveStatusFilter,

    activateAllStatusFilters,
    activateSomeStatusFilters,
    deactivateAllStatusFilters,

    dateFilterStates,
    getDateStateChangeHandler,
    getDateFilterStateAsArray,
    setDateFilterState,

    reset,
  };
};
