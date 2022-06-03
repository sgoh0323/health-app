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
import Layout from 'layout';
import React, { useRef, useState } from 'react';
import { menus } from 'router/menu';

const Faq = ({ location, history }) => {
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
                    <div style={{ textAlign: 'center' }}>자주 묻는 질문</div>
                    <Collapse>
                        <Collapse.Panel key="1" title="이상지질혈증이 뭔가요?">
                            지단백 대사 이상으로 혈중 내의 지질 양이 비정상적으로 변화되어 고콜레스테롤혈증,
                            고중성지방혈증, 저고밀도지단백혈증 등의 형태로 나타납니다. <br />
                            이러한 이상지질혈증은 심혈관 질환 및 뇌혈관절환과 허혈성심질환의 원인질환으로 알려져
                            있습니다.
                        </Collapse.Panel>
                        <Collapse.Panel key="2" title="이상지질혈증의 증상은 무엇인가요?">
                            지단백 대사 이상으로 혈중 내의 지질 양이 비정상적으로 변화되어 고콜레스테롤혈증,
                            고중성지방혈증, 저고밀도지단백혈증 등의 형태로 나타납니다. <br />
                            이러한 이상지질혈증은 심혈관 질환 및 뇌혈관절환과 허혈성심질환의 원인질환으로 알려져
                            있습니다.
                        </Collapse.Panel>
                        <Collapse.Panel key="3" title="이상지질혈증에 좋은 음식은 뭔가요?">
                            지단백 대사 이상으로 혈중 내의 지질 양이 비정상적으로 변화되어 고콜레스테롤혈증,
                            고중성지방혈증, 저고밀도지단백혈증 등의 형태로 나타납니다. <br />
                            이러한 이상지질혈증은 심혈관 질환 및 뇌혈관절환과 허혈성심질환의 원인질환으로 알려져
                            있습니다.
                        </Collapse.Panel>
                        <Collapse.Panel key="4" title="이상지질혈증 치료법은 뭔가요?">
                            지단백 대사 이상으로 혈중 내의 지질 양이 비정상적으로 변화되어 고콜레스테롤혈증,
                            고중성지방혈증, 저고밀도지단백혈증 등의 형태로 나타납니다. <br />
                            이러한 이상지질혈증은 심혈관 질환 및 뇌혈관절환과 허혈성심질환의 원인질환으로 알려져
                            있습니다.
                        </Collapse.Panel>
                        <Collapse.Panel key="5" title="가슴이 답답하고 기침이 나와요">
                            지단백 대사 이상으로 혈중 내의 지질 양이 비정상적으로 변화되어 고콜레스테롤혈증,
                            고중성지방혈증, 저고밀도지단백혈증 등의 형태로 나타납니다. <br />
                            이러한 이상지질혈증은 심혈관 질환 및 뇌혈관절환과 허혈성심질환의 원인질환으로 알려져
                            있습니다.
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
            }
        />
    );
};

export default Faq;
