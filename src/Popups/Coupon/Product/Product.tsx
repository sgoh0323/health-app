/* eslint-disable */
import { Row, Col, Input, Button, Form, Tag, Select } from 'antd';
// import {
//     getBrandCategory,
//     getFirstCategory,
//     getPartnerCategory,
//     getProducts,
//     getSecondCategory,
//     getThirdCategory
// } from 'api/coupon/couponApi';
import { dataToOptions } from 'helper/recycle';
import useLoding from 'hooks/useLoding';
import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import ProductGrid from './ProductGrid';

const { TextArea } = Input;
const Product = props => {
    const { onFinish, defaultData } = props;
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useState<any>();
    const [product, setProduct] = useState(defaultData || []);
    const [data, setData] = useState<any>();
    const { setLoading } = useLoding();
    const [category, setCategory] = useState({
        categoryLevel1: [],
        categoryLevel2: [],
        categoryLevel3: [],
        categoryLevel4: []
    });
    const [brand, setBrand] = useState({ brand: [], partner: [] });

    const onchangeCategory = (type, value) => {
        // if (type === 1) {
        //     getSecondCategory(value, data => {
        //         setCategory({
        //             ...category,
        //             categoryLevel2: dataToOptions(data.result, 'nameFormat', 'id'),
        //             categoryLevel3: [],
        //             categoryLevel4: []
        //         });
        //     });
        //     form.setFieldsValue({});
        // }
        // if (type === 2) {
        //     getThirdCategory(value, data => {
        //         setCategory({
        //             ...category,
        //             categoryLevel3: dataToOptions(data.result, 'nameFormat', 'id'),
        //             categoryLevel4: []
        //         });
        //     });
        // }
        // if (type === 3) {
        //     getThirdCategory(value, data => {
        //         setCategory({ ...category, categoryLevel4: dataToOptions(data.result, 'nameFormat', 'id') });
        //     });
        // }
        // // 엡체 조회
        // if (type === 0) {
        //     getPartnerCategory(value, data => {
        //         setBrand({ ...brand, partner: dataToOptions(data.result, 'partnerCompanyName', 'partnerMemberId') });
        //     });
        // }
    };
    const onSearch = () => {
        const searchValues = form.getFieldsValue();
        setSearchParams({ ...searchValues, page: 1, limit: 10 });
        handleSearchData({ ...searchValues, page: 1, limit: 10 });
    };
    const handleSearchData = param => {
        setLoading(
            // getProducts({ ...param }, rs => {
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
        // getFirstCategory(data => {
        //     setCategory({ ...category, categoryLevel1: dataToOptions(data.result, 'nameFormat', 'id') });
        // });
        // getBrandCategory(data => {
        //     setBrand({ ...brand, brand: dataToOptions(data.result, 'brandName', 'brandCode') });
        // });
    }, []);
    const tagClose = e => {
        setProduct(product.filter(i => i !== e));
    };
    useEffect(() => {
        //
        if (defaultData) {
            setProduct(defaultData);
        }
    }, [defaultData]);
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
                    적용상품
                </Col>
                <Col className="data" span={20}>
                    {product.length > 0 &&
                        product.map(item => {
                            return (
                                <Tag
                                    key={uniqueId()}
                                    closable
                                    color="#2db7f5"
                                    style={{ marginBottom: '3px' }}
                                    onClose={e => {
                                        tagClose(item);
                                    }}>
                                    {item.itId}
                                </Tag>
                            );
                        })}
                </Col>
                <Col span={24} style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            onFinish(product);
                        }}>
                        저장
                    </Button>
                </Col>
            </Row>
            <Form layout="horizontal" form={form} style={{ textAlign: 'left' }}>
                <Row className="content__contentbox__table">
                    <Col className="label" span={4}>
                        카테고리
                    </Col>
                    <Col className="data" span={20}>
                        <Row align="middle" justify="start">
                            <Form.Item name="categoryLevel1" label="" style={{ width: '200px' }}>
                                <Select
                                    placeholder="대분류"
                                    options={category.categoryLevel1}
                                    onChange={e => {
                                        onchangeCategory(1, e);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="categoryLevel2" label="" style={{ width: '200px' }}>
                                <Select
                                    placeholder="중분류"
                                    options={category.categoryLevel2}
                                    onChange={e => {
                                        onchangeCategory(2, e);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="categoryLevel3" label="" style={{ width: '200px' }}>
                                <Select
                                    placeholder="소분류"
                                    options={category.categoryLevel3}
                                    onChange={e => {
                                        onchangeCategory(3, e);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="categoryLevel4" label="" style={{ width: '200px' }}>
                                <Select placeholder="세분류" options={category.categoryLevel4} />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col className="label" span={4}>
                        브랜드/업체
                    </Col>
                    <Col className="data" span={20}>
                        <Row align="middle" justify="start">
                            <Form.Item name="brandCode" label="" style={{ width: '200px' }}>
                                <Select
                                    showSearch
                                    placeholder="브랜드"
                                    options={brand.brand}
                                    onChange={e => {
                                        onchangeCategory(0, e);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="partnerCompanyCode" label="" style={{ width: '200px' }}>
                                <Select placeholder="업체" options={brand.partner} />
                            </Form.Item>
                        </Row>
                    </Col>
                    <Col className="label" span={4}>
                        상품코드
                    </Col>
                    <Col className="data" span={20}>
                        <Form.Item name="itemIds" label="" style={{ width: '100%' }}>
                            <TextArea rows={3} style={{ height: '100%' }} />
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

            <ProductGrid
                data={data}
                setData={setData}
                page={searchParams?.page}
                onChangePage={onChangePage}
                onShowSizeChange={onShowSizeChange}
                product={product}
                setProduct={setProduct}
            />
        </>
    );
};
export default Product;
