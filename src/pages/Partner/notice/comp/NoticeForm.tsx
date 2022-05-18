/* eslint-disable */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Select, Input, Button, Checkbox, Form, Radio } from 'antd';
import { CustomUpload, Editor } from 'components';
import CustomDownload from 'components/customDownload';
import { emptyString } from 'helper/recycle';
import { uniqueId } from 'lodash';
import moment from 'moment';
import ManagerPopup from 'Popups/Manager';
import React, { useEffect, useRef, useState } from 'react';
import { confirmOptions, targetsOptions, topFixOptions, useOptions } from 'types/Common/NoticesOptions';

const NoticeForm = props => {
    const {
        mode,
        form,
        content,
        setContent,
        uploadFiles,
        setUploadFiles,
        boadrFiles,
        setBoadrFiles,
        onClickDownLoad,
        setIsChaged,
        userInfo
    } = props;
    const [visibleTargetSearch, setVisibleTargetSearch] = useState<boolean>(false);
    const onchange = e => {
        if (content !== e) {
            form.setFieldsValue({ content: e });
            setContent(e);
            setIsChaged(true);
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

    useEffect(() => {
        setIsChaged(false);
        return () => {
            //
        };
    }, []);

    return (
        <Form
            layout="horizontal"
            form={form}
            onChange={() => {
                setIsChaged(true);
            }}>
            <Row className="content__contentbox__table">
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="articleIdx"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Col className="label required" span={4}>
                    대상
                </Col>
                <Col className="data" span={20}>
                    <Row justify="start">
                        <Form.Item name="noticeTarget" label="" style={{ width: '200px' }} initialValue={0}>
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
                        label=""
                        initialValue={0}>
                        <Radio.Group options={confirmOptions} />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    상단고정 여부
                </Col>
                <Col className="data" span={8}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 10 }}
                        name="isTopFix"
                        label=""
                        valuePropName="checked">
                        <Checkbox>고정</Checkbox>
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    노출여부
                </Col>
                <Col className="data" span={20}>
                    <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 10 }} name="isUse" label="" initialValue={1}>
                        <Radio.Group options={useOptions} />
                    </Form.Item>
                </Col>
                <Col className="label required" span={4}>
                    제목
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="title"
                        label=""
                        rules={[{ required: true, message: '제목을 입력해주세요.' }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col className="label required" span={4}>
                    내용
                </Col>
                <Col className="data" span={20}>
                    <Editor value={content} height={350} onChange={onchange} />
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="content"
                        label=""
                        style={{ marginTop: '-32px' }}
                        rules={[{ required: true, message: '내용을 입력해주세요.' }]}>
                        <Input hidden style={{ height: '0px' }} />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    첨부
                </Col>
                <Col className="data" span={20}>
                    <CustomDownload downloadFiles={boadrFiles} setDownloadFiles={setBoadrFiles} />
                    <CustomUpload
                        uploadFiles={uploadFiles}
                        setUploadFiles={setUploadFiles}
                        maxCount={boadrFiles ? 3 - boadrFiles.length : 3}
                    />
                </Col>
                <Col className="label" span={4}>
                    등록자/일시
                </Col>
                <Col className="data" span={8}>
                    {userInfo
                        ? `${emptyString(userInfo.name)} ${emptyString(moment().format('YYYY-MM-DD HH:mm:ss'))}`
                        : `${emptyString(form.getFieldValue('registerName'))} ${emptyString(
                              form.getFieldValue('registDate')
                          )}`}
                </Col>
                <Col className="label" span={4}>
                    최종수정자/일시
                </Col>
                <Col className="data" span={8}>
                    {`${emptyString(form.getFieldValue('updaterName'))} ${emptyString(
                        form.getFieldValue('updateDate')
                    )}`}
                </Col>
            </Row>
        </Form>
    );
};
export default NoticeForm;
