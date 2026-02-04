export const URLS = {
  CLIENT: {
    ROOT: '/',

    // 대시보드
    DASHBOARD: '/',

    // 인증/인가
    JOIN: '/join',
    LOGIN: '/login',

    // 마이 페이지
    MY_PAGE: '/my-page',

    // 공통 페이지
    NOTICE: '/notices',
    NOTICE_ID: ':noticeId',
    MEMBER: '/members',
    PRODUCT: '/products',
    LOCKER: '/lockers',
    ATTENDANCE: '/attendances',

    // 관리자 페이지
    STAFF: '/staffs',
    STATISTICS: '/statistics',
    ACCOUNTING: '/accounting',
    BRANCH: '/branches',
    TEAM: '/teams',

    // 사용자 페이지 - 트레이너
    MY_WORK: '/my-work',
    SCHEDULE: '/schedules',
    PERFORMANCE: '/performances',

    // 레이아웃 밖
    CHECK_IN: '/check-in',

    DEFAULT_PROFILE: '/images/profile.png',
  },
  API: {
    PREFIX: '/api',
    AUTH: {
      JOIN: '/auth/join',
      LOGIN: '/auth/login',
      LOGOUT: '/auth/logout',
      REFRESH: '/auth/refresh',
    },
    ATTENDANCES: {
      CREATE: '/attendances/check-in',
      RUD: '/attendances',
      SEARCH: '/attendances/search',
    },
    USERS: {
      ME: '/users/me',
      MY_MEMBER: '/users/me/members',
      MY_PERFORMANCE: '/users/me/performance',
      MY_EXPECTED_SALARY: '/users/me/expected-salary',
      SALARY_SETTLEMENT: '/users/me/salary',
    },
    BRANCHES: {
      CREATE: '/branches/create',
      RUD: '/branches',
      NAMES: 'branches/names',
    },
    TEAMS: {
      CREATE: '/teams/create',
      RUD: '/teams',
      PATH_SEGMENT: {
        MEMBERS: 'members',
      },
    },
    STAFFS: {
      CREATE: '/staffs/create',
      RUD: '/staffs',
      LEADER_TRAINER: '/staffs/leader-trainer',
      LEADER_FC: '/staffs/leader-fc',
      TRAINER: '/staffs/trainers',
      FC: '/staffs/fc',
      PATH_SEGMENT: {
        UPDATE: 'update',
      },
    },
    MEMBERS: {
      RUD: '/members',
      READ_ACTIVE: '/members/active',
      SEARCH: '/members/search',
      CATEGORIES: '/members/categories',
      REGISTER_NEW: '/members/register',
      PATH_SEGMENT: {
        CONTRACT: 'contract',
        RE_REGISTER: 're-register',
        REGISTER_TRANSFER: 'register-transfer',
        PURCHASE_ADDITIONAL_OPTION: 'purchase-additional-option',
        HOLDING: 'holding',
        REFUNDABLE: 'refundable',
        REQUEST_REFUND: 'request-refund',
        INFO: 'info',
        UPDATE: 'update',
        ASSIGN_TRAINER: 'assign-trainer',
      },
    },
    RESERVATIONS: {
      REGISTER: '/reservations/register',
      RUD: '/reservations',
      UPDATE: '/reservations/update',
    },
    COUPONS: {
      REGISTER: '/coupons/register',
      RUD: '/coupons',
    },
    PRODUCTS: {
      CREATE: '/products/create',
      RUD: '/products',
      CATEGORY: '/products/categories',
      PACKAGE: {
        CREATE: '/products/create-package',
      },
    },
    LOCKERS: {
      RUD: '/lockers',
      CREATE_GROUP: '/locker-groups/create',
      GROUPS: '/locker-groups',
      ASSIGN: 'assign-member',
      UNASSIGN: 'unassign-member',
    },
    NOTICES: {
      CREATE: '/notices/create',
      RUD: '/notices',
    },
    SCHEDULE: {
      RUD: '/schedules',
      CREATE: '/schedules/register',
    },
    CLASSES: {
      CHECK: '/classes/check',
    },
    KAKAO_MAP: {
      SEARCH: '/search/address.json',
    },
    ACCOUNTING: {
      SALARY_VARIABLES: {
        UD: '/accountings',
        R: '/accountings/salary-variables',
        PT_INCENTIVE_RATE_WITH_MEMBERSHIP_POINTS: `/accountings/pt-incentive-rate-with-membership`,
        PT_INCENTIVE_RATE_WITHOUT_MEMBERSHIP_POINTS: `/accountings/pt-incentive-rate-without-membership`,
      },
      SALARY_SETTLEMENT_LIST: '/accountings/salary-settlements',
      SALARY_SETTLEMENT_UPDATE: '/accountings/update-salary-settlement',
    },
    DASHBOARD: {
      BRANCH: '/dashboard/branches',
      NOTICE: '/dashboard/notice',
      MEMBERS: '/dashboard/members',
      SALES: '/dashboard/sales',
      VISIT: '/dashboard/visits',
      USER: '/dashboard/user',
      PERFORMANCE: '/dashboard/performances',
    },
    PERFORMANCES: { RUD: '/performances' },
  },
} as const;
