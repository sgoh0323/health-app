import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Cookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import useUser from 'hooks/user';
import { RootState } from 'stores';
import ApiLoading from 'components/apiLoading';
import { NonReadInfo } from 'api/common/commonType';
import { getNonRead } from 'api/common/commonApi';
import HeaderTempleate from './header';
import FooterTempleate from './footer';
import SiderTempleate from './sider';
import { IHeaderProps, ISiderProps, ITemplateProps } from './interface';
import { Badge, NavBar, TabBar } from 'antd-mobile';
import { AppleOutlined, MessageFilled, MessageOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import modal from 'helper/customModal';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Template: React.FunctionComponent<ITemplateProps> = ({ content }) => {
    const { apiCallIds } = useSelector((state: RootState) => state.userStore);
    const [isLoading, setIsLoading] = useState(false);
    const { menuSubItemList, userInfo, dispatchMenuList, dispatchUserInfo, onClearState } = useUser();
    const [collapse, setCollapse] = useState<boolean>(false);
    const [nonReadInfo, setNonReadInfo] = useState<NonReadInfo>({ noticeCount: 0, qnaCount: 0 });

    const onCollapse = () => {
        setCollapse(!collapse);
    };

    const tabs = [
        {
            key: 'home',
            title: '홈',
            icon: <AppleOutlined />,
            badge: Badge.dot,
            path: '/sample'
        },
        {
            key: 'todo',
            title: '할일',
            icon: <UnorderedListOutlined />,
            badge: '5',
            path: '/partner/notice/list'
        },
        {
            key: 'message',
            title: '메세지',
            icon: (active: boolean) => (active ? <MessageFilled /> : <MessageOutlined />),
            badge: '99+',
            path: '/partner/notice/new'
        },
        {
            key: 'personalCenter',
            title: '계정관리',
            icon: <UserOutlined />
        }
    ];

    const [selectMenu, setSelectMenu] = useState<string[]>(['/']);

    useEffect(() => {
        if (!menuSubItemList || menuSubItemList.length === 0) {
            dispatchMenuList();
        }
        // if (userInfo.userId === undefined || userInfo.userId === '') {
        //     dispatchUserInfo();
        // }
        return () => {
            //
        };
    }, []);

    const onClick = keys => {
        setSelectMenu(keys);
    };
    const ISiderProps: ISiderProps = {
        menuList: menuSubItemList,
        collapse,
        selectMenu,
        onCollapse,
        onClick
    };

    const clickAlramModal = () => {
        //
    };
    const onClickLogOut = () => {
        const cookies = new Cookies();
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        onClearState();
        window.location.assign('#/login');
    };

    const headerProps: IHeaderProps = {
        userInfo,
        nonReadInfo,
        onClickAlram: clickAlramModal,
        onClickLogOut,
        onCollapse
    };

    useEffect(() => {
        let alrmInterval = null;
        if (userInfo.userId !== '') {
            getNonRead(e => {
                setNonReadInfo(e.result);
            });
            alrmInterval = setInterval(() => {
                getNonRead(e => {
                    setNonReadInfo(e.result);
                });
            }, 60000);
            if (menuSubItemList === undefined || menuSubItemList.length < 1) {
                dispatchMenuList();
            }
        }
        return () => {
            if (alrmInterval !== null) clearInterval(alrmInterval);
        };
    }, [userInfo]);

    useEffect(() => {
        if (apiCallIds && apiCallIds.length > 0) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
        return () => {
            // cleanup
        };
    }, [apiCallIds]);

    useEffect(() => {
        try {
            //
        } catch (error) {
            // 에러 발생시
            window.location.href = '/#error';
        }
        return () => {
            // cleanup
        };
    }, [content]);

    return (
        <>
            <ApiLoading isLoading={isLoading} />
            {/* <Layout className="aimmed">
                <SiderTempleate {...ISiderProps} />
                <Layout>
                    <HeaderTempleate {...headerProps} />
                    <Content>
                        {content}
                        <FooterTempleate />
                    </Content>
                </Layout>
            </Layout> */}
            <NavBar
                onBack={() => {
                    modal.info('뒤로가기');
                }}
                style={{ backgroundColor: '#e5e5e5' }}>
                홈
            </NavBar>
            {content}
            <TabBar
                style={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: '#e5e5e5' }}
                onChange={() => {}}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        icon={<Link to={item.path}>item.icon</Link>}
                        title={item.title}
                        badge={item.badge}
                    />
                ))}
            </TabBar>
        </>
    );
};

export default React.memo(Template);
