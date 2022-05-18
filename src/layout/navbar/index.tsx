import { UnorderedListOutlined } from '@ant-design/icons';
import { Button, NavBar, Popup, TabBar } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const NavBarCompornent = ({ location, history }) => {
    console.log('###################');
    console.log(location);
    console.log(history);
    const [back, setback] = useState(true);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setback(location.pathname === '/chat');
    }, [location]);
    return (
        <>
            <NavBar
                onBack={() => {
                    if (back) {
                        history.goBack();
                    } else {
                        setVisible(true);
                    }
                }}
                backArrow={<UnorderedListOutlined />}
                className="aimmed_nav">
                건강코칭
            </NavBar>
            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false);
                }}
                position="left"
                bodyStyle={{ width: '100vw' }}>
                <Button
                    onClick={() => {
                        setVisible(false);
                    }}>
                    close
                </Button>
            </Popup>
        </>
    );
};

export default withRouter(NavBarCompornent);
