import { useRef, useState, useEffect, type RefObject } from 'react';

interface IUseFullScreenReturn {
  /** 
     * Fullscreen으로 전환할 HTML Div 요소의 참조 객체 
     * 
     * 이 `ref`를 Fullscreen을 적용하려는 컴포넌트에 전달해주세요.
  
     */
  fullScreenDivRef: RefObject<HTMLDivElement>;

  /**
   * 현재 Fullscreen 상태 여부
   *
   * `true`: 현재 Fullscreen 상태
   * `false`: Fullscreen 상태가 아님
   */
  isFullScreen: boolean;

  /**
   * Fullscreen 상태를 토글하는 함수
   *
   * Fullscreen 상태가 아닌 경우: Fullscreen으로 전환
   * Fullscreen 상태인 경우: 종료
   */
  toggleFullScreen: () => void;
}
export const useFullScreen = (): IUseFullScreenReturn => {
  const fullScreenDivRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (fullScreenDivRef.current) {
      if (!document.fullscreenElement) {
        fullScreenDivRef.current.requestFullscreen();
      } else {
        document.exitFullscreen().catch((err) => {
          console.error('Failed to exit fullscreen:', err);
        });
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return { fullScreenDivRef, isFullScreen, toggleFullScreen };
};
