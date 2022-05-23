import { Button, Image, Space } from 'antd-mobile';
import React from 'react';
import sImage from 'assets/images/common/splash.jpg';

export const Splash = ({ onStart }) => {
    return (
        <>
            <Space direction="vertical" justify="start" block style={{ backgroundColor: 'white', height: '100vh' }}>
                <Image lazy src={sImage} style={{ height: '100%' }} fit="scale-down" />
            </Space>
            <Space justify="center" style={{ width: '100vw', position: 'fixed', bottom: 40, backgroundColor: 'white' }}>
                <Button
                    color="primary"
                    fill="none"
                    onClick={() => {
                        onStart(false);
                    }}
                    style={{ fontWeight: 600 }}>
                    시작하기
                </Button>
            </Space>
        </>
    );
};
