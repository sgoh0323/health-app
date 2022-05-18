/* eslint-disable */
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button, Form } from 'antd';
import { apiFileDownload } from 'api/common/commonApi';
import { deleteNoticeAnswer, postNoticesAnswer, putNoticeAnswer } from 'api/notices/noticesApi';
import { CustomUpload, Editor, PostcodePopup } from 'components';
import CustomDownload from 'components/customDownload';
import modal from 'helper/customModal';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const AnswerForm = props => {
    const { viewMode, userInfo, articleIdx, onClose, data, refresh, setIsAnsChaged } = props;
    const [form] = Form.useForm();
    const [content, setContent] = useState<string>();
    const [boadrFiles, setBoadrFiles] = useState<any[]>([]);
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const [mode, setMode] = useState(false);

    const onchange = e => {
        setContent(e);
        form.setFieldsValue({ content: e });
        if (data && data.result?.data.content !== e) {
            setIsAnsChaged(true);
        }
    };

    const onFinish = () => {
        form.validateFields().then(params => {
            modal.msg(
                '101',
                '',
                () => {
                    const formData = new FormData();

                    Object.keys(params).forEach(key => {
                        console.log(key, ' : ', params[key]);
                        if (params[key] !== undefined && params[key] !== null) {
                            formData.append(key, params[key]);
                        }
                    });
                    // 수정시 파일 업로드 백엔드 테스트 필요함
                    // if (itemFiles.length > 0) {
                    //     const idxs = itemFiles.map(item => {
                    //         return item.idx;
                    //     });
                    //     formData.append('includeFileIdxs', String(idxs));
                    // }
                    if (uploadFiles) {
                        uploadFiles.forEach(element => {
                            formData.append('files', element);
                        });
                    }
                    if (data) {
                        if (boadrFiles.length > 0) {
                            boadrFiles.map(item => {
                                return formData.append('includeFileIdxs', item.idx);
                            });
                        }
                        formData.append('answerIdx ', data.result?.data.answerIdx);
                        putNoticeAnswer({ data: formData }, data => {
                            if (data?.message.indexOf('성공') > -1) {
                                // modal.info('저장 되었습니다.');
                                setMode(!mode);
                                if (refresh) {
                                    refresh();
                                }
                                setIsAnsChaged(false);
                                // form.resetFields();
                            } else {
                                modal.warn('저장에 실패 했습니다.');
                            }
                        });
                    } else {
                        postNoticesAnswer({ data: formData }, data => {
                            if (data?.message.indexOf('성공') > -1) {
                                // modal.info('저장 되었습니다.');
                                onClose();
                                if (refresh) {
                                    refresh();
                                }
                                form.resetFields();
                            } else {
                                modal.warn('저장에 실패 했습니다.');
                            }
                        });
                    }
                },
                () => {
                    //
                }
            );
        });
    };

    useEffect(() => {
        if (data) {
            form.setFieldsValue({ ...data.result?.data });
            setContent(data.result?.data.content);
            setIsAnsChaged(false);
            // setTimeout(() => {
            // }, 1000);
            if (data.result?.files) {
                setBoadrFiles([...data.result?.files]);
            }
            // setMode(viewMode);
        } else {
            form.setFieldsValue({ registerName: userInfo?.name });
            form.setFieldsValue({ registDate: moment().format('yyyy-MM-DD HH:mm:ss') });
        }
        return () => {
            form.resetFields();
            setContent('');
            setUploadFiles([]);
        };
    }, []);

    const onClickDownLoad = (e: any) => {
        apiFileDownload({ idx: e.idx, fileName: e.fileName });
    };
    const onClickDelete = (values: any) => {
        modal.msg(
            '102',
            '',
            () => {
                deleteNoticeAnswer(
                    { articleIdx: data.result?.data.articleIdx, answerIdx: data.result?.data.answerIdx },
                    data => {
                        if (refresh) {
                            refresh();
                        }
                    }
                );
            },
            () => {
                //
            }
        );
    };
    return (
        <>
            <Form
                layout="horizontal"
                form={form}
                style={{ textAlign: 'left' }}
                onChange={() => {
                    setIsAnsChaged(true);
                }}>
                <Row className="content__contentbox__table">
                    <Form.Item
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 0 }}
                        name="articleIdx"
                        hidden
                        label=""
                        initialValue={articleIdx}>
                        <Input />
                    </Form.Item>
                    {data && (
                        <Col className="label " span={24}>
                            답글
                        </Col>
                    )}
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
                    <Col className="data" span={20} style={{ textAlign: 'left' }}>
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
                        {`${form.getFieldValue('registerName')} ${form.getFieldValue('registDate')}`}
                    </Col>
                    <Col className="label" span={4}>
                        최종수정자/일시
                    </Col>
                    <Col className="data" span={8}>
                        {`${form.getFieldValue('updaterName')} ${form.getFieldValue('updateDate')}`}
                    </Col>
                    <Col className="" span={24} style={{ marginTop: '10px', textAlign: 'end' }}>
                        <Button type="primary" onClick={onFinish}>
                            {data ? '수정' : '등록'}
                        </Button>
                        {onClose && <Button onClick={onClose}>취소</Button>}
                    </Col>
                </Row>
            </Form>
        </>
    );
};
export default AnswerForm;
