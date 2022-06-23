import React, { RefObject, useState } from 'react';
import { EChart, Template } from 'components';
import { motion } from 'framer-motion';
import {
    Badge,
    Button,
    Calendar,
    CapsuleTabs,
    Card,
    Collapse,
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
import { BellOutline, SetOutline, RightOutline, PictureOutline } from 'antd-mobile-icons';
import { AntCloudOutlined, RightOutlined } from '@ant-design/icons';
import { DatePickerRef } from 'antd-mobile/es/components/date-picker';
import moment from 'moment';
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';
import LineChart from 'components/lineChart';
import { menus } from 'router/menu';
import Layout from 'layout';
import { withRouter } from 'react-router-dom';
import MyResponsivePie from 'components/pieChart';
import ScrollViewContainer from 'components/animation/ScrollViewContainer';
import { Image } from 'antd';
import PopupBox from 'components/popupBox/PopupBox';
import WeekBox from 'components/weekBox/WeekBox';
import MiniChart from 'components/miniChart';
// import { DatePicker } from 'antd';

const { Step } = Steps;
const Login = ({ location, history }) => {
    const colors = ['rgba(255, 228, 208, 0.43)', '#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
    const [fileList, setFileList] = useState<ImageUploadItem[]>([
        {
            url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        }
    ]);
    const items = colors.map((color, index) => (
        <Swiper.Item key={index} style={{ marginRight: '10px', padding: '5px' }}>
            <Card
                style={{
                    backgroundColor: `${color}`,
                    width: '100%'

                    // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                }}>
                <div style={{ width: '100%', display: 'inline-flex' }}>
                    <div style={{ width: '60%', padding: '5px', position: 'relative' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                            스트레칭하기 <RightOutline />
                        </div>
                        <div style={{ fontSize: '1rem', padding: '10px' }}>찌뿌둥한 몸을 쭉쭉 뻗어봐요~!</div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 'calc( 50% - 55px)',
                                textAlign: 'center'
                            }}>
                            <div>
                                <Button color="success" shape="rounded">
                                    도전 완료 !
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <div style={{ width: '100%' }}>
                            <img
                                width="100%"
                                src={require('assets/images/common/mission_sample.png')}
                                style={{ maxWidth: '200px' }}
                            />
                        </div>
                    </div>
                </div>
            </Card>
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
                <div
                // style={{ padding: '10px' }}
                >
                    <Space
                        align="center"
                        className="header_title"
                        justify="between"
                        style={{ width: '100%', backgroundColor: '#EF800A', color: 'white', padding: '10px 20px' }}>
                        <Space align="end" className="header_title" style={{ display: 'flex' }}>
                            <div
                                className="main"
                                style={{ fontSize: '2rem', textDecoration: 'underline 1px', fontStyle: 'italic' }}>
                                Smart Care
                            </div>
                        </Space>
                        <Space>
                            <div>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '30px',
                                        padding: 5
                                    }}>
                                    <SetOutline fontSize={30} />
                                </div>
                            </div>
                            <div>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '30px',
                                        padding: 5
                                    }}>
                                    <Badge content={Badge.dot} style={{ '--top': '10%', '--right': '20%' }}>
                                        <BellOutline fontSize={30} />
                                    </Badge>
                                </div>
                            </div>
                        </Space>
                    </Space>
                    <div style={{ backgroundColor: 'white' }}>
                        <div
                            style={{
                                width: '100%',
                                borderRadius: '0px 0px 0px 60px',
                                backgroundColor: '#EF800A',
                                color: 'white',
                                padding: '0px 30px 10px'
                            }}>
                            <div className="main" style={{ fontSize: '1.2rem' }}>
                                복부 둘레 감소 프로그램
                            </div>
                            <div className="main" style={{ fontSize: '1.2rem' }}>
                                홍길동님은 현재 3주차 진행중입니다.
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: '#EF800A',
                            color: 'white'
                        }}>
                        <div
                            style={{
                                width: '100%',
                                borderRadius: '0px 60px 0px 0px',
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '15px'
                            }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Daily Mission</div>
                            <Swiper
                                autoplay
                                loop
                                autoplayInterval={5000}
                                slideSize={80}
                                // trackOffset={90}
                                style={
                                    {
                                        // margin: 10
                                        // '--track-padding': ' 0 0 16px'
                                    }
                                }>
                                {items}
                            </Swiper>
                        </div>
                    </div>
                    <Space />
                    <div style={{ padding: '0px 20px' }}>
                        {/* <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0,
                                type: 'spring',
                                stiffness: 260,
                                damping: 20
                            }}>
                            <Card title="미션 수행도">
                                <EChart />
                            </Card>
                        </motion.div> */}
                        <Space />
                        {/* <Card title="미션 수행도">
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
                    <Space /> */}
                        <PopupBox type="공지/이벤트" title="간식제로 챌린지 공유하기!">
                            <div>간식제로 챌린지를 친구들에게도 소개해보세요. 추첨을 통하여 커피 이모티콘을 드려요</div>
                        </PopupBox>
                        <Space />
                        <WeekBox type="" />
                        <Space />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.1,
                                type: 'spring',
                                stiffness: 260,
                                damping: 20
                            }}>
                            <Card title="오늘의 활동량(운동/걸음수)">
                                <LineChart />
                            </Card>
                        </motion.div>
                        <Space />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.2,
                                type: 'spring',
                                stiffness: 260,
                                damping: 20
                            }}>
                            <Card title="영양섭취 기록">
                                <LineChart />
                            </Card>
                        </motion.div>
                        <Space />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.3,
                                type: 'spring',
                                stiffness: 260,
                                damping: 20
                            }}>
                            <Card title="미션 수행도">
                                <CapsuleTabs>
                                    <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                        <Steps direction="vertical" key={2}>
                                            <Step
                                                title="미션1"
                                                status="finish"
                                                key={1}
                                                children={<div>체중재기</div>}
                                                description={<div>체중재기</div>}
                                            />
                                            <Step
                                                title="미션2"
                                                key={2}
                                                children={<div>체중재기</div>}
                                                description={<div>천리길도 한걸음부터</div>}
                                                status="process"
                                            />
                                            <Step title="미션3" key={3} status="wait" />
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
                        </motion.div>
                    </div>
                    {/* <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer>
                    <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer>
                    <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer>
                    <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer>
                    <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer>
                    <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer>
                    <Space />
                    <ScrollViewContainer>
                        <Card title="미션 수행도">
                            <CapsuleTabs>
                                <CapsuleTabs.Tab title={<div>1주차</div>} key="fruits">
                                    <Steps direction="vertical" key={2}>
                                        <Step
                                            title="미션1"
                                            status="finish"
                                            key={1}
                                            children={<div>체중재기</div>}
                                            description={<div>체중재기</div>}
                                        />
                                        <Step
                                            title="미션2"
                                            key={2}
                                            children={<div>체중재기</div>}
                                            description={<div>천리길도 한걸음부터</div>}
                                            status="process"
                                        />
                                        <Step title="미션3" key={3} status="wait" />
                                    </Steps>
                                </CapsuleTabs.Tab>
                            </CapsuleTabs>
                        </Card>
                    </ScrollViewContainer> */}
                    {/* <input type="file" accept="image/*" capture="camera" />
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
                    </ImageUploader> */}
                </div>
            }
        />
    );
};

export default withRouter(Login);
