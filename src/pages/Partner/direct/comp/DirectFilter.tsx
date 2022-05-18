import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio } from 'antd';
import { FilterRangePicker } from 'components';
import moment from 'moment';
import React from 'react';
import {
    directSearchOptions,
    directDateTypeOptions,
    directTargetsOptions,
    statusOptions
} from 'types/Common/NoticesOptions';

const DirectFilter = props => {
    const { form } = props;
    const onChangeDateRange = e => {
        if (e !== 999) {
            form.setFieldsValue({ startDate: moment().add('day', -e), endDate: moment() });
        }
    };
    return (
        <>
            <Row className="content__contentbox__table">
                <Col className="label" span={4}>
                    기간
                </Col>
                <Col className="data" span={20}>
                    <Row align="middle" justify="start">
                        <Form.Item name="searchDateType" initialValue={0} label="" style={{ width: '200px' }}>
                            <Select options={directDateTypeOptions} />
                        </Form.Item>
                        <FilterRangePicker form={form} />
                    </Row>
                </Col>
                <Col className="label " span={4}>
                    답변상태
                </Col>
                <Col className="data" span={8}>
                    <Row justify="start">
                        <Form.Item name="questionStatus" initialValue={100} label="" style={{ width: '200px' }}>
                            <Select options={statusOptions} />
                        </Form.Item>
                    </Row>
                </Col>
                <Col className="label" span={4}>
                    문의대상
                </Col>
                <Col className="data" span={8}>
                    <Form.Item
                        name="searchTargetType"
                        label=""
                        initialValue={0}
                        style={{ width: '100px', marginLeft: '0px', marginRight: '10px' }}>
                        <Select options={directTargetsOptions} defaultValue={0} />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    검색어
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item
                            name="searchType"
                            initialValue={0}
                            label=""
                            style={{ width: '200px', marginRight: '10px' }}>
                            <Select options={directSearchOptions} />
                        </Form.Item>
                        <Form.Item
                            name="searchWord"
                            label=""
                            initialValue=""
                            style={{ width: '200px', marginLeft: '0px', marginRight: '0px' }}>
                            <Input />
                        </Form.Item>
                    </Row>
                </Col>
            </Row>
        </>
    );
};
export default DirectFilter;
