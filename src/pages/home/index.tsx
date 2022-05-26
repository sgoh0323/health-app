import React, { RefObject, useState } from 'react';
import { EChart, Template } from 'components';
import {
    Badge,
    Button,
    Calendar,
    CapsuleTabs,
    Card,
    DatePicker,
    Divider,
    Form,
    ImageUploader,
    Input,
    NoticeBar,
    Space,
    Steps,
    Swiper,
    Tabs,
    Toast
} from 'antd-mobile';
import { BellOutline, PictureOutline } from 'antd-mobile-icons';
import { AntCloudOutlined, RightOutlined } from '@ant-design/icons';
import { DatePickerRef } from 'antd-mobile/es/components/date-picker';
import moment from 'moment';
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';
import LineChart from 'components/lineChart';
import { menus } from 'router/menu';
import Layout from 'layout';
import { withRouter } from 'react-router-dom';
import MyResponsivePie from 'components/pieChart';
// import { DatePicker } from 'antd';

const { Step } = Steps;
const Login = ({ location, history }) => {
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
    const [fileList, setFileList] = useState<ImageUploadItem[]>([
        {
            url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        }
    ]);
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

    const mockUpload = async (file: File) => {
        return {
            url: URL.createObjectURL(file)
        };
    };

    const item = menus[location.pathname];
    return (
        <Layout
            item={item}
            contents={
                <div style={{ padding: '10px' }}>
                    <Space align="center" className="header_title" justify="between" style={{ width: '100%' }}>
                        <Space align="end" className="header_title" style={{ display: 'flex' }}>
                            <div className="main" style={{ fontSize: '2rem' }}>
                                1주차
                            </div>
                            <div className="sub" style={{ fontSize: '1rem' }}>
                                미션수행중
                            </div>
                        </Space>
                        <div>
                            <Badge content={Badge.dot}>
                                <BellOutline fontSize={30} />
                            </Badge>
                        </div>
                    </Space>
                    <Space />
                    <Card title="미션 수행도">
                        <EChart />
                    </Card>
                    <Space />
                    <Card title="미션 수행도">
                        <div style={{ width: '90%', height: '40vh' }}>
                            <MyResponsivePie
                                data={[
                                    {
                                        id: 'Fruits',
                                        data: [{ x: 'Apples', y: 32 }]
                                    },
                                    {
                                        id: 'Vegetables',
                                        data: [{ x: 'Eggplants', y: 27 }]
                                    }
                                ]}
                            />
                        </div>
                    </Card>
                    <Space />

                    <Card title="오늘의 활동량(운동/걸음수)">
                        <LineChart />
                    </Card>
                    <Space />
                    <Card title="영양섭취 기록">
                        <LineChart />
                    </Card>
                    <Space />
                    <Card title="미션 수행도">
                        <CapsuleTabs>
                            <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                <Steps direction="vertical">
                                    <Step
                                        title="미션1"
                                        status="process"
                                        children={<div>asdajsdk</div>}
                                        description={<div>asdajsdk</div>}
                                    />
                                    <Step title="미션2" status="wait" />
                                    <Step title="미션3" status="wait" />
                                </Steps>
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>2주차</div>} key="vegetables">
                                2주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>3주차</div>} key="animals1">
                                3주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>4주차</div>} key="animals2">
                                3주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>5주차</div>} key="animals3">
                                3주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>6주차</div>} key="animals4">
                                3주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>7주차</div>} key="animals5">
                                3주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>8주차</div>} key="animals6">
                                3주차
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title={<div>9주차</div>} key="animals7">
                                3주차
                            </CapsuleTabs.Tab>
                        </CapsuleTabs>
                    </Card>
                    <Space />
                    <input type="file" accept="image/*" capture="camera" />
                    <Space />
                    <ImageUploader value={fileList} onChange={setFileList} upload={mockUpload}>
                        <div
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#999999'
                            }}>
                            <PictureOutline style={{ fontSize: 32 }} />
                        </div>
                    </ImageUploader>
                </div>
            }
        />
    );
};

export default withRouter(Login);
