import { useEffect, useState, type ChangeEvent } from 'react';

import type { PaymentType, CardCompanyType } from '@/types';

import { usePdf, useSignaturePad } from '@/hooks';

import { useProductPurchaseGrid } from '@/features/product';

import {
  useRegisterMemberAdditionalOptionPurchase,
  useSaveMemberContract,
} from '@/features/member';

interface IUseAdditionalOptionPurchaseFormParams {
  initName?: string;
  initPhone?: string;
  memberId?: number;
}

export const useAdditionOptionPurchaseForm = (props?: IUseAdditionalOptionPurchaseFormParams) => {
  //## 개인명세자료

  // 이름
  const [name, setName] = useState(() => props?.initName);
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // 전화번호
  const [phone, setPhone] = useState(() => props?.initPhone);

  useEffect(() => {
    if (props?.initName) {
      setName(props?.initName);
    }
    if (props?.initPhone) {
      setPhone(props?.initPhone);
    }
  }, [props]);

  const [period, setPeriod] = useState('');
  const onChangePeriod = (event: ChangeEvent<HTMLInputElement>) => {
    setPeriod(event.target.value);
  };

  const productGridProps = useProductPurchaseGrid({
    isOptional: true,
  });
  const selectedItems = productGridProps.selectedItems;
  const selectedProductNames = selectedItems?.map((item) => item.name).join(', ');

  // 등록 쿼리
  const productIds = selectedItems?.map((item) => item.productId);

  const [showProductSelect, setShowProductSelect] = useState(false);
  const onClickShowProductSelect = () => {
    setShowProductSelect((prev) => !prev);
  };

  const totalAmount = selectedItems.reduce((acc, cur) => acc + +cur.sellingPrice, 0);

  const clothesFee = selectedItems.reduce(
    (acc, cur) => (cur.name.includes('운동복') ? acc + +cur.sellingPrice : acc),
    0,
  );

  const lockerFee = selectedItems.reduce(
    (acc, cur) => (cur.name.includes('락커') ? acc + +cur.sellingPrice : acc),
    0,
  );
  // 카드 결제 - 금액
  const [cardAmount, setCardAmount] = useState<number>(0);
  const onChangeCardAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setCardAmount(+event.target.value);
  };

  // 카드결제 - 승인
  const [cardApprovalNo, setCardApprovalNo] = useState<string>('');
  const onChangeCardApprovalNo = (event: ChangeEvent<HTMLInputElement>) => {
    setCardApprovalNo(event.target.value);
  };

  // 카드결제 - 카드사
  const [cardCompany, setCardProvider] = useState<CardCompanyType>('신한카드');

  const [cardCompanyOther, setCardProviderOther] = useState<string>('');

  const onChangeCardProviderSelect = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (cardCompany == '기타') {
      setCardProviderOther(event.target.value);
    } else {
      setCardProvider(event.target.value as CardCompanyType);
    }
  };

  // 현금 결제
  const [cashAmount, setCashAmount] = useState<number>(0);
  const onChangeCashAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setCashAmount(+event.target.value);
  };

  // 계좌이체 - 금액
  const [bankTransferAmount, setBankTransferAmount] = useState<number>(0);
  const onChangeBankTransferAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setBankTransferAmount(+event.target.value);
  };

  // 계좌이체 - 입금자 명
  const [accountOwnerName, setAccountOwnerName] = useState<string>('');
  const onChangeAccountOwnerName = (event: ChangeEvent<HTMLInputElement>) => {
    setAccountOwnerName(event.target.value);
  };

  // 계좌이체 - 입금자 계좌번호
  const [accountNumber, setAccountNumber] = useState<string>('');
  const onChangeAccountNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(event.target.value);
  };

  // 결제수단 선택
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>('카드');
  const onChangePaymentMethod = (event: ChangeEvent<HTMLSelectElement>) => {
    const paymentMethod = event.target.value as PaymentType;
    if (paymentMethod === '카드') {
      setCashAmount(0);
      setBankTransferAmount(0);
    } else if (paymentMethod === '현금') {
      setCardAmount(0);
      setBankTransferAmount(0);
    } else if (paymentMethod === '계좌이체') {
      setCardAmount(0);
      setCashAmount(0);
    }

    setPaymentMethod(paymentMethod);
  };

  // 할인 금액
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const onChangeDiscountAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscountAmount(+event.target.value);
  };

  // 할인 이유
  const [discountReason, setDiscountReason] = useState<string>('');
  const onChangeDiscountReason = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscountReason(event.target.value);
  };

  const paidAmount = cardAmount + cashAmount + bankTransferAmount;
  const totalPrice = totalAmount - discountAmount;
  const receivableAmount = totalPrice - paidAmount;

  // 서명
  const signaturePadProps = useSignaturePad({ placeholder: '회원 서명' });
  const signatureImage = signaturePadProps.signatureData;

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

  const { mutate } = useRegisterMemberAdditionalOptionPurchase({
    onSuccessAdditional: async () => {
      const pdfBlob = await getBlob();
      if (!pdfBlob) {
        alert('PDF Blob 생성 실패');
        return;
      }

      saveContract({
        memberId: props?.memberId!,
        contractImageUrl: pdfBlob,
        contractType: '옵션 추가 결제',
      });
      await handleGeneratePdfBase64();
      await downloadPdf();
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
      signatureImage: {
        value: signatureImage,
        errorMessage: '고객 서명을 저장해주세요',
        regex: /^.{2,}$/,
      },
    };

    const errors = Object.keys(validator).reduce((acc, cur) => {
      const { value, regex, errorMessage } = validator[cur];
      if (!regex.test(value)) {
        acc.push(errorMessage);
      }
      return acc;
    }, [] as string[]);
    if (errors.length) {
      const alertMessage = '옵션 추가 등록에 필요한 정보가 부족합니다 \n' + errors.join('\n');
      alert(alertMessage);
      return;
    }
    await handleGeneratePdfBase64();

    if (!props?.memberId) {
      return;
    }

    mutate({
      memberId: props?.memberId,
      paymentInfo: {
        totalAmount,
        paidAmount,
        receivableAmount,
        discountAmount,
        discountReason: discountAmount > 0 ? discountReason : undefined,
        cashAmount,
        cardAmount,

        bankTransferAmount,
        paymentMethod,
        cardApprovalNo,

        cardCompany: paymentMethod === '카드' || paymentMethod === '복합' ? cardCompany : undefined,
        cardCompanyOther,
      },
      selectProducts: {
        productIds,
      },
    });
  };

  const dateObj = new Date();
  const year = dateObj.getFullYear().toString();
  const month = (dateObj.getMonth() + 1).toString();
  const date = dateObj.getDate().toString();

  const contractDate = `${year}-${month}-${date}`;

  // 계약서에 제공할 값
  const contractProps = {
    name,

    period,
    phone,

    discountAmount,
    discountReason: discountAmount > 0 ? discountReason : '',
    totalPrice,

    paymentMethod,
    paidAmount,

    productName: selectedProductNames,
    lockerFee,
    clothesFee,

    totalAmount,
    cardAmount,
    cardApprovalNo,
    cardCompany: cardCompany === '기타' ? `기타: ${cardCompanyOther}` : cardCompany,

    cashAmount,
    bankTransferAmount,
    accountNumber,
    accountOwnerName,

    receivableAmount,

    signatureImage,
    contractDate,
  };

  return {
    onSubmit,

    name,
    phone,
    onChangeName,

    period,
    onChangePeriod,
    selectedItems,

    paymentMethod,
    onChangePaymentMethod,

    totalPrice,
    paidAmount,
    cardAmount,
    onChangeCardAmount,
    cashAmount,
    onChangeCashAmount,
    bankTransferAmount,
    onChangeBankTransferAmount,

    cardApprovalNo,
    onChangeCardApprovalNo,
    cardCompany,
    cardCompanyOther,
    onChangeCardProviderSelect,
    receivableAmount,
    accountNumber,
    onChangeAccountNumber,
    accountOwnerName,
    onChangeAccountOwnerName,

    discountAmount,
    onChangeDiscountAmount,
    discountReason,
    onChangeDiscountReason,

    selectedProductNames,
    productGridProps: { ...productGridProps, productData: productGridProps.optionalProductData },

    onClickShowProductSelect,

    signaturePadProps,
    signatureImage,

    contractProps,
    showProductSelect,

    contractWrapperRef,

    totalAmount,

    pdfBase64String,
  };
};

export type IReturnOfUseAdditionOptionPurchaseForm = ReturnType<
  typeof useAdditionOptionPurchaseForm
>;
