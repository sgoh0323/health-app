import { Result } from 'antd';
import { Button, Card, Form, Input, NoticeBar, Space, Swiper } from 'antd-mobile';
import Layout from 'layout';
import React from 'react';
import { BellOutline, SetOutline, RightOutline, PictureOutline } from 'antd-mobile-icons';
import { Link, withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const Login = ({ location, history }) => {
    const item = menus[location.pathname];
    const colors = ['rgba(255, 228, 208, 0.43)', '#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
    const items = colors.map((color, index) => (
        <Swiper.Item key={index} style={{ marginRight: '10px', padding: '5px' }}>
            <Card
                style={{
                    backgroundColor: `${color}`,
                    width: '100%'

                    // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                }}>
                <div style={{ width: '100%', display: 'inline-flex' }}>
                    <div style={{ width: '60%', padding: '5px', position: 'relative' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                            스트레칭하기 <RightOutline />
                        </div>
                        <div style={{ fontSize: '1rem', padding: '10px' }}>찌뿌둥한 몸을 쭉쭉 뻗어봐요~!</div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 'calc( 50% - 55px)',
                                textAlign: 'center'
                            }}>
                            <div>
                                <Button color="success" shape="rounded">
                                    도전 완료 !
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <div style={{ width: '100%' }}>
                            <img
                                width="100%"
                                src={require('assets/images/common/mission_sample.png')}
                                style={{ maxWidth: '200px' }}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </Swiper.Item>
    ));
    return (
        <Layout
            item={item}
            contents={
                <>
                    <div
                        style={{
                            width: '100%',
                            // borderRadius: '0px 60px 0px 0px',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '15px'
                        }}>
                        <Space align="center" justify="between" style={{ width: '100%' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>이벤트</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
                                전체보기 <RightOutline />
                            </div>
                        </Space>
                        <Swiper
                            autoplay
                            loop
                            autoplayInterval={5000}
                            slideSize={80}
                            // trackOffset={90}
                            style={
                                {
                                    // margin: 10
                                    // '--track-padding': ' 0 0 16px'
                                }
                            }>
                            {items}
                        </Swiper>
                    </div>
                    <NoticeBar
                        extra={<RightOutline style={{ fontSize: 18 }} />}
                        content={'건강검진 신청 시 주의사항 안내 드립니다.'}
                    />
                    <Space />
                </>
            }
        />
    );
};

export default withRouter(Login);
