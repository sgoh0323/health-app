import { Button, Card, Dropdown, Radio, Space } from 'antd-mobile';

const SelectCard = ({ title = '', subTitle = '', items = [], onClick }) => {
    return (
        <Card
            style={{
                fontWeight: 600,
                maxWidth: 'calc( 100% - 150px)',
                overflowWrap: 'anywhere',
                backgroundColor: '#dfdfdf'
            }}>
            <div dangerouslySetInnerHTML={{ __html: title }}></div>
            {items.length < 6 &&
                items.map(el => {
                    return (
                        <Button size="mini" shape="rounded" onClick={onClick}>
                            {el.label}
                        </Button>
                    );
                })}
            {items.length > 5 && (
                <Dropdown>
                    <Dropdown.Item key="sorter" title={subTitle}>
                        <div style={{ padding: 12 }}>
                            <Radio.Group defaultValue="default">
                                <Space direction="vertical" block>
                                    {items.map(el => {
                                        return (
                                            <Radio block value="default">
                                                {el.label}
                                            </Radio>
                                        );
                                    })}
                                </Space>
                            </Radio.Group>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            )}
        </Card>
    );
};
export default SelectCard;
