import { ChangeEvent, useEffect, useState } from 'react';

import { useForm } from 'gymlight-design-system';

import { useMe } from '@/features/auth';
import { useBranchNameList } from '@/features/branch';

import {
  useRegisterCouponMember,
  useMemberSearchList,
  useActiveMembers,
  useMemberCategories,
  useMemberModals,
} from '@/features/member';

import { IBranchNameResponse, IRegisterCouponRequest } from '@/types';
import { usePagination, useSearchInput } from '@/hooks';

import { MEMBER_CATEGORIES_CODE } from '@/constants';

// 1. memo 추가 요청
// 2. refferedId를 위해 , 활성화된 회원의 목록과 전화번호, 식별자만 들어있는 쿼리 생성요청

interface IUseCouponMemberFormArgs {
  initBranchId?: number;
}

export const useCouponMemberForm = (args?: IUseCouponMemberFormArgs) => {
  const [formKey, setFormKey] = useState(0);

  const { data: userData } = useMe();

  const { closeModal } = useMemberModals();

  const { data: memberCategories } = useMemberCategories();

  const memberCategoryId = memberCategories?.find(
    (aCategory) => aCategory.code === MEMBER_CATEGORIES_CODE['쿠폰 회원'],
  )?.memberCategoryId;

  const isAdmin = userData?.role === '관리자';
  const { data: branchListQueryData } = useBranchNameList({ enabled: isAdmin });

  const [branchIdState, setBranchIdState] = useState(() => args?.initBranchId);

  const onChangeBranchIdState = (event: ChangeEvent<HTMLSelectElement>) => {
    alert('지점 변경');
    setBranchIdState(+event.target.value);
  };

  useEffect(() => {
    if (args?.initBranchId) {
      setBranchIdState(args.initBranchId);
    }
  }, [args]);

  const {
    searchInputRef,
    isSearching,

    searchParam,
    runSearch,
    endSearch,
  } = useSearchInput();

  const {
    currentPageNumber,
    pageSize,
    handlePageNumberChange,
    handlePageSizeChange,
    resetPageNumber,
  } = usePagination();

  const { data: memberData } = useMemberSearchList({
    pageNum: currentPageNumber,
    pageSize,
    name: searchParam,
  });

  const { data: activeMembers } = useActiveMembers({
    branchId: branchIdState,
  });

  // useForm
  const { register, errors, handleSubmit } = useForm<IRegisterCouponRequest>();
  const { mutate: registerCoupon } = useRegisterCouponMember();

  // form에 등록된 값과 상담내역값을 함께 처리
  const onValidRegister = async (form: IRegisterCouponRequest) => {
    const { name, phone, couponDays, gender, referrerId } = form;

    if (!memberCategoryId) {
      alert(`memberCategoryId가 존재하지 않습니다. 
        현재 서버와의 통신 상태를 확인해주세요.`);
      return;
    }
    if (!userData?.userId) {
      alert(`쿠폰을 발급하는 사용자의 id를 확인할 수 없습니다. 다시 로그인해보세요.`);
      return;
    }

    registerCoupon(
      {
        name,
        gender,
        phone,

        referrerId,
        trainerId: +userData?.userId,
        couponDays: +couponDays,
        branchId: branchIdState ? branchIdState : (branchListQueryData?.[0]['branchId'] as number),
        memberCategoryId,
      },
      {
        onSuccess: () => {
          const keepModalOpen = confirm('또 다른 쿠폰을 등록하시겠습니까?');
          if (!keepModalOpen) {
            closeModal();
            return;
          }
          setFormKey((prev) => prev + 1);
        },
      },
    );
  };

  const onSubmitRegister = handleSubmit(onValidRegister);
  // 추후 업데이트로 변경
  const onSubmitEdit = handleSubmit(onValidRegister);

  return {
    register,
    memberData,
    errors,
    isAdmin,
    branchOptionData: branchListQueryData as IBranchNameResponse[],
    onSubmitRegister,
    onSubmitEdit,

    handlePageNumberChange,
    handlePageSizeChange,
    resetPageNumber,

    searchInputRef,
    isSearching,
    activeMembers,
    searchParam,
    runSearch,
    endSearch,

    formKey,

    onChangeBranchIdState,
  };
};
