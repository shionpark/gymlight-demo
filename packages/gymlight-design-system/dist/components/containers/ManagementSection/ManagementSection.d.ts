import { ReactNode } from 'react';
interface IManagementSectionProp {
    tabs?: ReactNode;
    buttons?: ReactNode;
    children: ReactNode;
}
declare const ManagementSection: ({ tabs, buttons, children }: IManagementSectionProp) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ManagementSection;
