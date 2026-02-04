"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRegExps = void 0;
exports.validationRegExps = {
    required: () => /.+/,
    minLength: (minLength) => new RegExp(`^.{${minLength},}$`),
    maxLength: (maxLength) => new RegExp(`^.{0,${maxLength}}$`),
    pattern: (pattern) => pattern,
    match: (fields) => (matchField) => {
        var _a, _b;
        const matchingValue = (_b = (_a = fields[matchField]) === null || _a === void 0 ? void 0 : _a.ref.current) === null || _b === void 0 ? void 0 : _b.value;
        if (!matchingValue)
            throw new Error('일치하는 필드를 찾을 수 없습니다.');
        return new RegExp(`^${matchingValue}$`);
    },
};
