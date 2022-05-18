/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const mockData = {
    user: { data: { userId: '001', name: '오승근', deptNm: '개발팀' } },
    menu: {
        data: [
            {
                icon: null,
                key: 'partnerMgmt',
                label: '게시판관리',
                path: '/menu',
                level: 0,
                parentKey: '',
                components: ''
            },
            {
                icon: null,
                key: 'partnerNoticeList',
                label: '파트너 공지사항',
                path: '/partner/notice/list',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerNoticeList'
            },
            {
                icon: null,
                key: 'partnerNoticeNew',
                label: '공지사항 등록',
                path: '/partner/notice/new',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerNoticeNew'
            },
            {
                icon: null,
                key: 'partnerDirectList',
                label: '파트너 1:1 문의',
                path: '/notices/direct/',
                level: 1,
                parentKey: 'partnerMgmt',
                components: 'partnerDirectList'
            },

            {
                icon: null,
                key: 'sample',
                label: 'Sample',
                path: '/sample',
                level: 0,
                parentKey: '',
                components: 'sample'
            },
            {
                icon: null,
                key: 'home',
                label: 'Home',
                path: '/home',
                level: 0,
                parentKey: '',
                components: 'home'
            },
            {
                icon: null,
                key: 'chat',
                label: 'Chat',
                path: '/chat',
                level: 0,
                parentKey: '',
                components: 'chat'
            },
            {
                icon: null,
                key: 'faq',
                label: 'Faq',
                path: '/faq',
                level: 0,
                parentKey: '',
                components: 'faq'
            }
        ]
    },
    userList: []
};
export default mockData;
