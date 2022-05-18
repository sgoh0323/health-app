import React, { useState, useEffect } from 'react';
import modal from 'helper/customModal';
import moment from 'moment';
import useUser from 'hooks/user';
import { Row, Button, Breadcrumb, Form } from 'antd';
import { isEmpty, uniqueId } from 'lodash';
import { getNotice, postNotices } from 'api/partner/noticesApi';
import { useHistory, useParams } from 'react-router-dom';
import useLoding from 'hooks/useLoding';
import NoticeForm from '../comp/NoticeForm';

const AddNoticeContainer: React.FunctionComponent = () => {
    const [rowDatas, setRowDatas] = useState<any>([]);
    const { userInfo } = useUser();
    const [content, setContent] = useState<any>();
    const [isChaged, setIsChaged] = useState<boolean>(false);
    const history = useHistory();
    const [form] = Form.useForm();
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const { setLoading } = useLoding();

    useEffect(() => {
        return () => {
            form.resetFields();
            setContent('');
            setIsChaged(false);
            setUploadFiles([]);
        };
    }, []);

    const onFinish = (values: any) => {
        form.validateFields().then(values => {
            const params = { ...values, isTopFix: values.isTopFix ? 1 : 0 };
            const formData = new FormData();

            Object.keys(params).forEach(key => {
                if (params[key] !== undefined && params[key] !== null) {
                    formData.append(key, params[key]);
                } else if (key === 'articleIdx') {
                    formData.append('articleIdx', '');
                }
            });
            if (uploadFiles) {
                uploadFiles.forEach(element => {
                    formData.append('files', element);
                });
            }
            setLoading(
                postNotices(formData, data => {
                    if (data?.message.indexOf('성공') > -1) {
                        // modal.info('저장 되었습니다.');
                        history.push('/partner/notice/list');
                    } else {
                        modal.warn('저장에 실패 했습니다.');
                    }
                })
            );
        });
    };

    return (
        <>
            <section className="page_content">
                <Breadcrumb className="title-navi__navi">
                    <Breadcrumb.Item className="title-navi__navi__home">공지사항</Breadcrumb.Item>
                    <Breadcrumb.Item className="title-navi__navi__parent">공지사항 등록</Breadcrumb.Item>
                </Breadcrumb>
                <NoticeForm
                    form={form}
                    content={content}
                    uploadFiles={uploadFiles}
                    setUploadFiles={setUploadFiles}
                    setContent={setContent}
                    setIsChaged={setIsChaged}
                    userInfo={userInfo}
                />
                <Row justify="center">
                    <Button
                        type="primary"
                        onClick={() => {
                            if (isChaged) {
                                modal.msg('104', '', () => {
                                    history.goBack();
                                });
                            } else {
                                history.goBack();
                            }
                        }}>
                        이전
                    </Button>
                    <Button type="primary" onClick={onFinish}>
                        등록
                    </Button>
                </Row>
            </section>
        </>
    );
};

export default AddNoticeContainer;
