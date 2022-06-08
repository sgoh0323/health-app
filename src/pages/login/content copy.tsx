import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { apiUserLogin } from 'api/userApi';
import useUser from 'hooks/user';
import modal from 'helper/customModal';
import sImage from 'assets/images/common/footer_logo.png';
import { trim } from 'lodash';
import { Button, Card, Form, Image, Input, Space } from 'antd-mobile';

const LoginContent: React.FunctionComponent = () => {
    const paramPath = useParams();
    const { dispatchMenuList, setUserState } = useUser();
    const param = useParams();
    const [basicForm] = Form.useForm();
    const history = useHistory();

    const getUrlPath = (url, key) => {
        let x;
        let y;
        let rsVal = 'dashboard';
        if (url.indexOf('#/login?') > -1) {
            const splitUrl = url.split('#/login?');
            const item = splitUrl[1];
            if (item.length > 0) {
                x = item.substr(0, item.indexOf('='));
                y = item.substr(item.indexOf('=') + 1);
                x = trim(x); // 앞과 뒤의 공백 제거하기
                if (x === key) {
                    rsVal = trim(y); // unescape로 디코딩 후 값 리턴
                }
            }
        }
        return rsVal;
    };

    const saveCallback = data => {
        history.push('/home');
        setUserState({ userId: '001', name: '오승근', deptNm: '개발팀' });
        // if (data.message.indexOf('성공') > -1) {
        //     console.log(data?.result?.userInfo);
        //     dispatchMenuList();
        //     setUserState(data?.result?.userInfo);
        //     history.push('/customer/user/list');
        // } else {
        //     modal.warn(data.resultMsg);
        // }
    };

    const onClickLogin = () => {
        basicForm.validateFields().then(values => {
            apiUserLogin(basicForm.getFieldsValue(), saveCallback);
        });
    };

    const onKeyPress = e => {
        if (e.key == 'Enter') {
            onClickLogin();
        }
    };

    const getCookie = cookieNm => {
        let x;
        let y;
        let rsVal;
        const val = document.cookie.split(';');

        val.forEach(item => {
            const itemArr = item.split('=');
            x = item.substr(0, item.indexOf('='));
            y = item.substr(item.indexOf('=') + 1);
            x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
            if (x === cookieNm) {
                rsVal = unescape(y); // unescape로 디코딩 후 값 리턴
            }
        });
        return rsVal;
    };

    return (
        <>
            <Space direction="vertical" justify="center" block style={{ backgroundColor: '#2A3267', height: '100vh' }}>
                <Image lazy src={sImage} style={{ width: '100vw' }} />
                <div
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        margin: '20px 0',
                        fontWeight: 'bold',
                        fontSize: '17px'
                    }}>
                    AIMMED ADMIN
                </div>
                <Card>
                    <Form form={basicForm}>
                        <Form.Item
                            // label={data.label}
                            name="userId"
                            rules={[{ required: true, message: '아이디을 입력해주세요' }]}
                            style={{ width: '100%' }}>
                            <Input placeholder="아이디" />
                        </Form.Item>
                        <Form.Item
                            // label={data.label}
                            name="password"
                            rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
                            style={{ width: '100%', marginLeft: '0px' }}>
                            <Input type="password" placeholder="비밀번호" />
                        </Form.Item>
                        <Button
                            style={{ width: '100%', backgroundColor: 'rgb(127 132 164)', color: 'white' }}
                            onClick={onClickLogin}>
                            로그인
                        </Button>
                        <Button
                            fill="none"
                            style={{ width: '100%', color: '#2A3267', fontWeight: 600 }}
                            onClick={() => {
                                history.push('/findpwd');
                            }}>
                            비밀번호 찾기
                        </Button>
                    </Form>
                </Card>
            </Space>
        </>
    );
};

export default LoginContent;
