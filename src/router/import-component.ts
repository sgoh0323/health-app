import { lazy } from 'react';

// 파트너사 게시판관리

// sample

const Home = lazy(() => import('../pages/home'));
const Chat = lazy(() => import('../pages/ChatBot/index'));
const Exam = lazy(() => import('../pages/exam'));
const Faq = lazy(() => import('../pages/faq'));
const Mypage = lazy(() => import('../pages/mypage'));
const ChangePwd = lazy(() => import('../pages/changePwd'));
const FindPWD = lazy(() => import('../pages/findPwd'));
const NotificationSettings = lazy(() => import('../pages/notificationSettings'));
const Coaching = lazy(() => import('../pages/healthCoaching'));
const Habit = lazy(() => import('../pages/healthCenter'));

export const COMPONENT_LIST = {
    partnerNoticeList: Exam,
    home: Home,
    chat: Chat,
    faq: Faq,
    mypage: Mypage,
    changepwd: ChangePwd,
    findpwd: FindPWD,
    notisetting: NotificationSettings,
    coaching: Coaching,
    habit: Habit
};
