"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INPUT_OPTIONS = exports.VALIDATION = exports.REG_EXP = void 0;
exports.REG_EXP = {
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
exports.VALIDATION = {
    EMAIL: {
        MAX_LENGTH: 255,
        PATTERN: exports.REG_EXP.EMAIL,
    },
    PASSWORD: {
        MIN_LENGTH: 8,
        MAX_LENGTH: 255,
        PATTERN: exports.REG_EXP.PASSWORD,
    },
    NAME: {
        MIN_LENGTH: 2,
        MAX_LENGTH: 50,
        PATTERN: exports.REG_EXP.NAME,
    },
    BIRTH_DATE: {
        MAX_LENGTH: 10,
        PATTERN: exports.REG_EXP.BIRTH_DATE,
    },
    PHONE: {
        MAX_LENGTH: 13,
        PATTERN: exports.REG_EXP.PHONE,
    },
    TEL: {
        MAX_LENGTH: 13,
        PATTERN: exports.REG_EXP.TEL,
    },
    BRANCH_NAME: {
        MIN_LENGTH: 2,
        MAX_LENGTH: 50,
        PATTERN: exports.REG_EXP.BRANCH_NAME,
    },
    BRANCH_CODE: {
        MIN_LENGTH: 2,
        MAX_LENGTH: 50,
        PATTERN: exports.REG_EXP.BRANCH_CODE,
    },
};
exports.INPUT_OPTIONS = {
    EMAIL: {
        required: '이메일을 입력해주세요.',
        maxLength: {
            value: exports.VALIDATION.EMAIL.MAX_LENGTH,
            message: `이메일은 ${exports.VALIDATION.EMAIL.MAX_LENGTH}자 이하여야 합니다.`,
        },
        pattern: {
            value: exports.REG_EXP.EMAIL,
            message: '이메일 형식에 맞게 입력해주세요.',
        },
    },
    PASSWORD: {
        required: '비밀번호를 입력해주세요.',
        minLength: {
            value: exports.VALIDATION.PASSWORD.MIN_LENGTH,
            message: `비밀번호는 ${exports.VALIDATION.PASSWORD.MIN_LENGTH}자 이상이어야 합니다.`,
        },
        maxLength: {
            value: exports.VALIDATION.PASSWORD.MAX_LENGTH,
            message: `비밀번호는 ${exports.VALIDATION.PASSWORD.MAX_LENGTH}자 이하여야 합니다.`,
        },
        pattern: {
            value: exports.REG_EXP.PASSWORD,
            message: '비밀번호는 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.',
        },
    },
    NAME: {
        required: '이름을 입력해주세요.',
        minLength: {
            value: exports.VALIDATION.NAME.MIN_LENGTH,
            message: `이름은 ${exports.VALIDATION.NAME.MIN_LENGTH}자 이상이어야 합니다.`,
        },
        maxLength: {
            value: exports.VALIDATION.NAME.MAX_LENGTH,
            message: `이름은 ${exports.VALIDATION.NAME.MAX_LENGTH}자 이하여야 합니다.`,
        },
        pattern: {
            value: exports.REG_EXP.NAME,
            message: '이름은 한글, 영문 대소문자만 입력 가능합니다.',
        },
    },
    BIRTH_DATE: {
        required: '생년월일을 입력해주세요.',
        maxLength: {
            value: exports.VALIDATION.BIRTH_DATE.MAX_LENGTH,
            message: '생년월일은 YYYY-MM-DD 형식으로 입력해주세요.',
        },
        pattern: {
            value: exports.REG_EXP.BIRTH_DATE,
            message: '생년월일은 YYYY-MM-DD 형식으로 입력해주세요.',
        },
    },
    PHONE: {
        required: '휴대폰 번호를 입력해주세요.',
        maxLength: {
            value: exports.VALIDATION.PHONE.MAX_LENGTH,
            message: `휴대폰 번호는 ${exports.VALIDATION.PHONE.MAX_LENGTH}자리 이하여야 합니다.`,
        },
        pattern: {
            value: exports.REG_EXP.PHONE,
            message: '휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.',
        },
    },
    BRANCH_NAME: {
        required: '지점명을 입력해주세요.',
        minLength: {
            value: exports.VALIDATION.BRANCH_NAME.MIN_LENGTH,
            message: `지점명은 ${exports.VALIDATION.BRANCH_NAME.MIN_LENGTH}문자 이상이어야 합니다 `,
        },
        maxLength: {
            value: exports.VALIDATION.BRANCH_NAME.MAX_LENGTH,
            message: `지점명은 ${exports.VALIDATION.PHONE.MAX_LENGTH}문자 이하여야 합니다.`,
        },
        pattern: {
            value: exports.REG_EXP.BRANCH_NAME,
            message: `지점명은 한글,숫자,영문으로만 구성되어야 합니다.`,
        },
    },
    BRANCH_CODE: {
        required: '지점코드를 입력해주세요.',
        minLength: {
            value: exports.VALIDATION.BRANCH_CODE.MIN_LENGTH,
            message: `지점코드는 ${exports.VALIDATION.BRANCH_CODE.MIN_LENGTH}문자 이상이어야 합니다 `,
        },
        maxLength: {
            value: exports.VALIDATION.BRANCH_CODE.MAX_LENGTH,
            message: `지점코드는 ${exports.VALIDATION.BRANCH_CODE.MAX_LENGTH}문자 이하여야 합니다.`,
        },
        pattern: {
            value: exports.REG_EXP.BRANCH_CODE,
            message: `지점코드는 영문, 숫자, 특수문자 "-", "_" 의 조합으로 구성되어야 합니다.`,
        },
    },
    TEL: {
        required: '전화 번호를 입력해주세요.',
        maxLength: {
            value: exports.VALIDATION.TEL.MAX_LENGTH,
            message: `전화번호는 ${exports.VALIDATION.TEL.MAX_LENGTH}자리 이하여야 합니다.`,
        },
    },
};
