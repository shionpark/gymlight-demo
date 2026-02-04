import axios, { AxiosInstance } from 'axios';
import { URLS } from '@/constants';

const defaultAxiosConfig = {
  baseURL: 'https://dapi.kakao.com/v2/local',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
  },
};

const client: AxiosInstance = axios.create(defaultAxiosConfig);

export const fetchCoordinate = async (address: string): Promise<{ lat: number; lng: number }> => {
  try {
    const response = await client.get(URLS.API.KAKAO_MAP.SEARCH, {
      params: {
        query: address,
      },
    });

    const documents = response.data.documents;

    if (documents.length > 0) {
      const { y, x } = documents[0]; // y: 위도, x: 경도
      return { lat: parseFloat(y), lng: parseFloat(x) };
    } else {
      throw new Error('No coordinates found for the given address');
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch coordinates');
  }
};
