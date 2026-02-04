import { useState, useEffect, useRef } from 'react';

interface IUseTimerArgs {
  seconds: number;
}

type UseTimerReturnType = {
  /** 현재 남은 시간 (초) */
  countingSeconds: number;

  /** 타이머 시작 */
  startTimer: () => void;

  /** 타이머 정지 및 초기화 */
  stopTimer: () => void;

  /** 현재 타이머의 남은 시간 (분) */
  minuteValue: number;

  /** 현재 타이머의 남은 시간 (초) */
  secondValue: number;

  /** 현재 타이머의 남은 시간을 MM:SS 형식의 문자열로 변환한 값 */
  timeString: string;

  /** 타이머가 실행 중인지 여부 */
  isCountingNow: boolean;
};

export const useTimer = ({ seconds }: IUseTimerArgs): UseTimerReturnType => {
  const [countingSeconds, setCountingSeconds] = useState(0);
  const [isCountingNow, setIsCountingNow] = useState(false);

  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
    setIsCountingNow(true);

    setCountingSeconds(seconds);
    timerIdRef.current = setInterval(() => {
      setCountingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerIdRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;

      setIsCountingNow(false);
    }
    setCountingSeconds(0);
  };

  useEffect(() => () => stopTimer(), []);

  const minuteValue = Math.floor(countingSeconds / 60);
  const secondValue = countingSeconds % 60;

  const makePad = (num: number) => num.toString().padStart(2, '0');

  const timeString = `${makePad(minuteValue)}:${makePad(secondValue)}`;

  return {
    countingSeconds,
    startTimer,
    stopTimer,
    minuteValue,
    secondValue,

    timeString,
    isCountingNow,
  };
};
