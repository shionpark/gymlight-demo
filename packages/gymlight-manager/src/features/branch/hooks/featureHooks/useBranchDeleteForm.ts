import { type ChangeEvent, useCallback, useState } from 'react';

import { useCheckMyPhoneNumber, useTimer } from '@/hooks';

import { useMe } from '@/features/auth';

import { useBranchModals, useDeleteBranch } from '@/features/branch';

interface IUseBranchDeleteFormArgs {
  branchId?: number;
  name?: string;
}

/**	
 * 
 *  1.	관리자 전화번호 확인 - 프론트 단독 구현가능 
	    •	전화번호를 입력받아서 로그인된 관리자 본인의 전화번호를 확인 
          - 전화번호 확인이 성공하면 인증번호 전송 활성화
          
	  2. 인증번호 전송 - 타이머, state 버튼 구현
	    •	전화번호 확인이 성공하면 인증번호 버튼 활성화
          - 클릭시 sms 인증코드 요청 실행  (가칭: sendSMSForCertificationCode api) 
          
	  3.	식별 코드 입력 및 타이머 관리
	    •	SMS 전송 api로부터 전송 성공 응답이 올경우, {메시지전송됨:boolean, 유효한 시간: n초} 
          - 식별 코드 입력 폼 활성화
          - n초간 인증 타이머 시작. 
              - 타이머 종료시 식별코드 폼 비활성화
	  
    4.	인증 성공 시 삭제 요청 
	    •	입력한 인증 코드가 확인되면 지점 삭제요청 - deleteBranch mutation 실행

  */

export const useBranchDeleteForm = ({ branchId, name }: IUseBranchDeleteFormArgs) => {
  const { closeModal } = useBranchModals();

  const { data: userData } = useMe();

  const role = userData?.role;
  const hasAuth = role === '관리자';

  const [certificationNumber, setCertificationNumber] = useState('');
  const handleChangeCertificationNumberInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCertificationNumber(event.target.value);
  };

  // 본인의 전화번호를 알고있는지 확인
  const {
    handleCheckIsCorrectPhoneNumber,
    phoneNumber,
    handleChangePhoneNumberInput,
    isCorrectlyAware,
  } = useCheckMyPhoneNumber();

  // 인증번호 만료 타이머 코드
  const { startTimer, stopTimer, timeString, isCountingNow } = useTimer({
    seconds: 300,
  });

  const handleClickSendSms = () => {
    stopTimer();
    startTimer();
    setIsValidCertificationCodeCreated(true);
  };

  // 인증번호 확인  코드

  // const {data: {isCreated}}= useCertificationCode({phone})
  //
  //
  //
  //
  //
  //
  // useEffect(()=>{}, [])

  const { mutate: deleteBranch } = useDeleteBranch({ onSuccessAdditional: () => closeModal() });

  // 인증코드 생성 성공
  const [isValidCertificationCodeCreated, setIsValidCertificationCodeCreated] = useState(false);

  // 인증번호 확인
  //  - 확인 성공시 isValidCertificationCodeExist를 true로 변경
  //   - 해당 state에 따라 최종 삭제버튼 구현
  // const { muate: checkCertificationCode } = useCheckCertificationCode({
  //   onAdditionalSuccess: () => {
  //     setIsValidCertificationCodeExist(true)
  //   },
  // });

  //모든 과정 통과
  const [isReadyToDeleteBranch, setIsReadyToDeleteBranch] = useState(false);

  const handleClickDeleteBranch = useCallback(() => {
    const confirmDelete = confirm(`정말 ${name}의 데이터를 전부 삭제하시겠습니까?`);

    if (confirmDelete) {
      deleteBranch({ branchId: branchId! });
    }
  }, [name, branchId]);

  return {
    handleCheckIsCorrectPhoneNumber,
    phoneNumber,
    handleChangePhoneNumberInput,
    isCorrectlyAware,

    hasAuth,

    certificationNumber,
    handleChangeCertificationNumberInput,

    handleClickSendSms,

    timeString,
    isCountingNow,

    isValidCertificationCodeCreated,
    isReadyToDeleteBranch,
    handleClickDeleteBranch,
  };
};
