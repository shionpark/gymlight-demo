import { useEffect, useState } from 'react';

/** SDK 로딩
 * document.head에 <script>를 추가
 */
const KAKAO_SCRIPT_ID = 'kakao_map_script';
const KAKAO_MAP_BASE_URL = '//dapi.kakao.com/v2/maps/sdk.js';

export const useKakaoLoader = (onLoadCallback?: () => void) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptExists = document.getElementById(KAKAO_SCRIPT_ID);

    // 1. 이미 스크립트 존재하는 경우
    if (scriptExists) {
      setIsLoaded(true);
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          onLoadCallback?.();
        });
      }
      return;
    }

    // 2. 스크립트를 새로 삽입하는 경우
    const params = new URLSearchParams({
      appkey: process.env.REACT_APP_KAKAO_API_KEY || '',
      autoload: 'false',
      libraries: 'services',
    });

    const script = document.createElement('script');
    script.id = KAKAO_SCRIPT_ID;
    script.src = `${KAKAO_MAP_BASE_URL}?${params.toString()}`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        setIsLoaded(true);
        onLoadCallback?.();
      });
    };

    script.onerror = (error) => {
      console.error('Kakao Map SDK 로딩 실패:', error);
    };

    document.head.appendChild(script);
  }, [onLoadCallback]);

  return isLoaded;
};
