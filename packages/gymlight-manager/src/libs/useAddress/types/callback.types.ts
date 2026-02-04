export interface IAddressData {
  zonecode: string;
  address: string;
  addressEnglish: string;
  addressType: 'R' | 'J';
  userSelectedType: 'R' | 'J';
  noSelected: 'Y' | 'N';
  userLanguageType: 'K' | 'E';
  roadAddress: string;
  roadAddressEnglish: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  autoRoadAddress?: string;
  autoRoadAddressEnglish?: string;
  autoJibunAddress?: string;
  autoJibunAddressEnglish?: string;
  buildingCode: string;
  buildingName: string;
  apartment: 'Y' | 'N';
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  roadnameCode: string;
  bcode: string;
  roadname: string;
  roadnameEnglish: string;
  bname: string;
  bnameEnglish: string;
  bname1?: string;
  bname1English?: string;
  bname2: string;
  bname2English: string;
  hname: string;
  query: string;
}

export interface IResizeData {
  width: number;
  height: number;
}

export interface ICloseData {
  state: 'FORCE_CLOSE' | 'COMPLETE_CLOSE';
}

export interface ISearchData {
  q: string;
  count: number;
}
