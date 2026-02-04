import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

import { getNowDateAndTime } from '@/utils';

import { useCheckboxSelection, usePdf, useSignaturePad } from '@/hooks';

import {
  useRefundMemberPayment,
  useMemberRefundablePayments,
  useSaveMemberContract,
} from '@/features/member';

import { IRefundableProductResponse } from '@/types';

interface IUseMemberPaymentRefundParams {
  initName?: string;
  initPhone?: string;
  memberId: number;
}

//TODO: 팀장에게 환불가능 상품정보에, 좀더 디테일하고 구체적인 정보 (상품이름, 원래 구입가격 등등을 넣어달라고하기)

export const useMemberPaymentRefundForm = (props: IUseMemberPaymentRefundParams) => {
  // 사용자 기본정보
  const [name, setName] = useState(() => props?.initName || '');
  const [phone, setPhone] = useState(() => props?.initPhone || '');

  useEffect(() => {
    if (props?.initName) {
      setName(props?.initName);
    }
    if (props?.initPhone) {
      setPhone(props?.initPhone);
    }
  }, [props]);

  // 환불 가능 상품 정보
  const { data: payments } = useMemberRefundablePayments(props.memberId);
  const refundablePayments = payments?.filter(({ isRefundable }) => isRefundable);
  const {
    selectedItems,

    selectOrDeselectItem,
    resetSelection,
  } = useCheckboxSelection<IRefundableProductResponse>(
    refundablePayments ? refundablePayments : [],
    'purchasedProductId',
  );
  const purchasedProductIds = selectedItems.map(({ purchasedProductId }) => purchasedProductId);

  const handleRefundablePaymentClick = (dataId: number) => {
    selectOrDeselectItem(dataId);
  };

  // 환불 정보
  const [refundAmount, setRefundAmount] = useState(0);
  const onChangeRefundAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setRefundAmount(+event.target.value);
  };

  const [refundReason, setRefundReason] = useState('');
  const onChangeRefundReason = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setRefundReason(event.target.value);
  };

  // 서명
  const signaturePadProps = useSignaturePad({ placeholder: '회원 서명' });
  const signatureImage = signaturePadProps.signatureData;

  const refundDate = getNowDateAndTime();

  const {
    ref: contractWrapperRef,
    downloadPdf,
    handleGeneratePdfBase64,
    pdfBase64String,
    getBlob,
  } = usePdf({
    paperSize: [310, 200],
    orientation: 'landscape',
  });

  const { mutate: saveContract } = useSaveMemberContract();
  const { mutate } = useRefundMemberPayment({
    onSuccessAdditional: async () => {
      const pdfBlob = await getBlob();
      if (!pdfBlob) {
        alert('PDF Blob 생성 실패');
        return;
      }

      saveContract({
        memberId: props?.memberId!,
        contractImageUrl: pdfBlob,
        contractType: '환불',
      });
      await handleGeneratePdfBase64();
      await downloadPdf();
      resetSelection();
    },
  });

  const onSubmit = async () => {
    const validator: {
      [key: string]: { value: any; errorMessage: string; regex: RegExp };
    } = {
      name: { value: name, errorMessage: '이름을 입력해주세요.', regex: /^.{2,}$/ },
      phone: {
        value: phone,
        errorMessage: '전화번호 11자리를 입력해주세요.',
        regex: /^010-\d{4}-\d{4}$/,
      },
      refundAmount: {
        value: refundAmount,
        errorMessage: '환불 금액을 입력해주세요.',
        regex: /[0-9]+/,
      },
      refundReason: {
        value: refundReason,
        errorMessage: '환불 이유를 입력해주세요.',
        regex: /^.{2,}$/,
      },
      signatureImage: {
        value: signatureImage,
        errorMessage: '고객 서명을 저장해주세요.',
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
      const alertMessage = '해지 신청에 필요한 정보가 부족합니다. \n\n' + errors.join('\n');
      alert(alertMessage);
      return;
    }

    mutate({
      memberId: props.memberId,
      refundInfo: {
        refundDate,
        refundAmount,
        refundReason,
        purchasedProductIds,
      },
    });
  };

  const contractProps = {
    applicationData: {
      name,
      phone,
      refundDate,
      refundReason,
    },
    deductionData: {
      refundAmount,
    },
    signatureImage,
    date: refundDate,
  };

  return {
    name,
    phone,
    refundDate,
    refundAmount,
    onChangeRefundAmount,
    onSubmit,
    refundReason,
    onChangeRefundReason,
    signaturePadProps,
    signatureImage,

    contractProps,

    contractWrapperRef,

    pdfBase64String,

    refundablePayments,
    handleRefundablePaymentClick,
  };
};
