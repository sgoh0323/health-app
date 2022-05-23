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
    const [popupVisible, setPopupVisible] = useState(false);
    useEffect(() => {
        console.log('location');
        console.log(location);
        setback(location.pathname === '/chat');
        setVisible(location.pathname !== '/chat' && location.pathname !== '/home');
    }, [location]);
    return (
        <>
            {visible && (
                <NavBar
                    onBack={() => {
                        history.goBack();
                        // if (back) {
                        //     history.goBack();
                        // } else {
                        //     setVisible(true);
                        // }
                    }}
                    backArrow={<UnorderedListOutlined />}
                    className="aimmed_nav">
                    {location.state?.title}
                </NavBar>
            )}
            <Popup
                visible={popupVisible}
                onMaskClick={() => {
                    setPopupVisible(false);
                }}
                position="left"
                bodyStyle={{ width: '100vw' }}>
                <Button
                    onClick={() => {
                        setPopupVisible(false);
                    }}>
                    close
                </Button>
            </Popup>
        </>
    );
};

export default withRouter(NavBarCompornent);
