import { BulbOutlined, HomeOutlined, MessageFilled, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { TabBar } from 'antd-mobile';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

const TabMenu = ({ location, history }) => {
    console.log('###################');
    console.log(location);
    // const history = useHistory();
    // const history = useHistory();
    const [visiable, setVisiable] = useState(true);
    const tabs = [
        {
            key: 'coaching',
            title: '건강코칭',
            icon: <NotificationOutlined />,
            // badge: Badge.dot,
            path: '/coaching',
            tabNav: true,
            header: true
        },
        {
            key: 'chat',
            title: '건강상담',
            icon: <MessageFilled />,
            // badge: '5',
            path: '/chat',
            tabNav: true,
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
            key: 'health',
            title: '보건센터',
            icon: <BulbOutlined />,
            // badge: '99+',
            path: '/health',
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
        console.log('useLayoutEffect');
        console.log(location.pathname !== '/chat');
        setVisiable(location.pathname !== '/chat');
    }, [location]);
    return (
        <>
            {visiable && (
                <TabBar
                    className="aimmed_btab"
                    defaultActiveKey="home"
                    activeKey={location.pathname}
                    onChange={path => {
                        setVisiable(path !== '/chat');
                        const item = tabs.filter(i => i.path === path)[0];
                        // history.push({ pathname: item.path, state: item });
                        history.push(item.path);
                    }}>
                    {tabs.map(item => (
                        <TabBar.Item
                            key={item.path}
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
