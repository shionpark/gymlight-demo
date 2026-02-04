import { MemberRegisterForm } from '..';
import * as Styled from './ContractWritingSection.styles';
import { IconButton } from 'gymlight-design-system';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useMemberRegisterForm } from '@/features/member';

interface IContractWritingSectionProps {
  handleClose: () => void;
}

const ContractWritingSection = ({ handleClose }: IContractWritingSectionProps) => {
  const memberRegisterFormProps = useMemberRegisterForm();
  return (
    <Styled.Section>
      <IconButton size="small" variant="primary" icon={<XMarkIcon />} onClick={handleClose} />
      <MemberRegisterForm {...memberRegisterFormProps} />
    </Styled.Section>
  );
};
export default ContractWritingSection;
