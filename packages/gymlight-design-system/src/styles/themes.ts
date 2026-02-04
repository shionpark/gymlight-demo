const color = {
  /**heading text */
  black: '#000000',

  /** default text */
  gray800: '#262626',
  gray700: '#575757',
  /** light text */
  gray600: '#737373',
  gray500: '#8C8C8C',
  gray400: '#A6A6A6',
  gray300: '#BFBFBF',
  /**border */
  gray200: '#EBEBEB',
  /** background */
  gray100: '#f3f3f3',

  /** background */
  white: '#FFFFFF',

  blue800: '#2B498A',
  blue700: '#375EB1',
  blue600: '#4576DE',

  /**primary color */
  blue500: '#4F88FF',
  blue450: '#AED3FF',
  blue400: '#A3C1FF',
  blue300: '#B9D0FF',
  blue200: '#C7DAFF',
  blue100: '#D4E2FF',
  blue000: '#eaffff',

  primary: '#5628FF',
  primary_variant: '#375EB1',
  secondary: '#B9D0FF',
  secondary_variant: '#A3C1FF',
  /**dark red */
  red300: '#B80000',
  /**red */
  red200: '#FF0000',
  /**light red */
  red100: '#FFF2F2',

  pinkPurple: '#FF7E80',
  pinkPurple100: '#F55353',
  pinkPurple804: '#CFA9ff',
  pinkPurple805: '#FFD6E0',
  pinkPurple806: '#FBBEA4',
  pinkPurple807: '#F190B3',

  purple: '#8c8cff',
  purple000: '#F6F6FF',

  green: '#2FC489',
  green100: '#76FF7B',
  green200: '#9FE2BF',
  green800: '#84833E',
  green900: '#827B5E',

  greenBlue: '#90F1EF',
  greenBlue100: `rgba(144,241,249, 0.2)`,
  greenBlue200: '#27f9f9',

  yellow: '#FFEF9F',
  yellow000: '#FFFCF1',
  yellow100: `rgba(255,239,159,0.2)`,
  yellow200: ' #F1D090',
  yellow300: ' #ffd747',

  orange: '#FFD6A5',
  orange100: '#FFA059',
  yellow400: ' #FF7F3E',

  yellowGreen: '#C3FF93',
} as const;

export const theme = {
  color: {
    primary: color.primary,
    secondary: color.secondary,
    error: color.red200,
    white: color.white,
    lightGray: color.gray400,
  } as const,

  button: {
    default: color.gray200,
    hover: color.gray100,
    disabled: color.gray300,
    active: color.gray600,
    activeReverse: color.gray100,
  } as const,

  border: {
    default: color.gray200,
    light: color.gray100,
    dark: color.gray300,
  } as const,

  background: {
    default: color.gray100,
    light: color.white,
    dark: color.gray800,
  } as const,

  font: {
    default: color.gray800,
    reverse: color.white,
    dark: color.black,
    light: color.gray700,
  } as const,

  memberStatus: {
    active: color.green100,
    expired: color.pinkPurple806,
    holding: color.pinkPurple807,
    expiredSoon: color.yellow400,
  },

  branchStatus: {
    영업중: color.green100,
    폐점: color.pinkPurple806,
    휴점: color.pinkPurple807,
    리모델링중: color.yellow400,
  },

  productColor: {
    clothes: color.blue400,
    PT: color.greenBlue,
    membership: color.yellow,
    locker: color.pinkPurple804,
    package: color.yellowGreen,
  },

  WorkStatusColor: {
    done: color.green200,
    soon: color.pinkPurple805,
  },

  LessonColor: {
    OT: color.orange,
    PT: color.blue450,
  },

  tableCells: {
    holiday: color.pinkPurple,
    OT: color.yellow100,
    PT: color.greenBlue100,
    NORMAL: color.gray100,
  },

  performance: {
    achievement: color.blue500,
    unAchievement: color.gray500,

    basicRequirement: color.orange,
    incentive: color.yellow400,
    benefit: color.green,
  },

  memberDetailsFlag: {
    활성화: color.green100,
    만료: color.pinkPurple806,
    홀딩: color.pinkPurple807,
    삭제: color.gray500,
    만료예정: color.yellow400,
    예약중: color.red100,
    운동복: color.blue400,
    PT: color.greenBlue,
    회원권: color.yellow,
    락커: color.pinkPurple804,
    패키지: color.yellowGreen,
  } as const,

  noticeColors: {
    notice: color.blue400,
    event: color.orange,
    undefined: color.gray300,
  },
  accountingStatus: {
    정산대기: color.orange100,
    정산완료: color.green200,
  },

  staffStatusFlag: {
    활성화: color.green100,
    비활성화: '#84833E',
    승인대기: color.gray300,
    승인거부: '#FFA059',
    탈퇴요청: '#827B5E',
  } as const,

  memberCardColors: {
    activeMembersCount: color.purple000,
    newMembersTodayCount: color.blue000,
    expiringMembersThisMonthCount: color.yellow000,
  },

  memberCardIconColors: {
    activeMembersCount: color.purple,
    newMembersTodayCount: color.greenBlue200,
    expiringMembersThisMonthCount: color.yellow300,
  },
};

export type Theme = typeof theme;
