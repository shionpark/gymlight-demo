import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const currentPageState = atom({
  key: 'currentPageState',
  default: '대시보드',
});

export const sidebarIsFoldState = atom<boolean>({
  key: 'sidebarIsFoldState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export interface IModalState<T = any> {
  isOpen: boolean;
  data?: T;
}

export const modalState = atom<IModalState>({
  key: 'modalState',
  default: {
    isOpen: false,
    data: undefined,
  },
});
