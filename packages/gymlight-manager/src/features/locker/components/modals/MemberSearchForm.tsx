import { useEffect, useState } from 'react';
import { IconButton, SearchInput, SquareButton } from 'gymlight-design-system';
import { CheckIcon } from '@heroicons/react/24/outline';

import { useMemberSearchList } from '@/features/member';

import { useLockerModals, type IReturnOfUseMemberSearch } from '@/features/locker/hooks';

import * as Styled from './MemberSearchForm.styles';

const MemberSearchForm = ({
  searchInputRef,
  searchParam,
  runSearch,
  initSearchInputValue,
  setActiveMemberId,
  resetState,
}: IReturnOfUseMemberSearch) => {
  const { closeModal } = useLockerModals();

  const [checkedMemberId, setCheckedMemberId] = useState<number>();
  const [inputValue, setInputValue] = useState<string>('');

  const handleState = (memberId: number) => {
    setCheckedMemberId((prev) => (prev === memberId ? undefined : memberId));
  };

  const handleClose = () => {
    if (checkedMemberId) {
      setActiveMemberId(checkedMemberId);
      closeModal();
    }
  };

  const { data: searchedMembers } = useMemberSearchList({
    pageNum: 1,
    pageSize: 100000,
    name: searchParam,
  });

  useEffect(() => {
    setCheckedMemberId(undefined);
  }, [searchedMembers?.totalElements]);

  useEffect(() => {
    resetState();
  }, []);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInitValue = () => {
    setInputValue('');
    initSearchInputValue();
  };

  const clickButton = () => {
    runSearch();
  };

  return (
    <Styled.Wrapper>
      <Styled.SearchSection>
        <SearchInput
          placeholder="이름 또는 연락처"
          ref={searchInputRef}
          value={inputValue}
          onChange={handleInputValue}
          handleInit={handleInitValue}
        />
        <SquareButton onClick={clickButton} wide variant={!!inputValue ? 'normal' : 'outline'}>
          검색
        </SquareButton>
      </Styled.SearchSection>

      {searchParam && (
        <>
          <div
            style={{
              width: '100%',
              padding: '0.02rem 0',
              background: 'lightgray',
              margin: '2.8rem 0',
            }}
          />
          <div>
            <Styled.DataCounts>검색 결과 {searchedMembers?.totalElements || 0}개</Styled.DataCounts>
            <Styled.SearchResultList>
              {searchedMembers?.list.map(
                ({ memberId, name, phone, birthDate, branchName, startDate, endDate }) => (
                  <Styled.Result onClick={() => handleState(memberId)}>
                    <Styled.FlexContainer key={memberId}>
                      <img src={'/images/profile.png'} />
                      <Styled.FlexVerticalContainer>
                        <span className="name">{name}</span>
                        <span className="details">
                          {phone} / {birthDate} / {branchName}
                        </span>
                      </Styled.FlexVerticalContainer>
                    </Styled.FlexContainer>
                    <IconButton
                      className="test"
                      icon={<CheckIcon />}
                      variant={memberId === checkedMemberId ? 'primary' : 'icon-only'}
                    />
                  </Styled.Result>
                ),
              )}
            </Styled.SearchResultList>
            <SquareButton
              wide
              type="button"
              variant={checkedMemberId ? 'primary' : 'outline'}
              disabled={!checkedMemberId}
              onClick={() => handleClose()}
            >
              {checkedMemberId ? '선택 완료' : '회원을 선택해주세요.'}
            </SquareButton>
          </div>
        </>
      )}
    </Styled.Wrapper>
  );
};

export default MemberSearchForm;
