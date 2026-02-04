import { ReactNode, useEffect, useMemo, useRef } from 'react';
import ReactDom from 'react-dom';

interface CustomOverlayProps {
  map: any;
  coords: { lat: number; lng: number };
  children: ReactNode;
}

const CustomOverlay = ({ map, coords, children }: CustomOverlayProps) => {
  const container = useRef(document.createElement('div'));
  const position = new window.kakao.maps.LatLng(coords.lat, coords.lng);

  const overlay = useMemo(() => {
    const kakaoOverlay = new window.kakao.maps.CustomOverlay({
      content: container.current,
      position,
      xAnchor: 0.5,
      yAnchor: 1.4,
      zIndex: 3,
    });
    return kakaoOverlay;
  }, []);

  useEffect(() => {
    overlay.setMap(map);

    return () => {
      overlay.setMap(null);
    };
  }, [map, overlay]);

  useEffect(() => {
    if (overlay) {
      overlay.setPosition(position);
    }
  }, [position, overlay]);

  return ReactDom.createPortal(children, container.current);
};

export default CustomOverlay;
