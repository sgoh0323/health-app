/* disable-eslint */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Button, Space, Badge } from 'antd';
import { BellOutlined, MenuOutlined, TeamOutlined, WindowsFilled } from '@ant-design/icons';

import { IHeaderProps } from './interface';

const Header: React.FunctionComponent<IHeaderProps> = ({ userInfo, nonReadInfo, onCollapse, onClickLogOut }) => {
    const history = useHistory();
    return (
        <header className="aimmed__content__header">
            <Row justify="space-between">
                <>
                    <Space className="aimmed__content__header__space">
                        <MenuOutlined
                            onClick={onCollapse}
                            style={{ marginLeft: '10px', fontSize: '20px', cursor: 'pointer' }}
                        />
                        <span className="aimmed__content__header__space__name" style={{ marginLeft: '20px' }}>
                            {userInfo && `${userInfo.name ? `${userInfo.name}님 반갑습니다.` : ''}`}
                            관리자화면입니다.
                        </span>
                    </Space>
                    <Space className="aimmed__content__header__space">
                        <>
                            <Badge size="default" count={nonReadInfo.noticeCount} showZero={false}>
                                <div className="badge_container">
                                    <BellOutlined
                                        className="main_header_icon"
                                        onClick={e => {
                                            history.push('/partner/notice/list');
                                        }}
                                    />
                                    <div>
                                        <span>전체알림</span>
                                    </div>
                                </div>
                            </Badge>
                            <Badge size="default" count={nonReadInfo.qnaCount} showZero={false}>
                                <div className="badge_container">
                                    <BellOutlined
                                        className="main_header_icon"
                                        onClick={e => {
                                            history.push('/notices/direct/');
                                        }}
                                    />
                                    <div>
                                        <span>1:1알림</span>
                                    </div>
                                </div>
                            </Badge>
                            {/* <Badge size="default" count={0} showZero={false}>
                                    <div className="badge_container">
                                        <BellOutlined className="main_header_icon" />
                                        <div>
                                            <span>단독알림</span>
                                        </div>
                                    </div>
                                </Badge> */}
                        </>
                        <Button
                            type="link"
                            onClick={onClickLogOut}
                            style={{
                                color: '#ff6643'
                            }}>
                            로그아웃
                        </Button>
                    </Space>
                </>
            </Row>
        </header>
    );
};

export default Header;
