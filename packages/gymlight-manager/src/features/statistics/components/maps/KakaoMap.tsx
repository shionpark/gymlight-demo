import { useEffect, useRef, useState } from 'react';

import type { MemberWithCoords } from '../../hooks';

import MarkerLayer from './MarkerLayer';
import CustomOverlay from './CustomOverlay';
import Content from './Content';

import { Wrapper } from './KakaoMap.styles';

const KakaoMap = ({ members }: { members: MemberWithCoords[] }) => {
  if (!members.length) return;

  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const clickMemberId = (id: number) => {
    if (selectedMemberId === id) {
      setSelectedMemberId(null);
      setTimeout(() => setSelectedMemberId(id), 0);
    } else {
      setSelectedMemberId(id);
    }
  };

  const selectedMember = members.find((m) => m.member.memberId === selectedMemberId);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const center = new window.kakao.maps.LatLng(37.5665, 126.978);
      const options = { center, level: 3 };
      const mapInstance = new window.kakao.maps.Map(mapRef.current, options);
      setMap(mapInstance);
    }
  }, []);

  return (
    <>
      <Wrapper ref={mapRef} />
      {map && <MarkerLayer map={map} members={members} clickMemberId={clickMemberId} />}
      {map && selectedMember && (
        <CustomOverlay
          map={map}
          coords={selectedMember ? selectedMember.coords : { lat: 37.49887, lng: 127.026581 }}
        >
          <Content member={selectedMember} closeContent={() => setSelectedMemberId(null)} />
        </CustomOverlay>
      )}
    </>
  );
};

export default KakaoMap;
