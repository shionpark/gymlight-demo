import { DateFilterOptionBox, ButtonFilterOptionBox } from '@/components';

import type { IButtonFilterOptionBoxProps } from '@/components/ButtonFilterOptionBox/ButtonFilterOptionBox';
import type { IDateFilterOptionBoxProps } from '@/components/DateFilterOptionBox/DateFilterOptionBox';

import * as Styled from '@/features/member/components/filterMenus/FilterMenu.styles';

interface IRegisteredMemberFilterMenuProps {
  dateFilterOptionBoxProps: IDateFilterOptionBoxProps;
  genderFilterOptionBoxProps: IButtonFilterOptionBoxProps;
  memberStatusFilterOptionBoxProps: IButtonFilterOptionBoxProps;
}
const RegisteredMemberFilterMenu = ({
  dateFilterOptionBoxProps,
  genderFilterOptionBoxProps,
  memberStatusFilterOptionBoxProps,
}: IRegisteredMemberFilterMenuProps) => (
  <Styled.Wrapper>
    <Styled.Container>
      <h5>세부 필터링</h5>
      <Styled.StyledColumn>
        <ButtonFilterOptionBox {...genderFilterOptionBoxProps} />
        <ButtonFilterOptionBox {...memberStatusFilterOptionBoxProps} />
        <DateFilterOptionBox {...dateFilterOptionBoxProps} />
      </Styled.StyledColumn>
    </Styled.Container>
  </Styled.Wrapper>
);

export default RegisteredMemberFilterMenu;
