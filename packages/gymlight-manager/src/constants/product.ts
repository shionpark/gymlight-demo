import { DictionaryType } from 'gymlight-design-system';
import type { MenuItemType } from '@/types';

import {
  BookmarkIcon,
  ClipboardDocumentListIcon,
  IdentificationIcon,
  LockClosedIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

export const PRODUCT_CATEGORY: DictionaryType<MenuItemType> = {
  membership: {
    icon: IdentificationIcon,
    label: '회원권',
  },
  package: {
    icon: BookmarkIcon,
    label: '패키지',
  },
  pt: {
    icon: ClipboardDocumentListIcon,
    label: 'PT',
  },
  clothes: {
    icon: TagIcon,
    label: '운동복',
  },
  locker: {
    icon: LockClosedIcon,
    label: '락커',
  },
};
