import {
    AppleOutlined,
    BulbOutlined,
    HomeOutlined,
    MessageFilled,
    MessageOutlined,
    NotificationOutlined,
    UnorderedListOutlined,
    UserOutlined
} from '@ant-design/icons';
import { TabBar } from 'antd-mobile';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const TabMenu = ({ location, history }) => {
    console.log('###################');
    console.log(location);
    // const history = useHistory();
    const [visiable, setVisiable] = useState(true);
    const tabs = [
        {
            key: 'sample',
            title: '건강코칭',
            icon: <NotificationOutlined />,
            // badge: Badge.dot,
            path: '/sample',
            tabNav: true,
            header: true
        },
        {
            key: 'chat',
            title: '건강상담',
            icon: <MessageFilled />,
            // badge: '5',
            path: '/chat',
            tabNav: false,
            header: true
        },
        {
            key: 'home',
            title: '홈',
            icon: <HomeOutlined />,
            // badge: '5',
            path: '/home',
            tabNav: true,
            header: true
        },
        {
            key: 'message',
            title: '건강습관',
            icon: <BulbOutlined />,
            // badge: '99+',
            path: '/partner/notice/new',
            tabNav: true,
            header: true
        },
        {
            key: 'mypage',
            title: '내정보',
            path: '/mypage',
            icon: <UserOutlined />,
            tabNav: true,
            header: true
        }
    ];
    useLayoutEffect(() => {
        setVisiable(location.pathname !== '/chat');
    }, [location]);
    return (
        <>
            {visiable && (
                <TabBar
                    className="aimmed_btab"
                    defaultActiveKey="home"
                    onChange={key => {
                        setVisiable(key !== 'chat');
                        const item = tabs.filter(i => i.key === key)[0];
                        history.push({ pathname: item.path, state: item });
                    }}>
                    {tabs.map(item => (
                        <TabBar.Item
                            key={item.key}
                            // icon={<Link to={item.path}>item.icon</Link>}
                            icon={item.icon}
                            title={item.title}></TabBar.Item>
                    ))}
                </TabBar>
            )}
        </>
    );
};

export default withRouter(React.memo(TabMenu));
