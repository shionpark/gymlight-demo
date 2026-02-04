import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import type { IBranchNameResponse, IUserResponse } from '@/types';

const { persistAtom } = recoilPersist();

export const currentUserState = atom<IUserResponse | null>({
  key: 'currentUserState',
  default: null,
});

export const activeBranchState = atom<IBranchNameResponse | null>({
  key: 'activeBranchState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
