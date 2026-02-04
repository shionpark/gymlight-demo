import { useEffect } from 'react';

import { useLocation } from 'react-router';

import {
  DateSelect,
  GenderSelect,
  Input,
  INPUT_OPTIONS,
  LabeledContainer,
  PhoneInput,
  SquareButton,
  useForm,
} from 'gymlight-design-system';

import type { AuthType, GenderType, IRawJoinForm } from '@/types';
import { formatYYYYMMDD, getNowDateAndTime, setRedirect } from '@/utils';

import { AuthCheckbox, AuthForm, AuthSection, useJoin } from '@/features/auth';

const JoinPage = () => {
  const location = useLocation();
  const { mutate } = useJoin();

  const onValid = async (form: IRawJoinForm) => {
    const {
      email,
      password,
      name,
      phone,
      gender,
      birthDateYear,
      birthDateMonth,
      birthDateDay,
      joinDateYear,
      joinDateMonth,
      joinDateDay,
    } = form;

    const birthDate = `${birthDateYear}-${String(birthDateMonth).padStart(
      2,
      '0',
    )}-${String(birthDateDay).padStart(2, '0')}`;

    const joinDate = formatYYYYMMDD(joinDateYear, joinDateMonth, joinDateDay);

    mutate({
      email,
      password,
      name,
      gender,
      birthDate,
      phone,
      joinDate,
    });
  };

  const authType: AuthType = '회원가입';
  const genderOptions: GenderType[] = ['남', '여'];

  const { register, handleSubmit, errors } = useForm<IRawJoinForm>();

  useEffect(() => {
    setRedirect(location);
  }, [location]);

  return (
    <AuthSection>
      <AuthForm title={authType} onSubmit={handleSubmit(onValid)}>
        <Input
          type="email"
          errorMessage={errors.email}
          {...register({
            name: 'email',
            placeholder: '이메일을 입력해주세요',
            validationRules: INPUT_OPTIONS.EMAIL,
          })}
        />
        <Input
          type="password"
          errorMessage={errors.password}
          {...register({
            name: 'password',
            placeholder: '비밀번호',
            validationRules: INPUT_OPTIONS.PASSWORD,
          })}
        />
        <Input
          type="password"
          errorMessage={errors.confirmPassword}
          {...register({
            name: 'confirmPassword',
            placeholder: '비밀번호 확인',
            validationRules: {
              required: '비밀번호 확인을 입력해주세요.',
              match: {
                value: 'password',
                message: '비밀번호가 일치하지 않습니다.',
              },
            },
          })}
        />
        <Input
          type="text"
          errorMessage={errors.name}
          {...register({
            name: 'name',
            placeholder: '이름',
            validationRules: INPUT_OPTIONS.NAME,
          })}
        />
        <GenderSelect
          values={genderOptions}
          defaultValue={genderOptions[0] || undefined}
          {...register({
            name: 'gender',
            validationRules: {
              required: '성별을 선택해주세요.',
            },
          })}
        />
        <PhoneInput
          name="phone"
          placeholder="휴대폰 번호"
          register={register}
          validationRules={INPUT_OPTIONS.PHONE}
          errors={errors}
          wide
        />
        <LabeledContainer labelText="생년월일" vertical>
          <DateSelect name="birthDate" register={register} errors={errors} />
        </LabeledContainer>
        <LabeledContainer labelText="입사일" vertical>
          <DateSelect name="joinDate" register={register} errors={errors} />
        </LabeledContainer>

        <SquareButton variant="normal" size="normal" wide>
          회원가입
        </SquareButton>
        <div>
          <AuthCheckbox
            label="서비스 이용약관 (필수)"
            {...register({
              name: 'agreeToUseService',
              validationRules: {
                required: '서비스 이용약관 동의는 필수입니다.',
              },
            })}
          />
          <AuthCheckbox
            label="개인정보 수집 및 이용 동의 (필수)"
            {...register({
              name: 'agreeToUsePersonalInfo',
              validationRules: {
                required: '개인정보 수집 및 이용 동의는 필수입니다.',
              },
            })}
          />
        </div>
      </AuthForm>
    </AuthSection>
  );
};

export default JoinPage;
