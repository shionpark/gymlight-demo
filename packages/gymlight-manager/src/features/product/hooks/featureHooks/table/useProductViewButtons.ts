import { ForwardRefExoticComponent, SVGProps } from 'react';

import { useToggleTabMenu } from '@/hooks';

import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

export const useProductViewButtons = () => {
  const viewMenus = ['table', 'grid'] as const;
  const {
    activeTab: activeView,
    getSelectTabHandler: getSelectViewHandler,
    checkIsActiveTab: checkIsActiveView,
  } = useToggleTabMenu(viewMenus);

  const viewIcons: Record<string, ForwardRefExoticComponent<SVGProps<SVGSVGElement>>> = {
    table: ListBulletIcon,
    grid: Squares2X2Icon,
  };

  const setPageSizeByView = (pageSize: number): undefined | number => {
    if (!pageSize) return undefined;
    return activeView === 'table' ? pageSize : undefined;
  };

  return {
    activeView,
    getSelectViewHandler,
    checkIsActiveView,

    viewMenus,
    viewIcons,

    setPageSizeByView,
  };
};
