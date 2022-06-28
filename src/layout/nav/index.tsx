import { LeftOutline } from 'antd-mobile-icons';
import { Button, NavBar, Popup, TabBar } from 'antd-mobile';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { menus } from 'router/menu';

const NavBarCompornent = ({ item }) => {
    const history = useHistory();
    console.log(item);
    const [visible, setVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    useLayoutEffect(() => {
        console.log('location');
        setVisible(item?.header);
    }, [item]);
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
                    backArrow={<LeftOutline />}
                    style={{ backgroundColor: '#EF800A' }}
                    className="aimmed_nav">
                    {item.label}
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

export default React.memo(NavBarCompornent);
