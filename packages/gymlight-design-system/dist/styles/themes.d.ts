export declare const theme: {
    color: {
        readonly primary: "#5628FF";
        readonly secondary: "#B9D0FF";
        readonly error: "#FF0000";
        readonly white: "#FFFFFF";
        readonly lightGray: "#A6A6A6";
    };
    button: {
        readonly default: "#EBEBEB";
        readonly hover: "#f3f3f3";
        readonly disabled: "#BFBFBF";
        readonly active: "#737373";
        readonly activeReverse: "#f3f3f3";
    };
    border: {
        readonly default: "#EBEBEB";
        readonly light: "#f3f3f3";
        readonly dark: "#BFBFBF";
    };
    background: {
        readonly default: "#f3f3f3";
        readonly light: "#FFFFFF";
        readonly dark: "#262626";
    };
    font: {
        readonly default: "#262626";
        readonly reverse: "#FFFFFF";
        readonly dark: "#000000";
        readonly light: "#575757";
    };
    memberStatus: {
        active: "#76FF7B";
        expired: "#FBBEA4";
        holding: "#F190B3";
        expiredSoon: " #FF7F3E";
    };
    branchStatus: {
        영업중: "#76FF7B";
        폐점: "#FBBEA4";
        휴점: "#F190B3";
        리모델링중: " #FF7F3E";
    };
    productColor: {
        clothes: "#A3C1FF";
        PT: "#90F1EF";
        membership: "#FFEF9F";
        locker: "#CFA9ff";
        package: "#C3FF93";
    };
    WorkStatusColor: {
        done: "#9FE2BF";
        soon: "#FFD6E0";
    };
    LessonColor: {
        OT: "#FFD6A5";
        PT: "#AED3FF";
    };
    tableCells: {
        holiday: "#FF7E80";
        OT: "rgba(255,239,159,0.2)";
        PT: "rgba(144,241,249, 0.2)";
        NORMAL: "#f3f3f3";
    };
    performance: {
        achievement: "#4F88FF";
        unAchievement: "#8C8C8C";
        basicRequirement: "#FFD6A5";
        incentive: " #FF7F3E";
        benefit: "#2FC489";
    };
    memberDetailsFlag: {
        readonly 활성화: "#76FF7B";
        readonly 만료: "#FBBEA4";
        readonly 홀딩: "#F190B3";
        readonly 삭제: "#8C8C8C";
        readonly 만료예정: " #FF7F3E";
        readonly 예약중: "#FFF2F2";
        readonly 운동복: "#A3C1FF";
        readonly PT: "#90F1EF";
        readonly 회원권: "#FFEF9F";
        readonly 락커: "#CFA9ff";
        readonly 패키지: "#C3FF93";
    };
    noticeColors: {
        notice: "#A3C1FF";
        event: "#FFD6A5";
        undefined: "#BFBFBF";
    };
    accountingStatus: {
        정산대기: "#FFA059";
        정산완료: "#9FE2BF";
    };
    staffStatusFlag: {
        readonly 활성화: "#76FF7B";
        readonly 비활성화: "#84833E";
        readonly 승인대기: "#BFBFBF";
        readonly 승인거부: "#FFA059";
        readonly 탈퇴요청: "#827B5E";
    };
    memberCardColors: {
        activeMembersCount: "#F6F6FF";
        newMembersTodayCount: "#eaffff";
        expiringMembersThisMonthCount: "#FFFCF1";
    };
    memberCardIconColors: {
        activeMembersCount: "#8c8cff";
        newMembersTodayCount: "#27f9f9";
        expiringMembersThisMonthCount: " #ffd747";
    };
};
export type Theme = typeof theme;
