import { Button, Card, Dropdown, FloatingPanel, Image, Radio, Selector, Space } from 'antd-mobile';

const ImageListCard = ({ title = '', subTitle = '', content = '111111111', items = [], onClick = undefined }) => {
    return (
        <Space
            block
            className="scroll-hidden"
            style={{
                WebkitOverflowScrolling: 'touch',
                overflow: 'scroll',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}>
            <Card
                style={{
                    fontWeight: 600,
                    maxWidth: 'calc( 100vw - 150px)',
                    width: '90vw',
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
            <Card
                style={{
                    fontWeight: 600,
                    maxWidth: 'calc( 100vw - 150px)',
                    width: '90vw',
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
            <Card
                style={{
                    fontWeight: 600,
                    overflowWrap: 'anywhere',
                    maxWidth: 'calc( 100vw - 150px)',
                    width: '90vw',
                    backgroundColor: '#dfdfdf'
                }}>
                <Image src="https://cdn.mindgil.com/news/photo/202009/69795_4370_1604.jpg" height={100} />
                <div dangerouslySetInnerHTML={{ __html: title }} style={{ margin: '10 0' }}></div>
                <div dangerouslySetInnerHTML={{ __html: content }} style={{ margin: '10 10', fontWeight: 400 }}></div>
                <Button style={{ width: '100%', margin: '10px 0px' }}>알아보기</Button>
                <Space />
                <Button style={{ width: '100%' }}>자세히 보기</Button>
            </Card>
        </Space>
    );
};
export default ImageListCard;
