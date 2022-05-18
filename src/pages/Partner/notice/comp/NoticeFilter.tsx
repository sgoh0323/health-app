import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio } from 'antd';
import { FilterRangePicker } from 'components';
import moment from 'moment';
import React, { useState } from 'react';
import {
    confirmOptions,
    dateTypeOptions,
    searchOptions,
    targetsOptions,
    topFixOptions,
    useOptions
} from 'types/Common/NoticesOptions';
import ManagerPopup from 'Popups/Manager';

const NoticeFilter = props => {
    const { form } = props;
    const [visibleTargetSearch, setVisibleTargetSearch] = useState<boolean>(false);
    const onChangeDateRange = e => {
        if (e !== 999) {
            form.setFieldsValue({ startDate: moment().add('day', -e), endDate: moment() });
        }
    };
    const onChangeNoticeTarget = e => {
        setVisibleTargetSearch(e === 3);
    };
    const setManager = e => {
        const id = e.map(item => {
            return item.id;
        });
        form.setFieldsValue({ noticeTargetIds: id.toString() });
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
                            <Select options={dateTypeOptions} />
                        </Form.Item>
                        <FilterRangePicker form={form} />
                    </Row>
                </Col>
                <Col className="label " span={4}>
                    대상
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item name="noticeTarget" initialValue={0} label="" style={{ width: '200px' }}>
                            <Select onChange={onChangeNoticeTarget} options={targetsOptions} />
                        </Form.Item>
                        {visibleTargetSearch && (
                            <>
                                <Form.Item
                                    name="noticeTargetIds"
                                    label=""
                                    initialValue=""
                                    style={{ width: '200px', marginLeft: '10px', marginRight: '0px' }}>
                                    <Input readOnly />
                                </Form.Item>
                                {/* <Form.Item
                                    name="noticeTargetNames"
                                    label=""
                                    initialValue=""
                                    style={{ width: '200px', marginLeft: '10px', marginRight: '0px' }}>
                                    <Input />
                                </Form.Item> */}
                                <ManagerPopup setValue={setManager} />
                            </>
                        )}
                    </Row>
                </Col>
                <Col className="label" span={4}>
                    확인여부
                </Col>
                <Col className="data" span={8}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="isConfirm"
                        initialValue={0}
                        label="">
                        <Radio.Group options={confirmOptions} />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    상단고정 여부
                </Col>
                <Col className="data" span={8}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="isTopFix"
                        label=""
                        // valuePropName="checked"
                        initialValue="all">
                        {/* <Checkbox>고정</Checkbox> */}
                        <Radio.Group options={topFixOptions} />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    노출여부
                </Col>
                <Col className="data" span={20}>
                    <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 24 }} name="isUse" initialValue={1} label="">
                        <Radio.Group options={useOptions} />
                    </Form.Item>
                </Col>

                <Col className="label " span={4}>
                    검색
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item
                            name="searchType"
                            initialValue={0}
                            label=""
                            style={{ width: '200px', marginRight: '10px' }}>
                            <Select options={searchOptions} />
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
export default NoticeFilter;
