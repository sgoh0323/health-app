import { Result } from 'antd';
import { Button, Card, Form, Grid, Input, NoticeBar, Space, Swiper } from 'antd-mobile';
import Layout from 'layout';
import React from 'react';
import { BellOutline, FillinOutline, RightOutline, CouponOutline } from 'antd-mobile-icons';
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
                            <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>이벤트</div>
                            <Link to={'/health/event'}>
                                <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
                                    전체보기 <RightOutline />
                                </div>
                            </Link>
                        </Space>
                        <Swiper
                            autoplay
                            loop
                            autoplayInterval={5000}
                            slideSize={90}
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
                    <Link to={'/health/notice'}>
                        <NoticeBar
                            extra={<RightOutline style={{ fontSize: 18 }} />}
                            content={'건강검진 신청 시 주의사항 안내 드립니다.'}
                        />
                    </Link>
                    <Space />
                    <div
                        style={{
                            width: '100%',
                            // borderRadius: '0px 60px 0px 0px',
                            // backgroundColor: 'white',
                            color: 'black',
                            padding: '15px'
                        }}>
                        <Space align="center" justify="between" style={{ width: '100%' }}>
                            <div style={{ fontSize: '1.0rem', fontWeight: 'bold' }}>건강 복지프로그램</div>
                        </Space>
                        <Card>
                            <div style={{ display: 'inline-flex', width: '100%' }}>
                                <div style={{ width: '70%' }}>
                                    SK하이닉스 이천 임직원이 참여할 수 있는 프로그램을 알려드립니다
                                </div>
                                <div style={{ width: '30%' }}>
                                    <img
                                        width="100%"
                                        src={require('assets/images/common/mission_sample.png')}
                                        style={{ maxWidth: '200px' }}
                                    />
                                </div>
                            </div>
                            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                                <Button color="success" shape="rounded" style={{ width: '60%' }}>
                                    자세히 보기
                                </Button>
                            </div>
                            <div
                                style={{
                                    display: 'inline-flex',
                                    width: '100%',
                                    textAlign: 'center',
                                    marginTop: '20px'
                                }}>
                                <div style={{ width: '50%', borderRight: '1px solid lightgray' }}>
                                    <Space align="center">
                                        <FillinOutline fontSize={30} />
                                        종합검진예약
                                    </Space>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <Space align="center">
                                        <CouponOutline fontSize={30} />
                                        구내식단식단
                                    </Space>
                                </div>
                            </div>
                        </Card>
                    </div>
                </>
            }
        />
    );
};

export default withRouter(Login);
