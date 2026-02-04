import { ButtonHTMLAttributes } from 'react';
type UserRoleType = '관리자' | '매니저' | '팀장 트레이너' | '트레이너' | '팀장 FC' | 'FC' | '인포' | '전지점 인포';
interface IProfileInfoProps extends ButtonHTMLAttributes<HTMLDivElement> {
    name: string;
    role: UserRoleType;
    branch?: string;
    isDropdown?: boolean;
}
declare const _default: import("react").MemoExoticComponent<{
    ({ name, role, branch, isDropdown, ...rest }: IProfileInfoProps): import("@emotion/react/jsx-runtime").JSX.Element;
    displayName: string;
}>;
export default _default;
