import React, { Suspense, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
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

    const tabs = [
        {
            key: 'sample',
            title: '마이코칭',
            icon: <AppleOutlined />,
            // badge: Badge.dot,
            path: '/sample'
        },
        {
            key: 'todo',
            title: '매일매일챌린지',
            icon: <UnorderedListOutlined />,
            // badge: '5',
            path: '/partner/notice/list'
        },
        {
            key: 'home',
            title: '홈',
            icon: <UnorderedListOutlined />,
            // badge: '5',
            path: '/home'
        },
        {
            key: 'message',
            title: '푸드렌즈',
            icon: (active: boolean) => (active ? <MessageFilled /> : <MessageOutlined />),
            // badge: '99+',
            path: '/partner/notice/new'
        },
        {
            key: 'personalCenter',
            title: '이벤트',
            icon: <UserOutlined />
        },
        {
            key: 'chat',
            title: 'Chat',
            path: '/chat',
            icon: <UserOutlined />
        },
        {
            key: 'faq',
            title: 'FAQ',
            path: '/faq',
            icon: <UserOutlined />
        }
    ];

    return (
        <HashRouter>
            {vSplash && <Splash onStart={setVSplash} />}
            {!vSplash && userInfo?.userId !== '' && (
                <>
                    <Suspense fallback={<></>}>
                        <Route
                            render={({ location }) => {
                                return (
                                    <>
                                        <TransitionGroup>
                                            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                                                <Switch location={location}>
                                                    <Route exact path="/error" component={page500} />
                                                    <Route exact path="/404" component={page404} />
                                                    {/* <Route exact path="/dashboard" component={DashBoard} /> */}
                                                    {menuSubItemList &&
                                                        madeRouteList(menuSubItemList).map(route => {
                                                            return (
                                                                // <main
                                                                //     style={{
                                                                //         position: 'fixed',
                                                                //         top: `${route.header ? 45 : 0}`,
                                                                //         height: `calc( 100vh ${
                                                                //             route.header ? '-45px' : ''
                                                                //         }${route.tabnav ? '-50px' : ''})`,
                                                                //         overflowY: 'auto',
                                                                //         overflowX: 'hidden',
                                                                //         // padding: '10px',
                                                                //         width: '100vW'
                                                                //     }}>
                                                                <Route
                                                                    path={route.path}
                                                                    exact={!route.dontUseExact}
                                                                    key={`${route.key}/:id`}
                                                                    component={route.components}
                                                                />
                                                                // </main>
                                                            );
                                                        })}
                                                    <Route path="*" component={page404} />
                                                    {/* <Route
                                                            exact
                                                            path="/dashboard"
                                                            component={COMPONENT_LIST.dashboard}
                                                        />
                                                        <Route
                                                            exact
                                                            path="/userMgmt/list"
                                                            component={COMPONENT_LIST.userList}
                                                        />
                                                        <Route path="*" component={page404} /> */}
                                                </Switch>
                                            </CSSTransition>
                                        </TransitionGroup>

                                        {/* <TabMenu tabs={tabs} location={location} /> */}
                                        <TabMenu />
                                    </>
                                );
                            }}
                        />
                    </Suspense>
                </>
            )}{' '}
            {!vSplash && userInfo?.userId === '' && (
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/findpwd" component={FindPWD} />
                    <Route exact path="*" component={Login} />
                </Switch>
            )}
        </HashRouter>
    );
};

export default Router;
