import { SyntheticEvent } from 'react';

export const stopPropagation = (event: SyntheticEvent<HTMLElement>) => event.stopPropagation();
