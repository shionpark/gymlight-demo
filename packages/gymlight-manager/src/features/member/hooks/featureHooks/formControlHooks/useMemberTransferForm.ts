import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import {
  useSaveMemberContract,
  useRegisterMemberTransfer,
  useMemberRefundablePayments,
  useMemberCategories,
} from '@/features/member';

import { useCheckboxSelection, useDateSelectState, usePdf, useSignaturePad } from '@/hooks';
import { GenderType, IRefundableProductResponse } from '@/types';

interface IUseMemberTransferFormParams {
  initName?: string;
  initPhone?: string;
  memberId: number;
}

export const useMemberTransferForm = (props: IUseMemberTransferFormParams) => {
  const [name, setName] = useState(props?.initName || '');
  const [phone, setPhone] = useState(props?.initPhone || '');

  useEffect(() => {
    if (props?.initName) {
      setName(props?.initName);
    }
    if (props?.initPhone) {
      setPhone(props?.initPhone);
    }
  }, [props]);

  const [transfereeName, setTransfereeName] = useState('');
  const onChangeTransfereeName = (event: ChangeEvent<HTMLInputElement>) => {
    setTransfereeName(event.target.value);
  };

  const [transfereePhone, setTransfereePhone] = useState('');

  const dateObj = new Date();
  const initYear = dateObj.getFullYear().toString();
  const initMonth = (dateObj.getMonth() + 1).toString();
  const initDay = dateObj.getDate().toString();

  const contractDate = `${initYear}-${initMonth}-${initDay}`;

  // 양수인 생일
  const { dateString: transferDate, selectStateControlProps: transferDateSelectStateControlProps } =
    useDateSelectState({
      initData: { initYear, initMonth, initDay },
    });

  const [transfereeGender, setTransfereeGender] = useState<GenderType>('남');
  const onChangeTransfereeGenderSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setTransfereeGender(event.target.value as GenderType);
  };

  const {
    dateString: transfereeStartDate,
    selectStateControlProps: transfereeStartDateSelectStateControlProps,
  } = useDateSelectState({ initData: { initYear, initMonth, initDay } });

  const {
    dateString: transfereeBirthDate,
    selectStateControlProps: transfereeBirthDateSelectStateControlProps,
  } = useDateSelectState({
    initData: { initYear, initMonth, initDay },
  });
  //양도 가능 상품
  const { data: payments } = useMemberRefundablePayments(props.memberId);

  const transferablePayments = useMemo(
    () => payments?.filter(({ isTransferable }) => isTransferable) || [],
    [payments],
  );

  const { selectedItems, selectOrDeselectItem, resetSelection } =
    useCheckboxSelection<IRefundableProductResponse>(transferablePayments, 'purchasedProductId');

  const purchasedProductIds = useMemo(
    () => selectedItems.map(({ purchasedProductId }) => purchasedProductId),
    [selectedItems],
  );

  const handleTransferablePaymentClick = (dataId: number) => {
    resetSelection();
    selectOrDeselectItem(dataId);
  };

  const signaturePadProps = useSignaturePad({ placeholder: '양도인 서명' });
  const signatureImage = signaturePadProps.signatureData;

  const {
    ref: contractWrapperRef,
    downloadPdf,
    getBlob,
    handleGeneratePdfBase64,
  } = usePdf({
    paperSize: [310, 200],
    orientation: 'landscape',
  });

  const { data: memberCategories } = useMemberCategories();
  const [transfereeCategoryId, setTransfereeCategoryId] = useState<number>();
  const onChangeTransfereeCategoryId = (event: ChangeEvent<HTMLSelectElement>) => {
    setTransfereeCategoryId(+event.target.value);
  };

  const [transferFee, setTransferFee] = useState(50000);
  const onChangeTransferFee = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferFee(+event.target.value);
  };

  const { mutate: saveContract } = useSaveMemberContract();

  const { mutate } = useRegisterMemberTransfer({
    onSuccessAdditional: async () => {
      const pdfBlob = await getBlob();
      if (!pdfBlob) {
        alert('PDF Blob 생성 실패');
        return;
      }

      saveContract({
        memberId: +props?.memberId,
        contractImageUrl: pdfBlob,
        contractType: '환불',
      });
      await handleGeneratePdfBase64();
      await downloadPdf();
    },
  });

  const onSubmit = async () => {
    downloadPdf();
    const validator: {
      [key: string]: { value: any; errorMessage: string; regex: RegExp };
    } = {
      name: { value: name, errorMessage: '이름을 입력해주세요.', regex: /^.{2,}$/ },
      phone: {
        value: phone,
        errorMessage: '전화번호 11자리를 입력해주세요.',
        regex: /^010-\d{4}-\d{4}$/,
      },
      transfereeName: {
        value: transfereeName,
        errorMessage: '양수인 이름을 입력해주세요.',
        regex: /^.{2,}$/,
      },
      transfereePhone: {
        value: transfereePhone,
        errorMessage: '양수인 전화번호 11자리를 입력해주세요.',
        regex: /^.{2,}$/,
      },
      transfereeCategoryId: {
        value: transfereeCategoryId,
        errorMessage: '양수인 회원 카테고리를 선택해주세요 ',
        regex: /^.{1,}$/,
      },
      signatureImage: {
        value: signatureImage,
        errorMessage: '양도인 서명을 작성 후, 저장 해주세요.',
        regex: /^.{2,}$/,
      },
    };
    if (!props.memberId) {
      return;
    }
    const errors = Object.keys(validator).reduce((acc, cur) => {
      const { value, regex, errorMessage } = validator[cur];
      if (!regex.test(value)) {
        acc.push(errorMessage);
      }
      return acc;
    }, [] as string[]);
    if (errors.length) {
      const alertMessage = '양도 신청에 필요한 정보가 부족합니다. \n\n' + errors.join('\n');
      alert(alertMessage);
      return;
    }

    mutate({
      memberId: +props.memberId,
      transferInfo: {
        transferFee,
        transfereeStartDate,
        transfereeCategoryId: transfereeCategoryId!,
        purchasedProductId: +purchasedProductIds[0],
        transfereePhone,
        transfereeGender,
        transfereeName,
        transfereeBirthDate,
        transferDate,
      },
    });
  };

  const contractProps = {
    transferorInfo: {
      name,
      phone,
    },
    transfereeInfo: {
      name: transfereeName,
      gender: transfereeGender,
      birthDate: transfereeBirthDate,
      startDate: transfereeStartDate,
      phone: transfereePhone,
    },
    transferFee,
    contractDate,
    signatureImage,
  };

  return {
    transferablePayments,
    handleTransferablePaymentClick,

    onSubmit,
    memberCategories,
    transfereeCategoryId,
    onChangeTransfereeCategoryId,
    name,
    phone,

    transferFee,
    onChangeTransferFee,

    transfereeGender,
    onChangeTransfereeGenderSelect,
    transfereeName,
    onChangeTransfereeName,
    transfereePhone,
    setTransfereePhone,
    purchasedProductIds,
    transfereeStartDateSelectStateControlProps,
    transferDateSelectStateControlProps,
    transfereeBirthDateSelectStateControlProps,

    signaturePadProps,

    contractProps,
    contractWrapperRef,
  };
};

export type IReturnOfUseMemberTransferForm = ReturnType<typeof useMemberTransferForm>;
