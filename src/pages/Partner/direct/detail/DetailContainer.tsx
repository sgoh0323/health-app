import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Space, Modal } from 'antd';
import {
    deletePatnerAnswer,
    deletePatnerQuestion as apiDelete,
    getPatnerQuestion,
    postPatnerAnswers,
    putPatnerAnswers
} from 'api/partner/noticesApi';
import modal from 'helper/customModal';
import { apiFileDownload } from 'api/common/commonApi';
import useLoding from 'hooks/useLoding';
// import { Answer } from 'Popups';
// import AnswerForm from 'Popups/Answer/AnswerForm';
import DirectForm from '../comp/DirectForm';
import DirectDetail from '../comp/DirectDetail';

type propsType = {
    idx: number;
    hideModal: (e) => void;
};

const DetailContainer = (props: propsType): any => {
    const { idx, hideModal } = props;
    const [content, setContent] = useState<any>();
    const [data, setData] = useState<any>();
    const [answerData, setAnswerData] = useState<any>();
    const [visible, setVisible] = useState<any>();
    const [form] = Form.useForm();
    const [boadrFiles, setBoadrFiles] = useState<any[]>([]);
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const [modifyMode, setModifyMode] = useState<boolean>(false);
    const [isChaged, setIsChaged] = useState<boolean>(false);
    const { setLoading } = useLoding();

    const onClickDownLoad = (e: any) => {
        apiFileDownload({ idx: e.idx, fileName: e.fileName });
    };
    const onChangeUploadFiles = data => {
        setIsChaged(true);
        setUploadFiles(data);
    };

    const onChangeContent = data => {
        form.setFieldsValue({ content: data });
        setContent(data);
        setIsChaged(true);
    };

    const onFinish = () => {
        form.validateFields().then(values => {
            modal.msg('101', '', () => {
                const formData = new FormData();
                formData.append('idx ', data.data.idx);
                formData.append('content ', content);
                if (data.data.answerIdx === null) {
                    formData.append('productCode', data.data.productCode);
                }

                if (uploadFiles) {
                    uploadFiles.forEach(element => {
                        formData.append('files', element);
                    });
                }
                if (data.data.answerIdx === null) {
                    setLoading(
                        postPatnerAnswers({ data: formData }, data => {
                            modal.info('저장되었습니다.');
                            hideModal(true);
                        })
                    );
                } else {
                    if (boadrFiles.length > 0) {
                        boadrFiles.map(item => {
                            return formData.append('includeFileIdxs', item.idx);
                        });
                    }
                    setLoading(
                        putPatnerAnswers({ data: formData }, data => {
                            modal.info('저장되었습니다.');
                            hideModal(true);
                        })
                    );
                }
            });
        });
    };
    const deleteDirect = (values: any) => {
        modal.msg(
            '102',
            '',
            () => {
                deletePatnerAnswer(idx, data => {
                    hideModal(true);
                });
            },
            () => {
                //
            }
        );
    };
    const apiCall = () => {
        if (idx !== 0) {
            setLoading(
                getPatnerQuestion(idx, data => {
                    setData(data.result);
                    setContent(data.result.data?.answerContent);
                    setBoadrFiles(data.result.answerFiles);
                    const noticeData = data.result.data;
                    // form.setFieldsValue({ ...noticeData });
                })
            );
        }
    };

    useEffect(() => {
        apiCall();
        return () => {
            //
        };
    }, []);

    return (
        <>
            <Modal
                visible={idx !== 0}
                title="1:1 문의 상세"
                onCancel={() => {
                    hideModal(false);
                }}
                className="detail_modal"
                footer={<></>}
                width={1400}>
                {/* {modifyMode ? (
                    <DirectForm
                        form={form}
                        data={data}
                        content={content}
                        setContent={setContent}
                        boadrFiles={boadrFiles}
                        setBoadrFiles={setBoadrFiles}
                        onClickDownLoad={onClickDownLoad}
                        uploadFiles={uploadFiles}
                        setUploadFiles={setUploadFiles}
                    />
                ) : (
                    <>{data && <DirectDetail data={data} boadrFiles={boadrFiles} />}</>
                )} */}
                <DirectDetail
                    form={form}
                    data={data}
                    content={content}
                    setContent={onChangeContent}
                    answerData={answerData}
                    uploadFiles={uploadFiles}
                    setUploadFiles={onChangeUploadFiles}
                    onClickDownLoad={onClickDownLoad}
                    boadrFiles={boadrFiles}
                    setBoadrFiles={setBoadrFiles}
                />
                <Row justify="end" style={{ marginBottom: '10px' }}>
                    <Col>
                        <Space>
                            <Button name="저장" type="primary" onClick={onFinish}>
                                {data?.data.answerIdx ? '수정' : '저장'}
                            </Button>
                            <Button name="삭제" type="primary" onClick={deleteDirect}>
                                삭제
                            </Button>
                            {/* {!answerData && <Answer articleIdx={articleIdx} refresh={apiCall} />} */}
                            <Button
                                name="닫기"
                                onClick={() => {
                                    hideModal(false);
                                }}>
                                닫기
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default DetailContainer;
