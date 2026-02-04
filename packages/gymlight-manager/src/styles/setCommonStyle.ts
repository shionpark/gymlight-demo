import { css } from '@emotion/react';

export const flexStyle = css`
  display: flex;
  align-items: center;
`;

export const flexColumnStyle = css`
  display: flex;
  flex-direction: column;
`;

export const flexCenterStyle = css`
  ${flexStyle}
  justify-content: center;
`;

export const buttonsWrapper = css`
  ${flexStyle};
  gap: 0.4rem;
`;
