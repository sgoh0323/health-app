import { Button, Card, Dropdown, Radio, Selector, Space } from 'antd-mobile';

const MultiSelectCard = ({ title = '', subTitle = '', items = [], onClick }) => {
    return (
        <Card
            style={{
                fontWeight: 600,
                maxWidth: 'calc( 100% - 150px)',
                overflowWrap: 'anywhere',
                backgroundColor: '#dfdfdf'
            }}>
            <div dangerouslySetInnerHTML={{ __html: title }}></div>
            <Selector options={items} multiple={true} onChange={(arr, extend) => console.log(arr, extend.items)} />
        </Card>
    );
};
export default MultiSelectCard;
