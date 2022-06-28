import React, { useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, Grid, Collapse, Button, Divider, Skeleton, Popup, Space } from 'antd-mobile';
import { RightOutline, DownOutline } from 'antd-mobile-icons';
import MiniChart from 'components/miniChart';
import { getWeekData } from 'api/testApi';
import moment from 'moment';

const NotiPopup = ({ type, title, isActive = false, children }) => {
    const [visible, setVisible] = useState(false);
    useLayoutEffect(() => {
        // getWeekData({}, data => {
        //     setWeekData(data);
        // });
    }, []);

    return (
        <>
            <div
                style={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 50,
                    backgroundColor: 'white',
                    borderTop: '1px solid lightgray',
                    padding: '10px',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}
                onClick={() => {
                    setVisible(true);
                }}>
                <Grid columns={4}>
                    <Grid.Item>{type}</Grid.Item>
                    <Grid.Item span={3}>
                        <Space justify="between" style={{ width: '100%' }}>
                            <div style={{ fontWeight: 600 }}>{title}</div>
                            <RightOutline />
                        </Space>
                    </Grid.Item>
                </Grid>
            </div>
            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false);
                }}
                bodyStyle={{
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    minHeight: '20vh',
                    padding: 10
                }}>
                <div
                    style={{ marginBottom: 10 }}
                    onClick={() => {
                        setVisible(false);
                    }}>
                    <Grid columns={4}>
                        <Grid.Item>{type}</Grid.Item>
                        <Grid.Item span={3}>
                            <Space justify="between" style={{ width: '100%' }}>
                                <div style={{ fontWeight: 600 }}>{title}</div>
                                <DownOutline />
                            </Space>
                        </Grid.Item>
                    </Grid>
                </div>
                {children}
                <Button fill="none">
                    바로가기 <RightOutline />
                </Button>
                <Divider />
                <Grid columns={2}>
                    <Grid.Item style={{ textAlign: 'center', borderRight: '1px solid #eeeeee' }}>
                        하루동안 보이지 않기
                    </Grid.Item>
                    <Grid.Item
                        style={{ textAlign: 'center' }}
                        onClick={() => {
                            setVisible(false);
                        }}>
                        닫기
                    </Grid.Item>
                </Grid>
            </Popup>
        </>
    );
};

export default NotiPopup;
