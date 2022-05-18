/* disable-eslint */
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Breadcrumb, Form, Radio, Upload, Image } from 'antd';
import { CustomUpload, Editor, PostcodePopup } from 'components';
import CustomDownload from 'components/customDownload';
import modal from 'helper/customModal';
import { emptyString, getOptionValue } from 'helper/recycle';
import { uniqueId } from 'lodash';
import React from 'react';

const NoticeDetail = props => {
    const { form, boadrFiles, setBoadrFiles, uploadFiles, setUploadFiles, content, setContent, data } = props;

    return (
        <Form form={form}>
            {data && (
                <Row className="content__contentbox__table">
                    {/* <Col className="label" span={4}>
                문의대상
            </Col>
            <Col className="data" span={8}>
                {data.targetTypeFormat}
            </Col> */}
                    <Col className="label" span={4}>
                        답변상태
                    </Col>
                    <Col className="data" span={20}>
                        {data.data.statusFormat}
                    </Col>
                    <Col className="label" span={4}>
                        상품코드
                    </Col>
                    <Col className="data" span={8}>
                        {data.data.productCode}
                    </Col>
                    <Col className="label" span={4}>
                        상품이미지
                    </Col>
                    <Col className="data" span={8}>
                        {data.data.productUrl ? <Image alt="Preview" width={36} src={data.data.productUrl} /> : ''}
                    </Col>

                    <Col className="label " span={4}>
                        문의 내용
                    </Col>
                    <Col className="data" span={20}>
                        <Editor value={data.data.content} height={150} readOnly />
                        <CustomDownload downloadFiles={data.questionFiles} readonly />
                    </Col>
                    <Col className="label " span={4}>
                        답변
                    </Col>
                    <Col className="data" span={20}>
                        <Editor value={content} onChange={setContent} height={250} />
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
                        문의업체명/문의일시
                    </Col>
                    <Col className="data" span={8}>
                        {`${emptyString(data.data.questionName)} ${emptyString(data.data.regdateFormat)}`}
                    </Col>
                    <Col className="label" span={4}>
                        최초답변자/최초답변일시
                    </Col>
                    <Col className="data" span={8}>
                        {`${emptyString(data.data.answerName)} ${emptyString(data.data.answerDateFormat)}`}
                    </Col>
                    <Col className="label" span={4}>
                        최종수정자/일시
                    </Col>
                    <Col className="data" span={20}>
                        {`${emptyString(data.data.updaterName)} ${emptyString(data.data.updateDate)}`}
                    </Col>
                </Row>
            )}
        </Form>
    );
};
export default NoticeDetail;
