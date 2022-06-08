import { Button, Card, Dropdown, FloatingPanel, Image, Radio, Selector, Space } from 'antd-mobile';

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
const ImageCard = ({ title = '', subTitle = '', content = '111111111', items = testOptions, onClick = undefined }) => {
    return (
        <Card
            style={{
                fontWeight: 600,
                maxWidth: 'calc( 100% - 150px)',
                overflowWrap: 'anywhere',
                backgroundColor: '#dfdfdf'
            }}>
            <Image src="https://cdn.mindgil.com/news/photo/202009/69795_4370_1604.jpg" height={100} />
            <div dangerouslySetInnerHTML={{ __html: title }} style={{ margin: '10 0' }}></div>
            <div dangerouslySetInnerHTML={{ __html: content }} style={{ margin: '10 10', fontWeight: 400 }}></div>
            <Button style={{ width: '100%', margin: '10px 0px' }}>알아보기</Button>
            <Space />
            <Button style={{ width: '100%' }}>자세히 보기</Button>
        </Card>
    );
};
export default ImageCard;
