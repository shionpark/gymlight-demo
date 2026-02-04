import { useState } from 'react';
import { IAddressData } from '@/libs';

export const useAddressBox = () => {
  const [showAddressBox, setShowAddressBox] = useState<boolean>(false);

  const [address, setAddress] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  /**
   * 주소 상태를 업데이트
   */
  const handleAddressChange = (newAddress: IAddressData) => {
    setAddress(newAddress.address);
  };

  /**
   * 에러 상태를 업데이트
   * */
  const handleErrorChange = (error: any) => {
    setErrorMessage(error);
  };

  /**
   * Address Input의 이벤트에 직접 반응해서 주소상태를 업데이트
   * */
  const handleAddressInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return {
    address,
    errorMessage,
    showAddressBox,
    setShowAddressBox,
    handleAddressChange,
    handleErrorChange,
    handleAddressInputChange,
    setAddress,
  };
};
