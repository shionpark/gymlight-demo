import { useEffect } from 'react';

import { MemberWithCoords } from '../../hooks';

const MARKER_IMG_URL = '/images/markerStar.png';

const MarkerLayer = ({
  map,
  members,
  clickMemberId,
}: {
  map: any;
  members: MemberWithCoords[];
  clickMemberId: (id: number) => void;
}) => {
  useEffect(() => {
    const bounds = new window.kakao.maps.LatLngBounds();

    const markers = members.map(({ member, coords }) => {
      const position = new window.kakao.maps.LatLng(coords.lat, coords.lng);
      const markerImage = new window.kakao.maps.MarkerImage(
        MARKER_IMG_URL,
        new window.kakao.maps.Size(24, 35),
      );

      const marker = new window.kakao.maps.Marker({
        map,
        position,
        image: markerImage,
      });

      window.kakao.maps.event.addListener(marker, 'click', () => {
        map.panTo(position);
        clickMemberId(member.memberId);
      });

      bounds.extend(position);

      return marker;
    });

    map.setBounds(bounds);

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [map, members]);

  return null;
};

export default MarkerLayer;
