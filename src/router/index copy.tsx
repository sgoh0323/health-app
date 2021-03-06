import React, { Suspense, lazy, useEffect, useState } from 'react';
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
import { IMenuItem } from './interface';

import { COMPONENT_LIST } from './import-component';

const Router: React.FunctionComponent = () => {
    const { dispatchMenuList, dispatchUserInfo, menuSubItemList, userInfo } = useUser();

    useEffect(() => {
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
    }, [menuSubItemList]);

    return (
        <>
            <HashRouter>
                {/* <Suspense fallback={<PageLoading />}> */}
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        render={({ location }) => {
                            return (
                                <TransitionGroup>
                                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                        {/*  */}
                                    </CSSTransition>
                                </TransitionGroup>
                            );
                        }}
                    />
                </Switch>
                {/* </Suspense> */}
            </HashRouter>
        </>
    );
};

export default Router;
