import { useEffect, useState } from 'react';

/**
 * 데이터 재요청시마다 스핀이 움직이도록 하는 훅
 * @param isRefetching 데이터 재요청 여부
 * @param refetchSeconds 스핀 동작 시간 (기본값 3초)
 */

export interface IUseSpinAnimationProps {
  isRefetching: boolean;
  refetchSeconds?: number;
}

export const useSpinAnimation = ({ isRefetching, refetchSeconds = 3 }: IUseSpinAnimationProps) => {
  const [shouldSpin, setShouldSpin] = useState(false);

  const refetchSecondsFromMs = refetchSeconds * 1000;

  useEffect(() => {
    if (isRefetching) {
      setShouldSpin(true); // 스핀 시작
      const timer = setTimeout(() => setShouldSpin(false), refetchSecondsFromMs);
      return () => clearTimeout(timer); // 타이머 정리
    }

    // 데이터 재요청이 끝나더라도(isRefetching === false) 스핀 중일 경우 동작 시간이 지난 후 멈춤
    if (!isRefetching && shouldSpin) {
      const timer = setTimeout(() => {
        setShouldSpin(false);
      }, refetchSecondsFromMs);

      return () => clearTimeout(timer);
    }
  }, [isRefetching]);

  return shouldSpin;
};
