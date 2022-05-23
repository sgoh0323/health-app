import { MessageFilled, QuestionCircleOutlined, QuestionOutlined } from '@ant-design/icons';
import { UserContactOutline } from 'antd-mobile-icons';
import {
    Avatar,
    Button,
    Card,
    Space,
    TextArea,
    Grid,
    DotLoading,
    FloatingBubble,
    Popup,
    Modal,
    Toast,
    Divider,
    List
} from 'antd-mobile';
import { ReactTinyLink } from 'react-tiny-link';
import React, { useRef, useState } from 'react';
import moment from 'moment';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getDirectQuestions } from 'api/testApi';
import { toInteger } from 'lodash';
import { UnorderedListOutline, PayCircleOutline, SetOutline } from 'antd-mobile-icons';

const Mypage: React.FunctionComponent<RouteComponentProps> = ({ history, location, match }) => {
    const scrollViewRef = useRef(null);

    return (
        <>
            <Space>
                <div>
                    09958님<span>(1958.01.01)</span>
                </div>
            </Space>
            <Divider />
            <List header="계정설정">
                <List.Item onClick={() => {}}>계정정보 설정</List.Item>
                <List.Item
                    onClick={() => {
                        history.push('/changepwd');
                    }}>
                    비밀번호 설정
                </List.Item>
                <List.Item
                    onClick={() => {
                        history.push('/notisetting');
                    }}>
                    알림 설정
                </List.Item>
            </List>
            <List header="도움">
                <List.Item onClick={() => {}}>공지사항</List.Item>
                <List.Item
                    onClick={() => {
                        history.push('/faq');
                    }}>
                    FAQ
                </List.Item>
                <List.Item onClick={() => {}}>문의하기</List.Item>
                <List.Item onClick={() => {}}>버전정보</List.Item>
                <List.Item onClick={() => {}}>개인정보 처리 방침</List.Item>
                <List.Item onClick={() => {}}>로그아웃</List.Item>
            </List>
        </>
    );
};

export default Mypage;
