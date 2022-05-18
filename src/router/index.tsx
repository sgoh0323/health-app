import React, { Suspense, lazy, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HashRouter, Switch, Route, Redirect, useHistory, Link } from 'react-router-dom';
import useUser from 'hooks/user';
// import { menuState } from 'stores/user/state';

import { useSelector } from 'react-redux';

import { ScrollToTop, PageLoading, Template } from 'components';

import { getAccessToken } from 'api/authUtil';
import page403 from 'pages/exception/page403';
import page404 from 'pages/exception/page404';
import page500 from 'pages/exception/page500';
import Login from 'pages/login';
import { IMenuItem } from './interface';

import { COMPONENT_LIST } from './import-component';
import { TabBar, Badge, NavBar } from 'antd-mobile';
import { AppleOutlined, MessageFilled, MessageOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import modal from 'helper/customModal';
import TabMenu from 'layout/tabMenu';
import Navbar from 'layout/navbar';
import { Splash } from 'pages/splash';

const Router: React.FunctionComponent = () => {
    const { dispatchMenuList, dispatchUserInfo, menuSubItemList, userInfo } = useUser();
    const [vSplash, setVSplash] = useState(true);
    const history = useHistory();
    useEffect(() => {
        console.log(userInfo);
        if (userInfo?.userId !== '') {
            dispatchMenuList();
        }
        // getAccessToken(dispatchMenuList);
        // dispatchComonCode({ grpCd: '' });
    }, [userInfo]);

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

    useEffect(() => {
        // dispatchUserInfo();
        // dispatchMenuList();
        console.log('menuSubItemList');
        console.log(menuSubItemList);
    }, [menuSubItemList]);

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
                                        {/* <NavBar
                                            onBack={() => {
                                                history.goBack();
                                            }}
                                            backArrow={<UnorderedListOutlined />}
                                            className="aimmed_nav">
                                            건강코칭
                                        </NavBar> */}
                                        <Navbar />
                                        <main
                                            style={{
                                                position: 'fixed',
                                                top: 45,
                                                height: 'calc( 100vh - 95px )',
                                                overflowY: 'auto',
                                                overflowX: 'hidden',
                                                // padding: '10px',
                                                width: '100vW'
                                            }}>
                                            <TransitionGroup>
                                                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                                    <Switch location={location}>
                                                        <Route exact path="/error" component={page500} />
                                                        <Route exact path="/404" component={page404} />
                                                        {/* <Route exact path="/dashboard" component={DashBoard} /> */}
                                                        {menuSubItemList &&
                                                            madeRouteList(menuSubItemList).map(route => {
                                                                return (
                                                                    <Route
                                                                        path={route.path}
                                                                        exact={!route.dontUseExact}
                                                                        key={`${route.key}/:id`}
                                                                        component={route.components}
                                                                    />
                                                                );
                                                            })}
                                                        {menuSubItemList.length > 0 && (
                                                            <Route path="*" component={page404} />
                                                        )}
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
                                        </main>
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
                <HashRouter>
                    {/* <Suspense fallback={<PageLoading />}> */}
                    <Switch>
                        <Route exact path="*" component={Login} />
                    </Switch>
                </HashRouter>
            )}
        </HashRouter>
    );
};

export default Router;
