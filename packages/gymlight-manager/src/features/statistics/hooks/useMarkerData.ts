import { useEffect, useState } from 'react';

import type { IMemberResponse } from '@/types';

export interface MemberWithCoords {
  member: IMemberResponse;
  coords: { lat: number; lng: number };
}

export const useMarkerData = (memberList: IMemberResponse[], isLoaded: boolean) => {
  const [markerData, setMarkerData] = useState<MemberWithCoords[]>([]);

  useEffect(() => {
    if (!isLoaded || !window?.kakao?.maps?.services || !memberList.length) {
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    const transformData = async () => {
      const promises = memberList.map((member: IMemberResponse) => {
        return new Promise<MemberWithCoords>((resolve, reject) => {
          geocoder.addressSearch(member.address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const lat = parseFloat(result[0].y);
              const lng = parseFloat(result[0].x);
              resolve({
                member,
                coords: { lat, lng },
              });
            } else {
              reject(`주소 변환 실패: ${member.address}`);
            }
          });
        });
      });

      try {
        const results = await Promise.all(promises);
        setMarkerData(results);
      } catch (err) {
        console.warn(err);
      }
    };

    transformData();
  }, [memberList, isLoaded]);

  return markerData;
};
