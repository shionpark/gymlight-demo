import { useRef, useEffect } from 'react';

import { useAddress } from '@/libs';
import type { IAddressData } from '@/libs';

import { AddressAPIContainer } from './AddressSearchBox.styles';

interface IAddressSearchBoxProps {
  takeAddressState?: (address: IAddressData) => void;
  takeErrorState?: (error: any) => void;
}

const AddressSearchBox: React.FC<IAddressSearchBoxProps> = ({
  takeAddressState,
  takeErrorState,
}) => {
  const apiContainerRef = useRef<HTMLDivElement>(null);

  const { isLoading, placeAddressComponentRef, error, address } = useAddress({
    embedOptions: { autoClose: false },
  });

  useEffect(() => {
    if (!isLoading && apiContainerRef.current) {
      placeAddressComponentRef(apiContainerRef.current);
    }
  }, [isLoading, placeAddressComponentRef]);

  useEffect(() => {
    if (takeAddressState && address) {
      takeAddressState(address);
    }
  }, [address, takeAddressState]);

  useEffect(() => {
    if (error && takeErrorState) {
      takeErrorState(error);
    }
  }, [error]);

  return <AddressAPIContainer ref={apiContainerRef} />;
};

export default AddressSearchBox;
