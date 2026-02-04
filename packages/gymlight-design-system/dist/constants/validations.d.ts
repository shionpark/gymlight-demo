import { IValidationRules } from '../libs';
import { DictionaryType } from '../types';
export declare const REG_EXP: {
    NUMBER: RegExp;
    EMAIL: RegExp;
    PASSWORD: RegExp;
    NAME: RegExp;
    BIRTH_DATE: RegExp;
    PHONE: RegExp;
    TEL: RegExp;
    BRANCH_NAME: RegExp;
    BRANCH_CODE: RegExp;
};
export declare const VALIDATION: {
    EMAIL: {
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    PASSWORD: {
        MIN_LENGTH: number;
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    NAME: {
        MIN_LENGTH: number;
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    BIRTH_DATE: {
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    PHONE: {
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    TEL: {
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    BRANCH_NAME: {
        MIN_LENGTH: number;
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
    BRANCH_CODE: {
        MIN_LENGTH: number;
        MAX_LENGTH: number;
        PATTERN: RegExp;
    };
};
export declare const INPUT_OPTIONS: DictionaryType<IValidationRules | undefined>;
