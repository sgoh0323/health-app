import { Button, Card, Divider, FloatingPanel, Grid, Popup, Selector, Space } from 'antd-mobile';
import { useState } from 'react';

const testOptions = [
    { label: '선택1', value: 1 },
    { label: '선택2', value: 2 },
    { label: '선택3', value: 3 },
    { label: '선택4', value: 4 },
    { label: '선택5', value: 5 },
    { label: '선택6', value: 6 },
    { label: '선택7', value: 7 },
    { label: '선택8', value: 8 },
    { label: '선택9', value: 9 }
];
const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8];
const BottomPopup = ({ title = '', subTitle = '증상을 선택해 주세요.', items = testOptions }) => {
    const [visible, setVisible] = useState(false);
    const ComPopUp = () => {
        return (
            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false);
                }}
                position="bottom"
                bodyStyle={{ height: '40vh' }}>
                <>
                    <Space
                        style={{ width: '100%', borderBottom: '1px solid lightgray' }}
                        align="center"
                        justify="between">
                        <div style={{ marginLeft: 10, maxWidth: 'calc( 100vw - 100px )' }}>{subTitle}</div>
                        <div style={{ textAlign: 'end' }}>
                            <Button
                                fill="none"
                                style={{ width: '80px' }}
                                onClick={() => {
                                    setVisible(false);
                                }}>
                                취소
                            </Button>
                        </div>
                    </Space>
                </>
            </Popup>
        );
    };
    return (
        <>
            <Card
                style={{
                    fontWeight: 600,
                    maxWidth: 'calc( 100% - 150px)',
                    overflowWrap: 'anywhere',
                    backgroundColor: '#dfdfdf'
                }}
                onClick={() => {
                    setVisible(true);
                }}>
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
                {/* <PanelUp /> */}
            </Card>
            <ComPopUp />
        </>
    );
};
export default BottomPopup;
