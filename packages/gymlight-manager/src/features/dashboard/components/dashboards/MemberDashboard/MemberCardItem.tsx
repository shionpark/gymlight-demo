import { UserIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/24/outline';

import { theme } from '@/styles';
import { PercentDisplay } from '@/features/dashboard/components/PercentDisplay';

import * as Styled from './MemberCardItem.styles';

interface TypeConfig {
  [key: string]: {
    IconComponent: React.ComponentType;
    backgroundColor: string;
    iconColor: string;
  };
}

const typeConfig: TypeConfig = {
  '활성 회원': {
    IconComponent: UserIcon,
    backgroundColor: theme.memberCardColors.activeMembersCount,
    iconColor: theme.memberCardIconColors.activeMembersCount,
  },
  '신규 등록 회원': {
    IconComponent: UserPlusIcon,
    backgroundColor: theme.memberCardColors.newMembersTodayCount,
    iconColor: theme.memberCardIconColors.newMembersTodayCount,
  },
  '당월 만료 회원': {
    IconComponent: UserMinusIcon,
    backgroundColor: theme.memberCardColors.expiringMembersThisMonthCount,
    iconColor: theme.memberCardIconColors.expiringMembersThisMonthCount,
  },
};

interface IMemberCardItemProps {
  label: string;
  counts: string | number;
}

const MemberCardItem = ({ label, counts }: IMemberCardItemProps) => {
  const { IconComponent, backgroundColor, iconColor } =
    typeConfig[label] || typeConfig['활성 회원'];

  return (
    <Styled.CardWrapper backgroundColor={backgroundColor} iconColor={iconColor}>
      <IconComponent />

      <Styled.DataCounts>
        <span>{counts}명</span>
        <span>{label}</span>
      </Styled.DataCounts>

      <Styled.ComparedWrapper>
        <PercentDisplay percent={0.07} />
        <span>지난달 대비</span>
      </Styled.ComparedWrapper>
    </Styled.CardWrapper>
  );
};

export default MemberCardItem;
