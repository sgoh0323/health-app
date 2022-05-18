/* eslint-disable */
import { Row, Col, Input, Button, Form, Tag, Select } from 'antd';
// import { getBrand } from 'api/coupon/couponApi';
import useLoding from 'hooks/useLoding';
import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import BrandGrid from './BrandGrid';

const { TextArea } = Input;
const Brand = props => {
    const { onFinish, defaultData } = props;
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useState<any>();
    const [brand, setBrand] = useState(defaultData || []);
    const [data, setData] = useState<any>();
    const { setLoading } = useLoding();

    const onSearch = () => {
        const searchValues = form.getFieldsValue();
        setSearchParams({ ...searchValues, page: 1, limit: 10 });
        handleSearchData({ ...searchValues, page: 1, limit: 10 });
    };
    const handleSearchData = param => {
        setLoading(
            // getBrand({ ...param }, rs => {
            //     setData(rs.result);
            // })
        );
    };

    const onChangePage = page => {
        setSearchParams({ ...searchParams, page });
        handleSearchData({ ...searchParams, page });
    };
    const onShowSizeChange = (page, size) => {
        console.log(page, ' : ', size);
        setSearchParams({ ...searchParams, limit: size });
        handleSearchData({ ...searchParams, limit: size });
    };

    useEffect(() => {
        //
        if (defaultData) {
            setBrand(defaultData);
        }
    }, [defaultData]);
    const tagClose = e => {
        setBrand(brand.filter(i => i !== e));
    };
    // useEffect(() => {
    //     // handleSearchData(searchParams);
    //     if (searchParams) {
    //         onSearch();
    //     }
    // }, [searchParams?.page, searchParams?.limit]);
    return (
        <>
            <Row className="content__contentbox__table">
                <Col className="label" span={4}>
                    브랜드
                </Col>
                <Col className="data" span={20}>
                    {brand.length > 0 &&
                        brand.map(item => {
                            return (
                                <Tag
                                    key={uniqueId()}
                                    closable
                                    color="#2db7f5"
                                    style={{ marginBottom: '3px' }}
                                    onClose={e => {
                                        tagClose(item);
                                    }}>
                                    {item.brCode}
                                </Tag>
                            );
                        })}
                </Col>
                <Col span={24} style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            onFinish(brand);
                        }}>
                        저장
                    </Button>
                </Col>
            </Row>
            <Form layout="horizontal" form={form} style={{ textAlign: 'left' }}>
                <Row className="content__contentbox__table">
                    <Col className="label" span={4}>
                        브랜드명
                    </Col>
                    <Col className="data" span={20}>
                        <Form.Item name="searchWord" label="" style={{ width: '100%' }}>
                            {/* <TextArea rows={1} style={{ height: '100%' }} /> */}
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Button type="primary" htmlType="submit" onClick={onSearch}>
                            조회
                        </Button>
                        &nbsp;
                        <Button type="primary" htmlType="reset">
                            초기화
                        </Button>
                    </Col>
                </Row>
            </Form>

            <BrandGrid
                data={data}
                setData={setData}
                page={searchParams?.page}
                onChangePage={onChangePage}
                onShowSizeChange={onShowSizeChange}
                brand={brand}
                setBrand={setBrand}
            />
        </>
    );
};
export default Brand;
