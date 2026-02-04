import styled from '@emotion/styled';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { DropdownForMenu } from 'gymlight-design-system';

export const OptionWrapper = styled(DropdownForMenu)`
  display: flex;
  align-items: center;

  text-align: left;
  white-space: nowrap;
  gap: 0.4rem;

  & > svg {
    width: 2rem;
  }
`;

export const Icon = styled(ChevronDownIcon)`
  width: 1.2rem;
  margin-left: 1rem;
`;
