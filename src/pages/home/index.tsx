import React, { RefObject } from 'react';
import { EChart, Template } from 'components';
import {
    Button,
    Calendar,
    Card,
    DatePicker,
    Divider,
    Form,
    Input,
    NoticeBar,
    Space,
    Steps,
    Swiper,
    Toast
} from 'antd-mobile';
import { AntCloudOutlined, RightOutlined } from '@ant-design/icons';
import { DatePickerRef } from 'antd-mobile/es/components/date-picker';
import moment from 'moment';
// import { DatePicker } from 'antd';

const { Step } = Steps;
const Login: React.FunctionComponent = () => {
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div
                style={{ background: color, height: '30vh' }}
                // onClick={() => {
                //     Toast.show(`TEST ${index + 1}`);
                // }}
            >
                {index + 1}
            </div>
        </Swiper.Item>
    ));
    return (
        <div style={{ padding: '10px' }}>
            <Swiper autoplay loop>
                {items}
            </Swiper>
            <NoticeBar
                content="본 서비스는 교보생명과 공동으로 챌린지 성격의 각종 이벤트를 운영하는 것이 원칙이며, 회사 단독으로 이용자 등급 또는 이용자가 사용중인 서비스에 따라 이벤트를 차등 제공할 수도 있습니다."
                color="alert"
            />
            <Space />
            <Card>
                <EChart />
            </Card>
            <Space />
            <Card
                title={
                    <div style={{ fontWeight: 'normal' }}>
                        <AntCloudOutlined style={{ marginRight: '4px', color: '#1677ff' }} />
                        이달의 건강 뉴스
                    </div>
                }
                extra={<RightOutlined />}
                // onBodyClick={onBodyClick}
                // onHeaderClick={onHeaderClick}
                style={{ borderRadius: '16px' }}>
                <div>테스트</div>
                <Divider />
                <div onClick={e => e.stopPropagation()}>
                    <Button
                        color="primary"
                        onClick={() => {
                            Toast.show('확인');
                        }}>
                        건강도서관
                    </Button>
                </div>
            </Card>
            <Space />
            <Form.Item
                name="birthday"
                label="검진일"
                trigger="onConfirm"
                onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                    datePickerRef.current?.open();
                }}>
                <DatePicker>
                    {value => {
                        console.log(value);
                        return value ? moment(value).format('YYYY-MM-DD') : '';
                    }}
                </DatePicker>
                {/* <DatePicker /> */}
            </Form.Item>

            <Steps current={1}>
                <Step title="기본정보" description="기본정보" />
                <Step title="문진" description="문진" status="error" />
                <Step title="결과" description="결과" />
            </Steps>
            <Input />
            <Calendar
                // defaultValue={defaultRange}
                selectionMode="range"
                onChange={val => {
                    console.log(val);
                }}
            />
        </div>
    );
};

export default Login;
