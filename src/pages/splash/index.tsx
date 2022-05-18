import { Button, Image, Space } from 'antd-mobile';
import React from 'react';
import sImage from 'assets/images/common/splash.jpg';

export const Splash = ({ onStart }) => {
    return (
        <>
            <Space direction="vertical" justify="start" block style={{ backgroundColor: 'white', height: '100vh' }}>
                <Image lazy src={sImage} style={{ width: '100vw', height: '90vh' }} />
                <Space justify="center" block>
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
            </Space>
        </>
    );
};
