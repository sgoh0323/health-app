import React, { useState, useEffect } from 'react';
import SiderMenu from 'components/sider-menu';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ISiderProps } from './interface';

const menuSubItemList = [];
const { Sider } = Layout;
const SiderTemplet: React.FunctionComponent<ISiderProps> = ({
    menuList,
    collapse,
    selectMenu,
    onCollapse,
    onClick
}) => {
    return (
        <Sider collapsed={collapse} collapsible onCollapse={onCollapse} width={210} className="aimmed__sider">
            <div className="aimmed__sider__top">
                <Link to="/dashboard">
                    {!collapse ? (
                        <div className="aimmed__sider__top__logo">aimmed LOGO</div>
                    ) : (
                        <div className="aimmed__sider__top__logo__min">aimmed LOGO</div>
                    )}
                </Link>
            </div>
            <SiderMenu
                menuItemList={menuList}
                onClick={onClick}
                selectedKeys={selectMenu}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['/home']}
                mode="inline"
                theme="light"
            />
        </Sider>
    );
};

export default SiderTemplet;
