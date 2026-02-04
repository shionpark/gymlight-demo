import { useState } from 'react';

export const useLoadMoreData = <T>({
  data,
  startNumber = 0,
  moreIndex = 2,
}: {
  data: T[] | undefined;
  startNumber: number;
  moreIndex: number;
}) => {
  const [startIndex, setStartIndex] = useState(startNumber);

  const handleLoadMore = () => {
    if (startIndex + moreIndex < (data?.length || 0)) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const visibleData = data?.slice(startIndex, startIndex + moreIndex) || [];

  return {
    visibleData,
    startIndex,
    handleLoadMore,
    handlePrev,
  };
};
