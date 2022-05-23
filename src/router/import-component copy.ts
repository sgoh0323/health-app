import { lazy } from 'react';

// 파트너사 게시판관리
const PartnerNoticeList = lazy(() => import('../pages/Partner/notice/list'));
const PartnerNoticeNew = lazy(() => import('../pages/Partner/notice/new'));
const PartnerDirectList = lazy(() => import('../pages/Partner/direct/list'));

// sample

const Sample = lazy(() => import('../pages/SamplePage'));
const Home = lazy(() => import('../pages/home'));
const Chat = lazy(() => import('../pages/ChatBot/index'));
const Exam = lazy(() => import('../pages/exam'));
const Faq = lazy(() => import('../pages/faq'));
const Mypage = lazy(() => import('../pages/mypage'));

export const COMPONENT_LIST = {
    partnerNoticeList: Exam,
    partnerNoticeNew: PartnerNoticeNew,
    partnerDirectList: PartnerDirectList,

    sample: Sample,
    home: Home,
    chat: Chat,
    faq: Faq,
    mypage: Mypage
};
