import { SquareButton } from 'gymlight-design-system';
import type { UserRoleType } from '@/types';

import * as Styled from './FilterOptions.styles';

interface FilterOptionsProps {
  label: string;
  options: UserRoleType[];
  toggleRole: (option: UserRoleType) => void;
  isRoleActive: (option: UserRoleType) => boolean;
}

const FilterOptions = ({ label, options, toggleRole, isRoleActive }: FilterOptionsProps) => (
  <Styled.OptionWrapper>
    <span>{label}</span>
    <div>
      {options.map((option) => (
        <SquareButton
          size="small"
          key={option}
          onClick={() => toggleRole(option)}
          variant={isRoleActive(option) ? 'primary' : 'outline'}
        >
          {option}
        </SquareButton>
      ))}
    </div>
  </Styled.OptionWrapper>
);

export default FilterOptions;
