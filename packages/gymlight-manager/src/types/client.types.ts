import type { Path, To } from 'react-router';

export type AuthType = '회원가입' | '로그인';

export type HerosIconType = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

export type MenuItemType = {
  icon: HerosIconType;
  label: string;
};

export type DictionaryType<T> = Record<string, T>;

export interface IMenuItem {
  icon?: JSX.Element;
  label: string | undefined;
  to: To;
}

export interface IRedirectLocationState {
  redirect: Path;
}

export interface ICustomLocationState {
  redirect: {
    pathname: string;
    search: string;
    hash: string;
  };
}

export interface ICustomLocation extends Location {
  state: ICustomLocationState;
}
