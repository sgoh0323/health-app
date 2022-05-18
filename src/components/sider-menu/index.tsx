/* eslint-disable */
import React, { useEffect } from 'react';
import { Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { uniq } from 'lodash';
import { ISiderMenuProps } from './interface';

const SiderMenu: React.FunctionComponent<ISiderMenuProps> = ({
    selectedKeys,
    onClick,
    menuItemList,
    className,
    collapse,
    ...props
}) => {
    const pathName = useLocation().pathname;
    const { SubMenu } = Menu;
    const [openKeys, setOpenKeys] = React.useState([]);
    const [activeKey, setActiveKey] = React.useState<any>();
    const rootSubmenuKeys = [];

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const filterMenuData = JSON.parse(JSON.stringify(menuItemList.filter(item => item.key[0] !== 'P')));
    const madeMenuList = () => {
        const madeMenuData = [];

        filterMenuData.forEach(element => {
            if (!element.parentKey) {
                madeMenuData.push({ ...element, children: [] });
            }
            madeMenuData.forEach(data => {
                if (data.key === element.parentKey) {
                    data.children.push({ ...element });
                }
            });
            rootSubmenuKeys.push(element.parentKey);
        });

        uniq(rootSubmenuKeys);
        return madeMenuData;
    };

    useEffect(() => {
        if (pathName && menuItemList && menuItemList.length > 0) {
            const findMenu = menuItemList.filter(item => item.path === pathName);
            setOpenKeys([findMenu[0]?.parentKey]);
            setActiveKey([findMenu[0]?.key]);
        }
    }, [pathName, menuItemList]);
    return (
        <Menu
            className={className === '' ? `aimmed-menu` : `aimmed-menu ${className}`}
            {...props}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            selectedKeys={activeKey}>
            {madeMenuList().map(route => {
                return route?.children && route?.children.length > 0 ? (
                    <SubMenu
                        key={route.key}
                        // icon={route.icon !== undefined && route.icon !== '' ? <IconList name={route.icon} /> : null}
                        title={route.label}>
                        {route.children.map(childrenMenu => (
                            <Menu.Item key={childrenMenu.key}>
                                {childrenMenu.label}
                                <Link to={`${childrenMenu.path}`} />
                            </Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item key={route.key}>
                        {route.label}
                        <Link to={`${route.path}`} />
                    </Menu.Item>
                );
            })}

        </Menu>
    );
};

export default SiderMenu;

SiderMenu.defaultProps = {
    mode: 'inline'
};
