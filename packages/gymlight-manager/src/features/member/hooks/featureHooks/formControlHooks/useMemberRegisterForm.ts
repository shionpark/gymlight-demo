import { useEffect, useState, type ChangeEvent } from 'react';

import { MEMBER_CATEGORIES_CODE, ServiceOptions } from '@/constants';
import { formatYYYYMMDD, splitYYYYMMDD } from '@/utils';

import {
  useAddressBox,
  useDateSelectState,
  useFilterOption,
  usePdf,
  useSignaturePad,
} from '@/hooks';

import { useMe } from '@/features/auth';
import {
  useRegisterNewMember,
  useReRegisterMember,
  useSaveMemberContract,
  useMemberCategories,
} from '@/features/member';

import { useProductPurchaseGrid } from '@/features/product';
import { useBranchNameList } from '@/features/branch';

import type {
  GenderType,
  VisitPathType,
  JoinReasonType,
  JoinCategoryType,
  PaymentType,
  CardCompanyType,
} from '@/types';

interface IUseMemberRegisterFormParams {
  isReRegister?: boolean;
  initData?: {
    initName?: string;
    initGender?: GenderType;
    initBirthDate?: string;
    initAddress?: string;
    initPhone?: string;
    initVisitPath?: VisitPathType;
    initVisitPathOther?: string;
    initJoinReason?: JoinReasonType;
    initJoinReasonOther?: string;
    memberId?: number;
  };
}

export const useMemberRegisterForm = (props?: IUseMemberRegisterFormParams) => {
  const isReRegister = props?.isReRegister;
  const initData = props?.initData;
  //## 개인명세자료

  const { data: userData } = useMe();

  const isAdmin = userData?.role === '관리자';
  const { data: branchListData } = useBranchNameList({ enabled: isAdmin });

  const [branchId, setBranchId] = useState<number>();
  const onChangeBranchId = (event: ChangeEvent<HTMLSelectElement>) => {
    setBranchId(+event.target.value);
  };

  useEffect(() => {
    if (userData?.branchId) {
      setBranchId(userData?.branchId);
    } else if (branchListData && branchListData.length > 0) {
      setBranchId(branchListData?.[0].branchId);
    }
  }, [branchListData]);

  // 이름
  const [name, setName] = useState(initData?.initName || '');
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // 전화번호
  const [phone, setPhone] = useState(initData?.initPhone || '');

  // 주소
  const addressBoxProps = useAddressBox();
  const { address, setAddress } = addressBoxProps;

  const dateObj = new Date();
  const initYear = dateObj.getFullYear().toString();
  const initMonth = (dateObj.getMonth() + 1).toString();
  const initDates = dateObj.getDate().toString();

  const contractDate = formatYYYYMMDD(initYear, initMonth, initDates);

  // 생년월일
  const [initBirthYear, initBirthMonth, initBirthDay] = initData?.initBirthDate
    ? splitYYYYMMDD(initData.initBirthDate)
    : [initYear, initMonth, initDates];

  const {
    setDay,
    setMonth,
    setYear,
    selectStateControlProps: birthDateSelectStateControlProps,
    dateString: birthDate,
  } = useDateSelectState({
    initData: { initYear: initBirthYear, initMonth: initBirthMonth, initDay: initBirthDay },
  });

  // 성별
  const [gender, setGender] = useState<GenderType>(initData?.initGender || '남');
  const onChangeGenderSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value as GenderType);
  };

  // 방문경로
  const [visitPath, setVisitPath] = useState<VisitPathType>(initData?.initVisitPath || 'SNS');

  const [visitPathOther, setVisitPathOther] = useState(initData?.initVisitPathOther || '');

  const onChangeVisitPathSelect = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (visitPath == '기타') {
      setVisitPathOther(event.target.value);
    } else {
      setVisitPath(event.target.value as VisitPathType);
    }
  };

  // 가입 이유
  const [joinReason, setJoinReason] = useState<JoinReasonType>(initData?.initJoinReason || '거리');

  const [joinReasonOther, setJoinReasonOther] = useState(initData?.initJoinReasonOther || '');
  const onChangeJoinReasonSelect = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (joinReason == '기타') {
      setJoinReasonOther(event.target.value);
    } else {
      setJoinReason(event.target.value as JoinReasonType);
    }
  };

  useEffect(() => {
    if (!initData) return;

    const {
      initAddress,
      initBirthDate,
      initGender,
      initJoinReason,
      initJoinReasonOther,
      initName,
      initPhone,
      initVisitPath,
      initVisitPathOther,
    } = initData;

    if (initAddress) setAddress(initAddress);
    if (initBirthDate) {
      const [initBirthYear, initBirthMonth, initBirthDays] = splitYYYYMMDD(initBirthDate);
      setYear(initBirthYear);
      setMonth(initBirthMonth);
      setDay(initBirthDays);
    }
    if (initGender) setGender(initGender);
    if (initJoinReason) setJoinReason(initJoinReason);
    if (initJoinReasonOther) setJoinReasonOther(initJoinReasonOther);
    if (initName) setName(initName);
    if (initPhone) setPhone(initPhone);
    if (initVisitPath) setVisitPath(initVisitPath);
    if (initVisitPathOther) setVisitPathOther(initVisitPathOther);
  }, [initData]);

  // 특이사항
  const [notes, setNotes] = useState('');
  const onChangeNotes = (event: ChangeEvent<HTMLInputElement>) => {
    setNotes(event.target.value);
  };

  // 이용 시작일

  const {
    setYear: setStartYear,
    setMonth: setStartMonth,
    setDay: setStartDays,
    selectStateControlProps: startDateSelectStateProps,
    dateString: startDate,
  } = useDateSelectState({
    initData: { initYear: initBirthYear, initMonth: initBirthMonth, initDay: initBirthDay },
  });

  // 이벤트옵션 - OT / 미라클 텐데이
  const {
    checkIsActiveStatusFilter,
    getStatusStateToggleHandler,
    activeStatusFilterOptions: serviceOptions,
  } = useFilterOption({
    statusFilterOptions: ServiceOptions,
  });

  const isApplyingOT = checkIsActiveStatusFilter('OT 프로그램');
  const toggleIsApplyingOt = getStatusStateToggleHandler('OT 프로그램');

  const {
    dateString: otProgramDate,
    setYear: setOtYear,
    setMonth: setOtMonth,
    setDay: setOtDay,
    selectStateControlProps: otDateSelectStateControlProps,
  } = useDateSelectState();

  const [otTime, setOtTime] = useState<string>('00:00');

  const onChangeOtTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtTime(event.target.value);
  };

  const otProgramDateTime = `${otProgramDate} ${otTime}:00`;

  const otYearRange = [+initYear, +initYear + 1];

  // 미라클 텐데이
  const isApplyingMiracleTenDays = checkIsActiveStatusFilter('미라클텐데이');
  const toggleIsApplyingMiracleTenDays = getStatusStateToggleHandler('미라클텐데이');

  //가입 유형
  const [joinCategory, setJoinCategory] = useState<JoinCategoryType>('워크인');
  const onChangeJoinCategorySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setJoinCategory(event.target.value as JoinCategoryType);
  };

  const productGridProps = useProductPurchaseGrid();

  const selectedItems = productGridProps.selectedItems;

  const selectedProductNames = selectedItems?.map((item) => item.name).join(', ');

  // 상품 선택 및 가격 계산
  const productIds = selectedItems?.map((item) => item.productId);

  const [showProductSelect, setShowProductSelect] = useState(false);
  const onClickShowProductSelect = () => {
    setShowProductSelect((prev) => !prev);
  };

  const totalPrice = selectedItems.reduce((acc, cur) => acc + +cur.sellingPrice, 0);

  const calculatePrice = (productCategory: string) =>
    selectedItems.reduce(
      (acc, cur) => (cur.name.includes(productCategory) ? acc + +cur.sellingPrice : acc),
      0,
    );

  const membershipFee = calculatePrice('회원권');
  const clothesFee = calculatePrice('운동복');
  const ptFee = calculatePrice('PT');
  const lockerFee = calculatePrice('락커');

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
  const totalAmount = totalPrice - discountAmount;
  const receivableAmount = totalAmount - paidAmount;

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
    paperSize: [260, 230],
    orientation: 'landscape',
  });

  const resetForm = () => {
    setBranchId(userData?.branchId || branchListData?.[0]?.branchId);
    setName('');
    setPhone('');
    setAddress('');
    setYear(initYear);
    setMonth(initMonth);
    setDay(initDates);

    setGender('남');
    setVisitPath('SNS');
    setVisitPathOther('');
    setJoinReason('거리');
    setJoinReasonOther('');
    setNotes('');
    setJoinCategory('워크인');
    setStartYear(initYear);
    setStartMonth(initMonth);
    setStartDays(initDates);
    setCardAmount(0);
    setCashAmount(0);
    setBankTransferAmount(0);
    setDiscountAmount(0);
    setDiscountReason('');
    setCardApprovalNo('');
    setCardProvider('신한카드');
    setCardProviderOther('');
    setAccountNumber('');
    setAccountOwnerName('');
    setShowProductSelect(false);
    setOtYear(initYear);
    setOtMonth(initMonth);
    setOtDay(initDates);
    setOtTime('00:00');
    productGridProps.resetSelection();

    signaturePadProps.resetSignaturePad();
  };

  const { mutate: saveContract } = useSaveMemberContract();

  const { mutate: registerForTheFirstTime } = useRegisterNewMember({
    onSuccessAdditional: async (memberId: number) => {
      const pdfBlob = await getBlob();
      if (!pdfBlob) {
        alert('PDF Blob 생성 실패');
        return;
      }

      saveContract({
        memberId,
        contractImageUrl: pdfBlob,
        contractType: '신규',
      });

      await handleGeneratePdfBase64();
      await downloadPdf();
      resetForm();
    },
  });

  const { mutate: reRegister } = useReRegisterMember({
    onSuccessAdditional: async () => {
      const pdfBlob = await getBlob();
      if (!pdfBlob) {
        alert('PDF Blob 생성 실패');
        return;
      }
      saveContract({
        memberId: initData?.memberId!,
        contractImageUrl: pdfBlob,
        contractType: '재등록',
      });

      await handleGeneratePdfBase64();
      await downloadPdf();
      resetForm();
    },
  });

  const { data: categories } = useMemberCategories();

  const memberCategoryId = categories?.find(
    ({ code }) => code === MEMBER_CATEGORIES_CODE['등록 회원'],
  )?.['memberCategoryId'];

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
      address: { value: address, errorMessage: '주소를 검색해서 선택해주세요', regex: /^.{2,}$/ },
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
      const alertMessage = '회원 등록에 필요한 정보가 부족합니다 \n' + errors.join('\n');
      alert(alertMessage);
      return;
    }
    if (memberCategoryId !== 0 && !memberCategoryId) {
      alert(`서버와 통신이 되지 않습니다. \n 회원등록 카테고리 식별이 불가능합니다. ${categories}`);

      return;
    }
    await handleGeneratePdfBase64();

    if (isReRegister) {
      reRegister({
        memberId: Number(props.initData?.memberId),
        additionalInfo: {
          notes,
          serviceOptions,
          otProgramDateTime: serviceOptions?.includes('OT 프로그램')
            ? otProgramDateTime
            : undefined,
        },
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

          cardCompany:
            paymentMethod === '카드' || paymentMethod === '복합' ? cardCompany : undefined,
          cardCompanyOther,
        },
        selectProducts: {
          productIds,
        },
      });
    } else {
      registerForTheFirstTime({
        memberInfo: {
          branchId,
          name,
          gender,
          birthDate,
          phone,
          address: address as string,
          startDate,
          visitPath,
          visitPathOther,
          joinReason,
          joinReasonOther,
          memberCategoryId,
        },
        additionalInfo: {
          notes,
          serviceOptions,
          otProgramDateTime: serviceOptions?.includes('OT 프로그램')
            ? otProgramDateTime
            : undefined,
        },
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

          cardCompany,
          cardCompanyOther,
        },
        selectProducts: {
          productIds,
        },
      });
    }
  };

  // 계약서에 제공할 값
  const contractProps = {
    username: name,
    gender,
    birth: birthDate,
    phone,
    address: address as string,
    visitPath: visitPath === '기타' ? visitPathOther : visitPath,
    joinReason,
    enrollCategory: joinCategory,
    productName: selectedProductNames,
    notes,
    option: { ot: isApplyingOT, miracleTenDay: isApplyingMiracleTenDays },
    otProgramDateTime,
    discountAmount,
    discountReason: discountAmount > 0 ? discountReason : '',
    totalPrice,

    paymentMethod,
    paidAmount,
    membershipFee,
    lockerFee,
    ptFee,
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

    branchListData,
    isAdmin,
    branchId,
    onChangeBranchId,

    name,
    onChangeName,

    gender,
    onChangeGenderSelect,

    notes,
    onChangeNotes,

    joinReason,
    joinReasonOther,
    onChangeJoinReasonSelect,

    joinCategory,
    onChangeJoinCategorySelect,

    birthDateSelectStateControlProps,
    address,
    phone,
    setPhone,

    totalAmount,

    isApplyingOT,
    toggleIsApplyingOt,

    otDateSelectStateControlProps,
    otYearRange,
    otTime,
    onChangeOtTime,

    startDateSelectStateProps,

    isApplyingMiracleTenDays,
    toggleIsApplyingMiracleTenDays,

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
    productGridProps,

    visitPath,
    visitPathOther,

    onChangeVisitPathSelect,

    showProductSelect,
    onClickShowProductSelect,

    addressBoxProps,
    signaturePadProps,
    signatureImage,

    contractProps,

    contractWrapperRef,
    pdfBase64String,

    isReRegister,
  };
};

export type IReturnOfUseMemberRegisterForm = ReturnType<typeof useMemberRegisterForm>;
