import { AppleOutlined, MessageFilled, MessageOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { TabBar } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const TabMenu = ({ location, history }) => {
    console.log('###################');
    console.log(location);
    // const history = useHistory();
    const [visiable, setVisiable] = useState(true);
    const tabs = [
        {
            key: 'sample',
            title: '케어코칭',
            icon: <AppleOutlined />,
            // badge: Badge.dot,
            path: '/sample',
            tabNav: true,
            header: true
        },
        {
            key: 'chat',
            title: '상담',
            icon: <UnorderedListOutlined />,
            // badge: '5',
            path: '/chat',
            tabNav: false,
            header: true
        },
        {
            key: 'home',
            title: '홈',
            icon: <UnorderedListOutlined />,
            // badge: '5',
            path: '/home',
            tabNav: true,
            header: true
        },
        {
            key: 'message',
            title: '모바일보건센터',
            icon: (active: boolean) => (active ? <MessageFilled /> : <MessageOutlined />),
            // badge: '99+',
            path: '/partner/notice/new',
            tabNav: true,
            header: true
        },
        {
            key: 'mypage',
            title: '마이페이지',
            path: '/mypage',
            icon: <UserOutlined />,
            tabNav: true,
            header: true
        }
    ];
    useEffect(() => {
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
