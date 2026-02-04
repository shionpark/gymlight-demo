import { ChangeEvent } from 'react';

import { Select } from 'gymlight-design-system';

interface ISelectBranchesProps {
  branchNames?: string[];
  onBranchChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBranches = ({ branchNames, onBranchChange }: ISelectBranchesProps) => {
  return (
    <Select onChange={onBranchChange}>
      {branchNames &&
        branchNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
    </Select>
  );
};

export default SelectBranches;
