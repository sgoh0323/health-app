import { lazy } from 'react';

// 파트너사 게시판관리
const Home = lazy(() => import('../pages/home'));
const Chat = lazy(() => import('../pages/ChatBot/index'));
const Exam = lazy(() => import('../pages/exam'));
const Faq = lazy(() => import('../pages/faq'));
const Mypage = lazy(() => import('../pages/mypage'));

export const COMPONENT_LIST = {
    partnerNoticeList: Exam,
    home: Home,
    chat: Chat,
    faq: Faq,
    mypage: Mypage
};
