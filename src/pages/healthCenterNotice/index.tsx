import { Result } from 'antd';
import { Button, Card, Collapse, Form, Input, NoticeBar, Space, Swiper } from 'antd-mobile';
import Layout from 'layout';
import React from 'react';
import { BellOutline, SetOutline, RightOutline, PictureOutline } from 'antd-mobile-icons';
import { Link, withRouter } from 'react-router-dom';
import { menus } from 'router/menu';
import { uniqueId } from 'lodash';

const Login = ({ location, history }) => {
    const item = menus[location.pathname];
    const colors = ['rgba(255, 228, 208, 0.43)', '#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
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
    return (
        <Layout
            item={item}
            contents={
                <>
                    <Collapse style={{ padding: '20px' }}>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                        <Collapse.Panel key={uniqueId()} title="건강 퀴즈 풀고 내 건강을 관리하세요.">
                            코르티솔(Cortisol)은 부신 피질에서 분비되는 호르몬이에요. 뇌하수체의
                            부신피질자극호르몬(ACTH)에 의해 조절되요. 체내 혈당 생성, 기초 대사 유지, 지방 합성 억제,
                            항염증 작용, 항알레르기 작용 및 스트레스에 대응하는 역할을 해요. 코르티솔 검사를 통해 부신
                            기능 부전이나 쿠싱증후군 진단을 내릴 수 있어요.   코르티솔 수치가 높아지면 보름달형
                            얼굴(moon face)이 나타나고, 몸통이나 목 뒤에 지방이 축적되어 두꺼워지거나, 수염이 짙고
                            많아지며, 피부가 얇아 멍이 잘 들고 안면홍조가 나타나는 등 신체적 특징이 나타나요. 치료를
                            위해 스테로이드를 장기 복용했을 때도 같은 증상이 나타날 수 있으며, ‘쿠싱증후군’을 의심해요.
                        </Collapse.Panel>
                    </Collapse>
                </>
            }
        />
    );
};

export default withRouter(Login);
