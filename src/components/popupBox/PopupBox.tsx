import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, Grid, Collapse, Button, Divider } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';

const PopupBox = ({ type, title, isActive = false, children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <Card className="popupbox">
            <Collapse defaultActiveKey={isActive ? ['1'] : undefined}>
                <Collapse.Panel
                    key="1"
                    title={
                        <Grid columns={4}>
                            <Grid.Item>{type}</Grid.Item>
                            <Grid.Item span={3}>{title}</Grid.Item>
                        </Grid>
                    }>
                    {children}
                    <Button fill="none">
                        바로가기 <RightOutline />
                    </Button>
                    <Divider />
                    <Grid columns={2}>
                        <Grid.Item style={{ textAlign: 'center', borderRight: '1px solid #eeeeee' }}>
                            하루동안 보이지 않기
                        </Grid.Item>
                        <Grid.Item style={{ textAlign: 'center' }}>닫기</Grid.Item>
                    </Grid>
                </Collapse.Panel>
            </Collapse>
        </Card>
    );
};

export default PopupBox;
