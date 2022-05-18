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
    Checkbox,
    Collapse
} from 'antd-mobile';
import React, { useRef, useState } from 'react';

const Faq = () => {
    const scrollViewRef = useRef(null);
    const [form] = Form.useForm();
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
        <>
            <div style={{ textAlign: 'center' }}>자주 묻는 질문</div>
            <Collapse>
                <Collapse.Panel key="1" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                <Collapse.Panel key="2" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                <Collapse.Panel key="3" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                <Collapse.Panel key="4" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                <Collapse.Panel key="5" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                {/* <Collapse.Panel key="6" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                <Collapse.Panel key="7" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel>
                <Collapse.Panel key="8" title="개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법">
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법 <br />
                    개인정보의 수집, 이용 목적, 수집하는 개인 정보의 항목 및 수집방법
                </Collapse.Panel> */}
            </Collapse>
        </>
    );
};

export default Faq;
