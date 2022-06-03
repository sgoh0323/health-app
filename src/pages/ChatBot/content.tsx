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
    Toast
} from 'antd-mobile';
import { ReactTinyLink } from 'react-tiny-link';
import React, { useRef, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getDirectQuestions } from 'api/testApi';

const Chat = () => {
    const scrollViewRef = useRef(null);
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [textList, setTextList] = useState([
        { text: '안녕하세요 000님, 무엇을 도와드릴까요?', type: 'bot', date: '2022-05-15 17:52:32' },
        {
            text: '이상지질혈증에 대해 궁금한 점이 있습니다.',
            type: 'user',
            date: '2022-05-15 17:53:32'
        },
        {
            text: '어떤 점이 궁금하신가요?',
            type: 'bot',
            date: '2022-05-15 17:53:33'
        },
        {
            text: 'HDL콜레스테롤 수치는 감소하면 위험한가요?',
            type: 'user',
            date: '2022-05-15 17:54:01'
        },
        {
            text: 'HDL콜레스테롤은 40mg/dl 미만이면 낮은 것으로 판단하며, 혈액 내 HDL콜레스테롤 수치는 높을수록 동맥경화를 예방할 수 있어 좋은 콜레스테롤로 알려져 있습니다.',
            type: 'bot',
            date: '2022-05-15 17:54:03'
        }
    ]);
    const [text, setText] = useState('');
    const onClick = () => {
        Modal.confirm({
            title: '상담사를 연결하시겠습니까?',
            content: '상담내용은 녹음되거나 활용될 수 있습니다.',
            onConfirm: () => {
                // 차후 상담원 번호로 대체
                document.location.href = 'tel:114';
            },
            confirmText: '확인',
            cancelText: '취소'
        });
    };
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    };
    const sendMessage = () => {
        setIsLoading(true);
        const tmpMsgList = [
            ...textList,
            {
                text: msg,
                type: 'user',
                date: moment().format('YYYY-MM-DD HH:mm:ss')
            }
        ];
        setTextList(tmpMsgList);
        setMsg('');
        // getDirectQuestions({ message: msg, sender: getRandomArbitrary(1000, 9999) }, data => {
        //     setIsLoading(false);
        //     setTextList([
        //         ...tmpMsgList,
        //         {
        //             text: data,
        //             type: 'bot',
        //             date: '2022-05-15 17:52:32'
        //         }
        //     ]);
        // });
        setTimeout(() => {
            setIsLoading(false);
            setTextList([
                ...tmpMsgList,
                {
                    text: '대답 : ' + msg,
                    type: 'bot',
                    date: moment().format('YYYY-MM-DD HH:mm:ss')
                }
            ]);
        }, 1000);
    };
    return (
        <>
            <div style={{ width: '100%' }}>
                {textList.map((i, index) => {
                    return (
                        <>
                            {i.type === 'bot' ? (
                                <Grid columns={1} gap={5} style={{ display: 'flex', margin: 10 }}>
                                    <Avatar src="" style={{ '--size': '46px' }} />
                                    <Card
                                        style={{
                                            fontWeight: 600,
                                            maxWidth: 'calc( 100% - 150px)',
                                            overflowWrap: 'anywhere'
                                        }}>
                                        <div dangerouslySetInnerHTML={{ __html: i?.text }}></div>
                                    </Card>
                                    <Space align="end">
                                        <div>{moment(i?.date).format('HH:mm:ss')}</div>
                                    </Space>
                                </Grid>
                            ) : (
                                // <Grid
                                //     columns={1}
                                //     gap={3}
                                //     style={{
                                //         display: 'flex',
                                //         margin: 10,
                                //         justifyContent: 'end',
                                //         overflowWrap: 'anywhere',
                                //         textAlign: 'end'
                                //     }}>
                                //     <Card
                                //         style={{
                                //             fontWeight: 600,
                                //             maxWidth: 'calc( 100% - 150px)',
                                //             backgroundColor: '#1677ff'
                                //         }}>
                                //         {i?.text}
                                //     </Card>
                                // </Grid>
                                <div
                                    style={{
                                        display: 'flex',
                                        margin: 10,
                                        justifyContent: 'end',
                                        overflowWrap: 'anywhere'
                                        // maxWidth: 'calc( 100% - 150px)'
                                    }}>
                                    <Space align="end">
                                        <div>{moment(i?.date).format('HH:mm:ss')}</div>
                                    </Space>
                                    <Card
                                        style={{
                                            marginLeft: 5,
                                            fontWeight: 600,
                                            width: 'fit-contents',
                                            maxWidth: 'calc( 100% - 150px)',
                                            backgroundColor: '#1677ff'
                                        }}>
                                        {i?.text}
                                    </Card>
                                </div>
                                // <Space justify={'end'} style={{ width: '100%', marginTop: '10px' }}>
                                // </Space>
                            )}
                        </>
                    );
                })}
                {isLoading && (
                    <Grid columns={1} gap={5} style={{ display: 'flex', margin: 10 }}>
                        <Avatar src="" style={{ '--size': '46px' }} />
                        <Card
                            style={{
                                fontWeight: 600,
                                maxWidth: 'calc( 100% - 150px)',
                                backgroundColor: '#1677ff',
                                overflowWrap: 'anywhere'
                            }}>
                            <span style={{ fontSize: 14 }}>
                                <DotLoading />
                            </span>
                        </Card>
                    </Grid>
                )}
                {/* <Grid columns={1} gap={5} style={{ display: 'flex', margin: 10 }}>
                    <Avatar src="" style={{ '--size': '46px' }} />
                    <Card style={{ fontWeight: 600, maxWidth: 'calc( 100% - 150px)' }}>
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url="https://andrewandco.co.kr/surl/P/496/?cafe_mkt=ue_1019_secret_pc&NaPm=ci%3D5hlelMmjmJSKqVuwLGlTolrA%7Ctr%3Dgfa%7Cct%3Dl39w2jcg%7Chk%3D5a8f8afd7fe79fe4198af35aaf829794975d14de"
                        />
                    </Card>
                </Grid> */}
                <Link to="/faq">
                    <FloatingBubble
                        axis="x"
                        magnetic="x"
                        style={{
                            '--initial-position-bottom': '50px',
                            '--initial-position-right': '10px',
                            '--edge-distance': '24px'
                        }}>
                        <QuestionOutlined style={{ fontSize: '26px' }} />
                    </FloatingBubble>
                </Link>
                <FloatingBubble
                    axis="x"
                    magnetic="x"
                    style={{
                        '--initial-position-bottom': '50px',
                        '--initial-position-left': '10px',
                        '--edge-distance': '24px',
                        '--background': 'white'
                    }}
                    onClick={onClick}>
                    <UserContactOutline style={{ fontSize: '26px', color: 'gray' }} />
                </FloatingBubble>
            </div>

            <div className="aimmed_chat_textbox">
                <div
                    style={{
                        display: 'flex',
                        padding: '6px',
                        backgroundColor: 'white'
                    }}>
                    <TextArea
                        placeholder="문의사항을 입력하세요."
                        rows={1}
                        autoSize={{ minRows: 1, maxRows: 5 }}
                        style={{
                            minHeight: 24,
                            width: 'calc( 100% - 80px )',
                            backgroundColor: 'white',
                            overflowY: 'hidden'
                        }}
                        value={msg}
                        onChange={e => {
                            setMsg(e);
                        }}
                    />
                    <Button
                        color="primary"
                        size="mini"
                        style={{ borderRadius: 0, width: '80px' }}
                        onClick={sendMessage}>
                        전송
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Chat;
