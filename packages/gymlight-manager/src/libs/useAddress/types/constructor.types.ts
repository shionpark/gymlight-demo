import type { IAddressData, ICloseData, IResizeData, ISearchData } from './callback.types';
import type { IEmbedOptions, IOpenOptions } from './method.types';

export interface IPostcodeOptions {
  oncomplete?: (data: IAddressData) => void;
  onresize?: (size: IResizeData) => void;
  onclose?: (data: ICloseData) => void;
  onsearch?: (data: ISearchData) => void;
  width?: number | string;
  height?: number | string;
  animation?: boolean;
  focusInput?: boolean;
  autoMappingRoad?: boolean;
  autoMappingJibun?: boolean;
  shorthand?: boolean;
  pleaseReadGuide?: number;
  pleaseReadGuideTimer?: number;
  maxSuggestItems?: number;
  showMoreHName?: boolean;
  hideMapBtn?: boolean;
  hideEngBtn?: boolean;
  alwaysShowEngAddr?: boolean;
  submitMode?: boolean;
  useBannerLink?: boolean;
  theme?: {
    searchBgColor?: string;
    queryTextColor?: string;
  };
}

export interface IPostcodeMethods {
  open(openOptions?: IOpenOptions): void;
  embed(element: HTMLElement, embedOptions?: IEmbedOptions): void;
}

export interface IPostcodeConstructor {
  new (postcodeOptions: IPostcodeOptions): IPostcodeMethods;
}

export interface IDaumPostcode {
  load: (fn: () => void) => void;
  version: string;
  _validParam_: boolean;
}

export interface IDaumGlobal {
  postcode: IDaumPostcode;
  Postcode: IPostcodeConstructor;
}
