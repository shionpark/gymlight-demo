import { ButtonFilterOptionBox } from '@/components';

import type { IButtonFilterOptionBoxProps } from '@/components/ButtonFilterOptionBox/ButtonFilterOptionBox';

import * as Styled from '@/features/member/components/filterMenus/FilterMenu.styles';

interface IReservationFilterMenuProps {
  reservationPathOptionBoxProps: IButtonFilterOptionBoxProps;
  productCategoryOptionBoxProps: IButtonFilterOptionBoxProps;
}

const ReservationFilterMenu = ({
  reservationPathOptionBoxProps,
  productCategoryOptionBoxProps,
}: IReservationFilterMenuProps) => (
  <Styled.Wrapper>
    <Styled.Container>
      <h5>세부 필터링</h5>
      <Styled.StyledColumn>
        <ButtonFilterOptionBox {...reservationPathOptionBoxProps} />
        <ButtonFilterOptionBox {...productCategoryOptionBoxProps} />
      </Styled.StyledColumn>
    </Styled.Container>
  </Styled.Wrapper>
);

export default ReservationFilterMenu;
