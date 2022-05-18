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
            path: '/sample'
        },
        {
            key: 'todo',
            title: '상담',
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
            title: '모바일보건센터',
            icon: (active: boolean) => (active ? <MessageFilled /> : <MessageOutlined />),
            // badge: '99+',
            path: '/partner/notice/new'
        },
        {
            key: 'chat',
            title: '마이페이지',
            path: '/chat',
            icon: <UserOutlined />
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
                    onChange={key => {
                        console.log('####################### key : ', key);
                        console.log('####################### path : ', tabs.filter(i => i.key === key)[0].path);
                        setVisiable(key !== 'chat');
                        history.push(tabs.filter(i => i.key === key)[0].path);
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

export default withRouter(TabMenu);
