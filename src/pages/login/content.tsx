import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { apiUserLogin } from 'api/userApi';
import useUser from 'hooks/user';
import modal from 'helper/customModal';
import { trim } from 'lodash';

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
            <div className="login-wrapper">
                <div className="login-form">
                    {/* <div className="login-form-logo">
                            <IconList name="icLogo" />
                        </div> */}
                    <div style={{ width: '444px', textAlign: 'center', marginBottom: '10px' }}>
                        <img src="./img/footer_logo.png" alt="" style={{ width: '300px' }} />
                    </div>
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
                    <Form form={basicForm}>
                        <Form.Item
                            // label={data.label}
                            name="userId"
                            rules={[{ required: true, message: '아이디을 입력해주세요' }]}
                            style={{ width: '100%' }}>
                            <Input placeholder="아이디" onKeyPress={onKeyPress} />
                        </Form.Item>
                        <Form.Item
                            // label={data.label}
                            name="password"
                            rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
                            style={{ width: '100%', marginLeft: '0px' }}>
                            <Input type="password" placeholder="비밀번호" onKeyPress={onKeyPress} />
                        </Form.Item>
                        <Button type="primary" style={{ width: '100%' }} onClick={onClickLogin}>
                            로그인
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="login-footer">
                <span>Copyright © 2000-2100 aimmed. All rights reserved.</span>
            </div>
        </>
    );
};

export default LoginContent;
