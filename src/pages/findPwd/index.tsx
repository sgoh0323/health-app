import { Button, Card, Form, Input, Space } from 'antd-mobile';
import Layout from 'layout';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const Login = ({ location, history }) => {
    const item = menus[location.pathname];
    return (
        <Layout
            item={item}
            contents={
                <main>
                    <Space direction="vertical" justify="center" block style={{ height: 'calc(100vh - 150px)' }}>
                        <Card>
                            <Form.Item
                                name="userId"
                                rules={[{ required: true, message: '아이디을 입력해주세요' }]}
                                style={{ width: '100%' }}>
                                <Input placeholder="사번을 입력해주세요." />
                            </Form.Item>
                            <Button style={{ width: '100%', backgroundColor: 'rgb(127 132 164)', color: 'white' }}>
                                비밀번호 재설정
                            </Button>
                        </Card>
                    </Space>
                </main>
            }
        />
    );
};

export default withRouter(Login);
