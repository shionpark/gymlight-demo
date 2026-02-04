"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithCustomPinIcon = exports.Default = void 0;
const PinProgressBar_1 = __importDefault(require("./PinProgressBar"));
const outline_1 = require("@heroicons/react/24/outline");
const meta = {
    component: PinProgressBar_1.default,
    title: 'Components/graphs/PinProgressBar',
    argTypes: {
        pinCells: {
            control: 'object',
            description: '특정 셀에 핀과 라벨을 표시하기 위한 배열',
            defaultValue: [
                { cellIndex: 10, label: '최소요구량', hasPin: true },
                { cellIndex: 30, label: '인센티브', hasPin: true },
                { cellIndex: 49, label: '워크인 혜택', hasPin: true },
            ],
        },
        colorCells: {
            control: 'object',
            description: '특정 셀의 배경 색상을 설정하기 위한 배열',
            defaultValue: [
                { cellIndex: 10, cellColor: 'red' },
                { cellIndex: 30, cellColor: 'green' },
                { cellIndex: 49, cellColor: 'orange' },
            ],
        },
        numeratorColor: {
            control: 'color',
            description: '분자를 표시하는 부분의 색깔',
            defaultValue: 'blue',
        },
        denominatorColor: {
            control: 'color',
            description: '분자를 제외한 부분의 색깔',
            defaultValue: 'lightgray',
        },
        numeratorNumber: {
            control: 'number',
            description: '분자 수',
            defaultValue: 30,
        },
        denominatorNumber: {
            control: 'number',
            description: '분모 수',
            defaultValue: 50,
        },
        barThikness: {
            control: 'number',
            description: '그래프의 두께, rem 단위',
            defaultValue: 1,
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        pinCells: [
            { cellIndex: 39, label: '패널티', hasPin: true },
            { cellIndex: 49, label: '인센티브', hasPin: true },
            { cellIndex: 59, label: '워크인 혜택', hasPin: true },
        ],
        colorCells: [
            { cellIndex: 39, cellColor: 'red' },
            { cellIndex: 49, cellColor: 'green' },
            { cellIndex: 59, cellColor: 'orange' },
        ],
        numeratorNumber: 30,
        denominatorNumber: 60,
        numeratorColor: 'blue',
        denominatorColor: 'lightgray',
        barThikness: 1,
    },
};
exports.WithCustomPinIcon = {
    args: {
        pinCells: [
            { cellIndex: 39, label: '패널티', hasPin: true, PinIcon: outline_1.FaceSmileIcon },
            { cellIndex: 49, label: '인센티브', hasPin: true, PinIcon: outline_1.BanknotesIcon },
            { cellIndex: 59, label: '워크인 혜택', hasPin: true, PinIcon: outline_1.UserGroupIcon },
        ],
        colorCells: [
            { cellIndex: 39, cellColor: 'red' },
            { cellIndex: 49, cellColor: 'green' },
            { cellIndex: 59, cellColor: 'orange' },
        ],
        numeratorNumber: 30,
        denominatorNumber: 60,
        numeratorColor: 'blue',
        denominatorColor: 'lightgray',
        barThikness: 1,
    },
};
