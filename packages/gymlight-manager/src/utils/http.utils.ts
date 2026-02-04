import type { Path, Location } from 'react-router';

import { LOCAL_STORAGE } from '@/constants';

import { isRedirectLocationState } from './type.utils';

export const parseRoutePathToString = (redirect: Path) => {
  return `${redirect.pathname}${redirect.search}${redirect.hash}`;
};

export const setRedirect = (location: Location) => {
  if (!isRedirectLocationState(location.state)) return;

  const excludeUrls = new Set(['/join', '/login']);
  if (excludeUrls.has(location.state.redirect.pathname)) return;

  localStorage.setItem(LOCAL_STORAGE.REDIRECT, parseRoutePathToString(location.state.redirect));
};

export const getRedirect = () => {
  const redirectTo = localStorage.getItem(LOCAL_STORAGE.REDIRECT) || '/';
  localStorage.removeItem(LOCAL_STORAGE.REDIRECT);

  return redirectTo;
};

export const parseLocationToRedirect = (location: Location): Path => {
  return {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  };
};

export const setIsLoggedIn = () => {
  localStorage.setItem(LOCAL_STORAGE.LOGGED_IN, 'loggedIn');
};
export const getIsLoggedIn = () => {
  return localStorage.getItem(LOCAL_STORAGE.LOGGED_IN);
};

export const removeIsLoggedIn = () => {
  localStorage.removeItem(LOCAL_STORAGE.LOGGED_IN);
};
