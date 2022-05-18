/* eslint-disable */
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Modal, Form, Radio } from 'antd';
import { getCommonUsers } from 'api/common/commonApi';
import { getManagerList } from 'api/testApi';
import { numberWithCommas } from 'helper/recycle';
import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { managerSearchOptions, managerUserTypeOptions, targetsOptions } from 'types/Common/NoticesOptions';
import ManagerList from './ManagerList';

const ManagerPopup: React.FunctionComponent<{ setValue: (e: any) => void }> = props => {
    const { setValue } = props;
    const [form] = Form.useForm();
    const [data, setData] = useState<any>();
    const [item, setItem] = useState<any>();
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [gridApi, setGridApi] = useState(null);

    const onSearch = () => {
        handleSearchData({ ...form.getFieldsValue(), page: page, limit: limit });
    };

    const onRowSelected = node => {
        setValue([...node.data]);
    };
    const onSelected = () => {
        const nodes = gridApi.getSelectedNodes();
        const data = nodes.map(item => {
            return item.data;
        });
        setValue(data);
    };

    const onChangePage = value => {
        setPage(value);
        handleSearchData({ ...form.getFieldsValue(), page: value, limit: limit });
    };
    const onShowSizeChange = (page, size) => {
        setLimit(size);
        handleSearchData({ ...form.getFieldsValue(), page: page, limit: size });
        // setSearchParams({ ...searchParams, page: page });
    };
    const handleSearchData = params => {
        getCommonUsers(
            { ...params, searchUserType: params.searchUserType === 'all' ? undefined : params.searchUserType },
            rs => {
                setData(rs);
            }
        );
    };
    return (
        <>
            <Form form={form} layout="horizontal">
                <Row className="content__contentbox__table">
                    <Col className="label" span={8}>
                        구분
                    </Col>
                    <Col className="data" span={16}>
                        <Row justify="start">
                            <Form.Item name="searchUserType" initialValue="all" label="" style={{ width: '120px' }}>
                                <Select options={managerUserTypeOptions} />
                            </Form.Item>
                            <Form.Item name="searchType" initialValue={0} label="" style={{ width: '120px' }}>
                                <Select options={managerSearchOptions} />
                            </Form.Item>
                            <Form.Item name="searchWord" initialValue="" label="" style={{ width: '120px' }}>
                                <Input />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col className="label " span={8}>
                        MD 별 전체업체 선택
                    </Col>
                    <Col className="data" span={16}>
                        <Row justify="start">
                            <Form.Item
                                name="searchMdWord"
                                label=""
                                initialValue=""
                                style={{ width: '200px', marginLeft: '10px', marginRight: '0px' }}>
                                <Input />
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
            </Form>
            <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }} justify="center">
                <Button type="primary" onClick={onSearch}>
                    조회
                </Button>
                &nbsp;
                <Button type="primary">초기화</Button>
            </Row>
            <Row align="bottom" key={uniqueId()} style={{ marginBottom: '10px', marginTop: '-12px' }}>
                <Col span={12}>
                    검색결과 : <span style={{ color: 'red' }}>({numberWithCommas(data?.result?.total)}건)</span>
                </Col>
                <Col span={12} style={{ textAlign: 'end' }}>
                    <Button type="primary" onClick={onSelected}>
                        선택
                    </Button>
                </Col>
            </Row>
            <ManagerList
                data={data}
                onRowSelected={onRowSelected}
                page={page}
                onChangePage={onChangePage}
                onShowSizeChange={onShowSizeChange}
                setGridApi={setGridApi}
            />
        </>
    );
};

export default ManagerPopup;
