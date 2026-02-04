"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = exports.Guest = exports.Admin = exports.Default = void 0;
const ProfileInfo_1 = __importDefault(require("./ProfileInfo"));
/**
 * ### 개요
 *
 *
 */
const meta = {
    title: 'components/Containers/ProfileInfo',
    component: ProfileInfo_1.default,
    argTypes: {
        name: {
            control: 'text',
        },
        role: {
            control: 'select',
            options: [
                '관리자',
                '매니저',
                '팀장 트레이너',
                '트레이너',
                '전지점 FC',
                'FC',
                '전 지점 인포',
                '인포',
            ],
        },
        branch: {
            control: 'select',
            options: ['서강대점', '명지대점', '연희/연세대점', '구산/연신내점', '테스트점'],
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        name: '홍길동',
        role: '매니저',
    },
};
exports.Admin = {
    args: Object.assign(Object.assign({}, exports.Default.args), { name: '사용자', role: '관리자' }),
};
exports.Guest = {
    args: Object.assign(Object.assign({}, exports.Default.args), { name: '사용자' }),
};
exports.Trainer = {
    args: Object.assign(Object.assign({}, exports.Default.args), { role: '트레이너' }),
};
