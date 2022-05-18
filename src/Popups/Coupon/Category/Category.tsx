/* eslint-disable */
import { Row, Col, Input, Button, Form, Tag, Select } from 'antd';
// import { getFirstCategory, getCategory, getSecondCategory, getThirdCategory } from 'api/coupon/couponApi';
import { dataToOptions } from 'helper/recycle';
import useLoding from 'hooks/useLoding';
import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import CategoryGrid from './CategoryGrid';

const Category = props => {
    const { onFinish, defaultData } = props;
    const [form] = Form.useForm();
    const [searchParams, setSearchParams] = useState<any>();
    const [categoryData, setCategoryData] = useState(defaultData || []);
    const [data, setData] = useState<any>();
    const { setLoading } = useLoding();
    const [category, setCategory] = useState({
        categoryLevel1: [],
        categoryLevel2: [],
        categoryLevel3: [],
        categoryLevel4: []
    });

    const onchangeCategory = (type, value) => {
        if (type === 1) {
            // getSecondCategory(value, data => {
            //     setCategory({
            //         ...category,
            //         categoryLevel2: dataToOptions(data.result, 'nameFormat', 'id'),
            //         categoryLevel3: [],
            //         categoryLevel4: []
            //     });
            // });
            form.setFieldsValue({});
        }
        if (type === 2) {
            // getThirdCategory(value, data => {
            //     setCategory({
            //         ...category,
            //         categoryLevel3: dataToOptions(data.result, 'nameFormat', 'id'),
            //         categoryLevel4: []
            //     });
            // });
        }
        if (type === 3) {
            // getThirdCategory(value, data => {
            //     setCategory({ ...category, categoryLevel4: dataToOptions(data.result, 'nameFormat', 'id') });
            // });
        }
    };
    const onSearch = () => {
        const searchValues = form.getFieldsValue();
        setSearchParams({ ...searchValues, page: 1, limit: 10 });
        handleSearchData({ ...searchValues, page: 1, limit: 10 });
    };
    const handleSearchData = param => {
        form.validateFields().then(values => {
            setLoading(
                // getCategory({ ...param }, rs => {
                //     setData(rs.result);
                // })
            );
        });
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
    }, []);

    useEffect(() => {
        //
        if (defaultData) {
            setCategoryData(defaultData);
        }
    }, [defaultData]);
    const tagClose = e => {
        setCategoryData(categoryData.filter(i => i !== e));
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
                    제외카테고리
                </Col>
                <Col className="data" span={20}>
                    {categoryData.length > 0 &&
                        categoryData.map(item => {
                            return (
                                <Tag
                                    key={uniqueId()}
                                    closable
                                    color="#2db7f5"
                                    style={{ marginBottom: '3px' }}
                                    onClose={e => {
                                        tagClose(item);
                                    }}>
                                    {item.id}
                                </Tag>
                            );
                        })}
                </Col>
                <Col span={24} style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            onFinish(categoryData);
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
                            <Form.Item
                                name="level1Id"
                                label=""
                                rules={[{ required: true, message: '대분류를 선택해 주세요.' }]}
                                style={{ width: '200px' }}>
                                <Select
                                    placeholder="대분류"
                                    options={category.categoryLevel1}
                                    onChange={e => {
                                        onchangeCategory(1, e);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="level2Id"
                                label=""
                                rules={[{ required: true, message: '중분류를 선택해 주세요.' }]}
                                style={{ width: '200px' }}>
                                <Select
                                    placeholder="중분류"
                                    options={category.categoryLevel2}
                                    onChange={e => {
                                        onchangeCategory(2, e);
                                    }}
                                />
                            </Form.Item>
                            {/* <Form.Item name="level3Id" label="" style={{ width: '200px' }}>
                                <Select
                                    placeholder="소분류"
                                    options={category.categoryLevel3}
                                    onChange={e => {
                                        onchangeCategory(3, e);
                                    }}
                                />
                            </Form.Item> */}
                            {/* <Form.Item name="categoryLevel4" label="" style={{ width: '200px' }}>
                                <Select placeholder="세분류" options={category.categoryLevel4} />
                            </Form.Item> */}
                        </Row>
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

            <CategoryGrid
                data={data}
                setData={setData}
                page={searchParams?.page}
                onChangePage={onChangePage}
                onShowSizeChange={onShowSizeChange}
                category={categoryData}
                setCategory={setCategoryData}
            />
        </>
    );
};
export default Category;
