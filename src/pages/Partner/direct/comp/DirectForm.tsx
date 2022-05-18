/* disable-eslint */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button, Form, Radio } from 'antd';
import { CustomUpload, Editor } from 'components';
import { emptyString } from 'helper/recycle';
import React, { useEffect } from 'react';
import { directTargetsOptions } from 'types/Common/NoticesOptions';

const allowExts = ['application/pdf', 'image/png', 'image/jpeg', 'image/tiff', 'image/gif', 'image/bmp'];

const DirectForm = props => {
    const { mode, form, content, setContent, uploadFiles, setUploadFiles, boadrFiles, onClickDownLoad } = props;
    const onchange = e => {
        form.setFieldsValue({ content: e });
        setContent(e);
    };

    useEffect(() => {
        // console.log(form.getFieldsValue());
    }, []);
    return (
        <Form layout="horizontal" form={form}>
            <Row className="content__contentbox__table">
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="idx"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="questionName"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="regdateFormat"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="answerName"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="answerDateFormat"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="updateName"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 0 }}
                    name="updateDateFormat"
                    hidden
                    label=""
                    initialValue={null}>
                    <Input />
                </Form.Item>
                <Col className="label" span={4}>
                    문의대상
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="targetType "
                        label=""
                        initialValue={0}>
                        <Radio.Group options={directTargetsOptions} />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    상품코드
                </Col>
                <Col className="data" span={20}>
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 24 }}
                        name="productCode"
                        label=""
                        rules={[{ required: true, message: '상품코드를 입력하세요.' }]}>
                        <Input />
                    </Form.Item>
                </Col>
                <Col className="label" span={4}>
                    문의 내용
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
                    {boadrFiles &&
                        boadrFiles.map(item => {
                            return (
                                <Button
                                    icon={<DownloadOutlined />}
                                    onClick={() => {
                                        onClickDownLoad(item);
                                    }}>
                                    {item.fileName}
                                </Button>
                            );
                        })}
                    <CustomUpload uploadFiles={uploadFiles} setUploadFiles={setUploadFiles} />
                </Col>
                <Col className="label" span={4}>
                    문의자/문의일시
                </Col>
                <Col className="data" span={8}>
                    {`${emptyString(form.getFieldValue('questionName'))} ${emptyString(
                        form.getFieldValue('regdateFormat')
                    )}`}
                </Col>
                <Col className="label" span={4}>
                    최초답변자/최초답변일시
                </Col>
                <Col className="data" span={8}>
                    {`${emptyString(form.getFieldValue('answerName'))} ${emptyString(
                        form.getFieldValue('answerDateFormat')
                    )}`}
                </Col>
                <Col className="label" span={4}>
                    최종수정자/최종수정일시
                </Col>
                <Col className="data" span={20}>
                    {`${emptyString(form.getFieldValue('updateName'))} ${emptyString(
                        form.getFieldValue('updateDateFormat')
                    )}`}
                </Col>
            </Row>
        </Form>
    );
};
export default DirectForm;
