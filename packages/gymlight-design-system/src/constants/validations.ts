import { IValidationRules } from '@/libs';
import { DictionaryType } from '@/types';

export const REG_EXP = {
  NUMBER: /^[0-9]$/,

  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,255}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,255}$/,
  NAME: /^[가-힣a-zA-Z]{2,17}$/,
  BIRTH_DATE: /^(19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/,
  PHONE: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
  TEL: /^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d-.]{3,12}$/,
  BRANCH_NAME: /^[가-힣a-zA-Z0-9]{2,50}$/,
  BRANCH_CODE: /^[a-zA-Z0-9-_]{2,50}$/,
};

export const VALIDATION = {
  EMAIL: {
    MAX_LENGTH: 255,
    PATTERN: REG_EXP.EMAIL,
  },

  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 255,
    PATTERN: REG_EXP.PASSWORD,
  },

  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: REG_EXP.NAME,
  },

  BIRTH_DATE: {
    MAX_LENGTH: 10,
    PATTERN: REG_EXP.BIRTH_DATE,
  },

  PHONE: {
    MAX_LENGTH: 13,
    PATTERN: REG_EXP.PHONE,
  },

  TEL: {
    MAX_LENGTH: 13,
    PATTERN: REG_EXP.TEL,
  },

  BRANCH_NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: REG_EXP.BRANCH_NAME,
  },

  BRANCH_CODE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: REG_EXP.BRANCH_CODE,
  },
};

export const INPUT_OPTIONS: DictionaryType<IValidationRules | undefined> = {
  EMAIL: {
    required: '이메일을 입력해주세요.',
    maxLength: {
      value: VALIDATION.EMAIL.MAX_LENGTH,
      message: `이메일은 ${VALIDATION.EMAIL.MAX_LENGTH}자 이하여야 합니다.`,
    },
    pattern: {
      value: REG_EXP.EMAIL,
      message: '이메일 형식에 맞게 입력해주세요.',
    },
  },

  PASSWORD: {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: VALIDATION.PASSWORD.MIN_LENGTH,
      message: `비밀번호는 ${VALIDATION.PASSWORD.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.PASSWORD.MAX_LENGTH,
      message: `비밀번호는 ${VALIDATION.PASSWORD.MAX_LENGTH}자 이하여야 합니다.`,
    },
    pattern: {
      value: REG_EXP.PASSWORD,
      message: '비밀번호는 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.',
    },
  },

  NAME: {
    required: '이름을 입력해주세요.',
    minLength: {
      value: VALIDATION.NAME.MIN_LENGTH,
      message: `이름은 ${VALIDATION.NAME.MIN_LENGTH}자 이상이어야 합니다.`,
    },
    maxLength: {
      value: VALIDATION.NAME.MAX_LENGTH,
      message: `이름은 ${VALIDATION.NAME.MAX_LENGTH}자 이하여야 합니다.`,
    },
    pattern: {
      value: REG_EXP.NAME,
      message: '이름은 한글, 영문 대소문자만 입력 가능합니다.',
    },
  },

  BIRTH_DATE: {
    required: '생년월일을 입력해주세요.',
    maxLength: {
      value: VALIDATION.BIRTH_DATE.MAX_LENGTH,
      message: '생년월일은 YYYY-MM-DD 형식으로 입력해주세요.',
    },
    pattern: {
      value: REG_EXP.BIRTH_DATE,
      message: '생년월일은 YYYY-MM-DD 형식으로 입력해주세요.',
    },
  },

  PHONE: {
    required: '휴대폰 번호를 입력해주세요.',
    maxLength: {
      value: VALIDATION.PHONE.MAX_LENGTH,
      message: `휴대폰 번호는 ${VALIDATION.PHONE.MAX_LENGTH}자리 이하여야 합니다.`,
    },
    pattern: {
      value: REG_EXP.PHONE,
      message: '휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.',
    },
  },

  BRANCH_NAME: {
    required: '지점명을 입력해주세요.',
    minLength: {
      value: VALIDATION.BRANCH_NAME.MIN_LENGTH,
      message: `지점명은 ${VALIDATION.BRANCH_NAME.MIN_LENGTH}문자 이상이어야 합니다 `,
    },
    maxLength: {
      value: VALIDATION.BRANCH_NAME.MAX_LENGTH,
      message: `지점명은 ${VALIDATION.PHONE.MAX_LENGTH}문자 이하여야 합니다.`,
    },
    pattern: {
      value: REG_EXP.BRANCH_NAME,
      message: `지점명은 한글,숫자,영문으로만 구성되어야 합니다.`,
    },
  },

  BRANCH_CODE: {
    required: '지점코드를 입력해주세요.',
    minLength: {
      value: VALIDATION.BRANCH_CODE.MIN_LENGTH,
      message: `지점코드는 ${VALIDATION.BRANCH_CODE.MIN_LENGTH}문자 이상이어야 합니다 `,
    },
    maxLength: {
      value: VALIDATION.BRANCH_CODE.MAX_LENGTH,
      message: `지점코드는 ${VALIDATION.BRANCH_CODE.MAX_LENGTH}문자 이하여야 합니다.`,
    },
    pattern: {
      value: REG_EXP.BRANCH_CODE,
      message: `지점코드는 영문, 숫자, 특수문자 "-", "_" 의 조합으로 구성되어야 합니다.`,
    },
  },

  TEL: {
    required: '전화 번호를 입력해주세요.',
    maxLength: {
      value: VALIDATION.TEL.MAX_LENGTH,
      message: `전화번호는 ${VALIDATION.TEL.MAX_LENGTH}자리 이하여야 합니다.`,
    },
  },
};
