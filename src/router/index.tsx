import React, { Suspense, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import useUser from 'hooks/user';
// import { menuState } from 'stores/user/state';

import { useSelector } from 'react-redux';

import { ScrollToTop, PageLoading, Template } from 'components';

import { getAccessToken } from 'api/authUtil';
import page403 from 'pages/exception/page403';
import page404 from 'pages/exception/page404';
import page500 from 'pages/exception/page500';
import Login from 'pages/login';
import FindPWD from 'pages/findPwd';
import { IMenuItem } from './interface';

import { COMPONENT_LIST } from './import-component';
import { TabBar, Badge, NavBar } from 'antd-mobile';
import { AppleOutlined, MessageFilled, MessageOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import modal from 'helper/customModal';
import TabMenu from 'layout/tabMenu';
import Navbar from 'layout/navbar';
import { Splash } from 'pages/splash';

import Home from '../pages/home';
import Chat from '../pages/ChatBot/index';
import Exam from '../pages/exam';
import Faq from '../pages/faq';
import Mypage from '../pages/mypage';
import ChangePwd from '../pages/changePwd';
import FindPwd from '../pages/findPwd';
import NotificationSettings from '../pages/notificationSettings';
import HealthCoaching from '../pages/healthCoaching';
import HealthHabit from '../pages/healthHabit';

const Router: React.FunctionComponent = () => {
    const { userInfo } = useUser();
    const [vSplash, setVSplash] = useState(true);
    const menuSubItemList = [
        {
            icon: null,
            key: 'home',
            label: 'Home',
            path: '/home',
            level: 0,
            parentKey: '',
            components: 'home',
            header: false,
            tabnav: true
        },
        {
            icon: null,
            key: 'chat',
            label: 'Chat',
            path: '/chat',
            level: 0,
            parentKey: '',
            components: 'chat',
            header: false,
            tabnav: false
        },
        {
            icon: null,
            key: 'faq',
            label: 'Faq',
            path: '/faq',
            level: 0,
            parentKey: '',
            components: 'faq',
            header: true,
            tabnav: true
        },
        {
            icon: null,
            key: 'mypage',
            label: '내정보',
            path: '/mypage',
            level: 0,
            parentKey: '',
            components: 'mypage',
            header: true,
            tabnav: true
        },
        {
            icon: null,
            key: 'changepwd',
            label: '비밀번호 설정',
            path: '/changepwd',
            level: 0,
            parentKey: '',
            components: 'changepwd',
            header: true,
            tabnav: true
        },
        {
            icon: null,
            key: 'findpwd',
            label: '비밀번호 찾기',
            path: '/findpwd',
            level: 0,
            parentKey: '',
            components: 'findpwd',
            header: true,
            tabnav: true
        },
        {
            icon: null,
            key: 'notisetting',
            label: '알림 설정',
            path: '/notisetting',
            level: 0,
            parentKey: '',
            components: 'notisetting',
            header: true,
            tabnav: true
        },
        {
            icon: null,
            key: 'coaching',
            label: '건강코칭',
            path: '/coaching',
            level: 0,
            parentKey: '',
            components: 'coaching',
            header: true,
            tabnav: true
        },
        {
            icon: null,
            key: 'habit',
            label: '건강 습관',
            path: '/habit',
            level: 0,
            parentKey: '',
            components: 'habit',
            header: true,
            tabnav: true
        }
    ];
    const madeRouteList = apiRoutes => {
        const data = [];

        const makeListItem = (item: IMenuItem) => {
            if (item.path !== '/menu') {
                data.push({
                    ...item,
                    exact: true,
                    components: COMPONENT_LIST[item.components]
                });
            }
        };
        apiRoutes.forEach(item => makeListItem(item));
        return data;
    };

    return (
        <BrowserRouter>
            {vSplash && <Splash onStart={setVSplash} />}
            {!vSplash && userInfo?.userId !== '' && (
                <>
                    <Switch>
                        <Route exact path="/404" component={page404} />
                        <Route exact path="/error" component={page500} />

                        <Route exact path="/home" component={Home} />
                        <Route exact path="/chat" component={Chat} />
                        <Route exact path="/faq" component={Faq} />
                        <Route exact path="/mypage" component={Mypage} />
                        <Route exact path="/changepwd" component={ChangePwd} />
                        <Route exact path="/findpwd" component={FindPwd} />
                        <Route exact path="/notisetting" component={NotificationSettings} />
                        <Route exact path="/coaching" component={HealthCoaching} />
                        <Route exact path="/habit" component={HealthHabit} />

                        <Route path="*" component={page404} />
                    </Switch>
                    <TabMenu />

                    {/* <TabMenu tabs={tabs} location={location} /> */}
                </>
            )}
            {!vSplash && userInfo?.userId === '' && (
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/findpwd" component={FindPWD} />
                    <Route exact path="*" component={Login} />
                </Switch>
            )}
        </BrowserRouter>
    );
};

export default Router;
