import { Button, Card, Form, Input, Space } from 'antd-mobile';
import Layout from 'layout';
import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const ChangePwd = ({ location, history }) => {
    const item = menus[location.pathname];
    return (
        <Layout
            item={item}
            contents={
                <Space direction="vertical" justify="center" block style={{ height: 'calc(100vh - 150px)' }}>
                    <Card>
                        <Form.Item
                            name="userId"
                            label="현재 비밀번호"
                            rules={[{ required: true, message: '아이디을 입력해주세요' }]}
                            style={{ width: '100%' }}>
                            <Input placeholder="사번을 입력해주세요." />
                        </Form.Item>
                        <Form.Item
                            name="userId"
                            label="새로운 비밀번호"
                            rules={[{ required: true, message: '아이디을 입력해주세요' }]}
                            style={{ width: '100%' }}>
                            <Input placeholder="사번을 입력해주세요." />
                        </Form.Item>
                        <Form.Item
                            name="userId"
                            label=""
                            rules={[{ required: true, message: '아이디을 입력해주세요' }]}
                            style={{ width: '100%' }}>
                            <Input placeholder="사번을 입력해주세요." />
                        </Form.Item>
                        <Button style={{ width: '100%', backgroundColor: 'rgb(127 132 164)', color: 'white' }}>
                            비밀번호 변경하기
                        </Button>
                        <Button
                            fill="none"
                            style={{ width: '100%', color: '#2A3267', fontWeight: 600 }}
                            onClick={() => {
                                history.push('/findpwd');
                            }}>
                            현재 비밀번호가 기억이 안나시나요?
                        </Button>
                    </Card>
                </Space>
            }
        />
    );
};

export default withRouter(ChangePwd);
