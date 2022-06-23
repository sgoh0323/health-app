import { UnorderedListOutlined } from '@ant-design/icons';
import { Button, NavBar, Popup, TabBar } from 'antd-mobile';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const NavBarCompornent = ({ location, history }) => {
    console.log(location);
    console.log(history);
    const [back, setback] = useState(true);
    const [visible, setVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    useLayoutEffect(() => {
        console.log('location');
        console.log(location);
        console.log(menus[location.pathname]);

        // setback(location.pathname === '/chat');
        setVisible(menus[location.pathname].header);
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
                    style={{ backgroundColor: '#EF800A' }}
                    className="aimmed_nav">
                    {menus[location.pathname].label}
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
