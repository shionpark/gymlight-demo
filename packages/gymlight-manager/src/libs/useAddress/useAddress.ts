import { useCallback, useEffect, useState } from 'react';

import { theme } from '@/styles';

import type {
  IEmbedOptions,
  IOpenOptions,
  IAddressData,
  IPostcodeConstructor,
  IPostcodeOptions,
  IDaumGlobal,
} from './types';

declare global {
  interface Window {
    daum?: IDaumGlobal;
  }
}

interface IUsePostcode {
  initOptions?: IPostcodeOptions;
  openOptions?: IOpenOptions;
  embedOptions?: IEmbedOptions;
}

type ThemeObjectType = {
  bgColor: string;
  searchBgColor: string;
  contentBgColor: string;
  pageBgColor: string;
  textColor: string;
  queryTextColor: string;
  postcodeTextColor: string;
  emphTextColor: string;
  outlineColor: string;
};

interface IUseAddressReturn {
  isLoading: boolean;
  openPopup: () => void;
  placeAddressComponentRef: (element: HTMLElement) => void;
  error: string;
  address: IAddressData | undefined;
}

export const useAddress = ({
  initOptions,

  openOptions,

  embedOptions,
}: IUsePostcode = {}): IUseAddressReturn => {
  const [isDaumApiReady, setIsDaumApiReady] = useState(false);

  const [error, setError] = useState('');

  const [address, setAddress] = useState<IAddressData>();

  const themeObject: ThemeObjectType = {
    bgColor: theme.background.dark,
    searchBgColor: theme.color.white,
    contentBgColor: theme.background.light,
    pageBgColor: theme.background.light,
    textColor: theme.font.default,
    queryTextColor: theme.font.dark,
    postcodeTextColor: theme.color.primary,
    emphTextColor: theme.color.primary,
    outlineColor: theme.background.dark,
  };

  useEffect(() => {
    const scriptId = 'daum_postcode_script';

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

    script.onload = () => {
      if (window.daum?.Postcode) {
        setIsDaumApiReady(true);
      } else {
        setError(
          'api 로드는 성공했으나 daum 객체가 없습니다. 업데이트를 daum-kakao api에서 확인하세요.',
        );
      }
    };

    script.onerror = (error) => {
      setError('daum 주소 api 로드중 에러가 발생했습니다.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const oncompleteOption: (data: IAddressData) => void = initOptions?.oncomplete
    ? (data) => {
        setAddress(data);

        initOptions.oncomplete!(data);
      }
    : (data) => setAddress(data);

  const openPopup: () => void = useCallback(() => {
    if (!isDaumApiReady || !window.daum?.Postcode) {
      return;
    }

    try {
      new window.daum!.Postcode({
        ...initOptions,

        oncomplete: oncompleteOption,
      }).open(openOptions || undefined);
    } catch (error) {
      setError(`${JSON.stringify(error)}`);
    }
  }, [isDaumApiReady, error]);

  const placeAddressComponentRef: (element: HTMLElement) => void = useCallback(
    (element: HTMLElement) => {
      if (!isDaumApiReady || !window.daum?.Postcode) {
        return;
      }

      try {
        new window.daum!.Postcode({
          ...initOptions,
          oncomplete: oncompleteOption,
          theme: themeObject,
        }).embed(element, embedOptions);
      } catch (error) {
        setError(`${JSON.stringify(error)}`);
      }
    },

    [isDaumApiReady, error],
  );

  return { isLoading: !isDaumApiReady, openPopup, placeAddressComponentRef, error, address };
};
