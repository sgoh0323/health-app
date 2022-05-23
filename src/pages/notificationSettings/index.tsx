import { Button, Card, Form, Space, Switch } from 'antd-mobile';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NotificationSettings: React.FunctionComponent = () => {
    const history = useHistory();
    return (
        <main>
            <Space direction="vertical" justify="center" block style={{ height: 'calc(100vh - 150px)' }}>
                <Card>
                    <Form layout="horizontal">
                        <Form.Item name="userId" label="공지사항" style={{ width: '100%' }}>
                            <Switch />
                        </Form.Item>
                        <Form.Item name="userId" label="12주 프로그램알림" style={{ width: '100%' }}>
                            <Switch />
                        </Form.Item>
                        <Form.Item name="userId" label="컨텐츠 알림" style={{ width: '100%' }}>
                            <Switch />
                        </Form.Item>
                        <Form.Item name="userId" label="문진 알림" style={{ width: '100%' }}>
                            <Switch />
                        </Form.Item>
                        <Form.Item name="userId" label="운동/식이 알림" style={{ width: '100%' }}>
                            <Switch />
                        </Form.Item>
                    </Form>
                    {/* <Button style={{ width: '100%', backgroundColor: 'rgb(127 132 164)', color: 'white' }}>
                        비밀번호 변경하기
                    </Button> */}
                    {/* <Button
                        fill="none"
                        style={{ width: '100%', color: '#2A3267', fontWeight: 600 }}
                        onClick={() => {
                            history.push('/findpwd');
                        }}>
                        현재 비밀번호가 기억이 안나시나요?
                    </Button>  */}
                </Card>
            </Space>
        </main>
    );
};

export default NotificationSettings;
