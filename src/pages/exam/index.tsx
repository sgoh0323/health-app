import { CheckCircleFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
    Avatar,
    Button,
    Card,
    Space,
    TextArea,
    Grid,
    DotLoading,
    AutoCenter,
    Steps,
    Divider,
    Form,
    Input,
    Checkbox
} from 'antd-mobile';
import Layout from 'layout';
import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const Exam = ({ location, history }) => {
    const scrollViewRef = useRef(null);
    const [form] = Form.useForm();
    const item = menus[location.pathname];
    const [examList, setExamList] = useState([
        {
            key: 0,
            q_title: '체질량 지수',
            q_subTitle: '신장과 체중을 입력하여 주시기 바랍니다.',
            a_list: [
                { type: 'input', label: '신장', tail_label: 'cm', name: 'tall', inputType: 'number', idx: 0 },
                { type: 'input', label: '체중', tail_label: 'kg', name: 'weight', inputType: 'number', idx: 0 }
            ]
        },
        {
            key: 1,
            q_title: '진단질환',
            q_subTitle: '진단받은 질환을 선택하세요',
            a_list: [
                {
                    type: 'checkbox',
                    name: 'meal',
                    multiable: true,
                    options: [
                        { label: '당뇨병', value: 1 },
                        { label: '고혈압', value: 2 },
                        { label: '고지혈증', value: 3 },
                        { label: '비만', value: 4 },
                        { label: '해당사항없음', value: 0 }
                    ]
                }
            ],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        ,
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [{ type: 'checkbox', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }],
            idx: 2
        },
        {
            key: 1,
            q_title: '식습관',
            q_subTitle: '본인의 식습관에 해당되는 내용을 모두 체크해 주세요.',
            a_list: [
                { type: 'checkbox', label: '', name: 'meal', multiable: true, options: [{ label: '식사', value: 1 }] }
            ],
            idx: 2
        }
    ]);
    const [text, setText] = useState('');
    const [current, setCurrent] = useState({
        key: 1,
        q_title: '진단질환',
        q_subTitle: '진단받은 질환을 선택하세요',
        a_list: [
            {
                type: 'checkbox',
                name: 'meal',
                multiable: true,
                options: [
                    { label: '당뇨병', value: 1 },
                    { label: '고혈압', value: 2 },
                    { label: '고지혈증', value: 3 },
                    { label: '비만', value: 4 },
                    { label: '해당사항없음', value: 0 }
                ]
            }
        ],
        idx: 2
    });
    return (
        <Layout
            item={item}
            contents={
                <>
                    <div style={{ textAlign: 'center' }}>
                        모든항목을 빠짐없이 입력할수록
                        <br /> 보다 정확한 분석 결과를 받으실수 있습니다.
                    </div>
                    <Steps current={current.key}>
                        {examList.map((i, index) => {
                            // return <Steps.Step icon={index === current ? <CheckCircleFilled /> : undefined} />;
                            return <Steps.Step />;
                        })}
                    </Steps>
                    <Card>
                        <AutoCenter>
                            <div>{current.q_title}</div>
                        </AutoCenter>
                        <AutoCenter>
                            <div>{current.q_subTitle}</div>
                        </AutoCenter>
                        <Divider />
                        <Form form={form}>
                            <div>
                                {current.a_list.length > 0 &&
                                    current.a_list.map(i => {
                                        const rsElement = el => {
                                            if (el.type === 'input') {
                                                return (
                                                    <Form.Item
                                                        name={el.name}
                                                        label={el.label}
                                                        rules={[
                                                            {
                                                                required: true
                                                            }
                                                        ]}>
                                                        <Input />
                                                    </Form.Item>
                                                );
                                            } else if (el.type === 'checkbox') {
                                                return (
                                                    <Form.Item
                                                        name={el.name}
                                                        label={el.label}
                                                        rules={[
                                                            {
                                                                required: true
                                                            }
                                                        ]}>
                                                        <Checkbox.Group>
                                                            <Space direction="vertical">
                                                                {el.options.map(e => {
                                                                    return (
                                                                        <Checkbox value={e.value}>{e.label} </Checkbox>
                                                                    );
                                                                })}
                                                            </Space>
                                                        </Checkbox.Group>
                                                    </Form.Item>
                                                );
                                            }
                                        };
                                        return rsElement(i);
                                    })}
                            </div>
                        </Form>
                    </Card>
                    <Space justify="between" style={{ width: '100%', marginTop: '10px' }}>
                        <Button>
                            <LeftOutlined />
                            이전
                        </Button>
                        <Button>
                            다음
                            <RightOutlined />
                        </Button>
                    </Space>
                </>
            }
        />
    );
};

export default withRouter(Exam);
