import { Button, Card, Dropdown, FloatingPanel, Radio, Selector, Space } from 'antd-mobile';

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
const BottomPanel = ({ title = '', subTitle = '', items = testOptions, onClick }) => {
    const PanelUp = () => {
        return (
            <FloatingPanel anchors={anchors}>
                <div>{subTitle}</div>
                <Selector options={items} multiple={true} onChange={(arr, extend) => console.log(arr, extend.items)} />
            </FloatingPanel>
        );
    };
    return (
        <Card
            style={{
                fontWeight: 600,
                maxWidth: 'calc( 100% - 150px)',
                overflowWrap: 'anywhere',
                backgroundColor: '#dfdfdf'
            }}>
            <div dangerouslySetInnerHTML={{ __html: title }}></div>
            <PanelUp />
        </Card>
    );
};
export default BottomPanel;
