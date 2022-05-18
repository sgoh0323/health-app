/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const mockData = {
    user: { data: { userId: '001', name: '김민경', deptNm: '개발팀' } },
    menu: {
        data: [
            {
                icon: null,
                key: 'dashboard',
                label: 'DASHBOARD',
                path: '/dashboard',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'userMgmt',
                label: '고객회원관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'userList',
                label: '회원 정보 조회',
                path: '/userMgmt/list',
                level: 1,
                parentKey: 'userMgmt',
                components: 'dashboard'
            },
            {
                icon: null,
                key: '/userMgmt/new',
                label: '회원 추가',
                path: '/userMgmt/new',
                level: 1,
                parentKey: 'userMgmt',
                components: 'dashboard'
            },
            {
                icon: null,
                key: '/userMgmt/list1',
                label: '탈퇴회원 조회',
                path: '/userMgmt/list1',
                level: 1,
                parentKey: 'userMgmt',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'notices',
                label: '파트너 게시판관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: '/notices/list ',
                label: '파트너 공지사항',
                path: '/notices/list',
                level: 1,
                parentKey: 'notices',
                components: 'noticeList'
            },
            {
                icon: null,
                key: '/notices/notice/',
                label: '공지사항 등록',
                path: '/notices/notice/:id',
                level: 1,
                parentKey: 'notices',
                components: 'noticeNew'
            },
            {
                icon: null,
                key: '/notices/direct',
                label: '파트너 1:1 문의',
                path: '/notices/direct/:id',
                level: 1,
                parentKey: 'notices',
                components: 'noticeNew'
            },
            {
                icon: null,
                key: 'cboard',
                label: '고객 게시판관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: ''
            },
            {
                icon: null,
                key: 'noticesList',
                label: '상품문의 조회',
                path: '/cboard/list',
                level: 1,
                parentKey: 'cboard',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'noticesNew',
                label: '1:1 문의',
                path: '/cboard/notice/:id',
                level: 1,
                parentKey: 'cboard',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'coupon',
                label: '쿠폰 관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: '/coupon/list',
                label: '쿠폰 관리',
                path: '/coupon/list',
                level: 1,
                parentKey: 'coupon',
                components: 'dashboard'
            },
            {
                icon: null,
                key: '/coupon/new',
                label: '상품쿠폰등록',
                path: '/coupon/new',
                level: 1,
                parentKey: 'coupon',
                components: 'dashboard'
            },
            {
                icon: null,
                key: '/coupon/new1',
                label: '장바구니쿠폰등록',
                path: '/coupon/new1',
                level: 1,
                parentKey: 'coupon',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'test1',
                label: '혜택 관리',
                path: '',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'test2',
                label: '마일리지 관리',
                path: '',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'test3',
                label: '멤버쉽 관리',
                path: '',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'test4',
                label: '업체 관리',
                path: '',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'test5',
                label: '프로모션 관리',
                path: '',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            },
            {
                icon: null,
                key: 'test6',
                label: '운영자 관리',
                path: '',
                level: 0,
                parentKey: '',
                components: 'dashboard'
            }
        ]
    },
    userList: [],
    managerList: {
        message: '성공하였습니다.',
        result: {
            total: 6,
            list: [
                { number: 1, target: '힙합퍼', md: '박지수', name: '한종호(jeyhan)' },
                { number: 2, target: '파트너', md: '박지수', name: '㈜아이스(panam01)' },
                { number: 3, target: '파트너', md: '박지수', name: '나앤나(nanna2015)' },
                { number: 4, target: '파트너', md: '박지수', name: '주식회사뷰티드앤코(thebeautid)' },
                { number: 5, target: '파트너', md: '고현욱', name: '에스이에스티(sest)' },
                { number: 6, target: '파트너', md: '고현욱', name: '아라트레이딩(beautilful)' },
                { number: 8, target: '파트너', md: '고현욱', name: '늘푸른EMB(criscelo)' },
                { number: 9, target: '파트너', md: '고현욱', name: '에이전트픽 리버스(reverse)' },
                { number: 10, target: '파트너', md: '고현욱', name: '플라이런웨이(flyrunway)' }
            ]
        }
    }
};
export default mockData;
