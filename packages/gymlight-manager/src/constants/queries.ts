export const QUERIES = {
  AUTH: {
    ME: 'me',
  },
  ATTENDANCE: {
    LIST: 'attendance-list',
    SEARCH_LIST: 'attendance-search-list',
  },
  BRANCH: {
    LIST: 'branch-list',
    NAMES: 'branch-name-list',
  },
  TEAM: {
    LIST: 'team-list',
    NAME: 'team-names',
    STAFF: 'team-staff-list',
  },
  STAFF: {
    LIST: 'staff-list',
    TRAINER: 'staff-trainer',
  },
  MEMBER: {
    INFO: 'member-info',
    DETAILS: `member-activity-info`,
    LIST: 'member-list',
    SEARCH_LIST: 'member-search-list',
    ACTIVE: 'member-active',
    REFUNDABLE_PAYMENTS: 'member-refundable-payments',
    CATEGORY: 'member-categories',
  },

  COUPON: {
    LIST: 'coupon-list',
  },
  RESERVATION: {
    LIST: 'reservation-list',
  },
  PRODUCT: {
    LIST: 'product-list',
    CATEGORY: 'product-categories',
    OPTION: 'product-options',
  },
  LOCKER: {
    LIST: 'locker-list',
    DETAIL: 'locker-detail',
    GROUP: 'locker-group-list',
    GROUP_DETAIL: 'locker-group-detail',
  },
  NOTICE: {
    LIST: 'notice-list',
    DETAIL: 'notice-detail',
  },
  KAKAO: {
    MAP: 'kakao-map',
  },
  MY_WORK: {
    SCHEDULE: { LIST: 'schedule-list', DETAILS: 'schedule-detail' },
    MEMBERS: { LIST: 'my-member-list' },
    PERFORMANCE: 'my-performance',
    EXPECTED_SALARY: 'my-expected-salary',
  },
  ACCOUNTING: {
    SALARY_VARIABLES: 'salary-variables',
    PT_INCENTIVE_RATE_WITH_MEMBERSHIP_POINT: 'pt-incentive-with-point',
    PT_INCENTIVE_RATE_WITHOUT_MEMBERSHIP_POINT: 'pt-incentive-without-point',
    PERFORMANCES: 'trainer-performance-list',
    SALARY_SETTLEMENT_LIST: 'salary-settlement-list',
  },
  DASHBOARD: {
    BRANCH: '/dashboard-branches',
    NOTICE: '/dashboard-notice',
    MEMBERS: '/dashboard-members',
    SALES: '/dashboard-sales',
    VISIT: '/dashboard-visits',
    USER: '/dashboard-user',
    PERFORMANCE: '/dashboard-performances',
  },
};
