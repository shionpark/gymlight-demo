import { useEffect, useState } from 'react';

export const useKakaoMap = (containerRef: React.RefObject<HTMLDivElement>, isLoaded: boolean) => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (isLoaded && containerRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };
      const kakaoMap = new window.kakao.maps.Map(containerRef.current, options);
      setMap(kakaoMap);
    }
  }, [isLoaded, containerRef]);

  return map;
};
