/* eslint-disable */
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button, Upload } from 'antd';
import { apiFileDownload } from 'api/common/commonApi';
import { postReply, putReply } from 'api/notices/noticesApi';
import { CustomUpload } from 'components';
import CustomDownload from 'components/customDownload';
import modal from 'helper/customModal';
import React, { useEffect, useState } from 'react';

const { TextArea } = Input;
const NewReply = props => {
    const {
        userInfo,
        boardType,
        articleIdx,
        articleAttachType,
        articleType,
        replyLevel,
        parentReplyIdx,
        replyItem,
        refresh,
        isPopup
    } = props;
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const [boadrFiles, setBoadrFiles] = useState<any[]>([]);
    const [content, setContent] = useState('');

    const onSaveReply = () => {
        if (content === '') {
            modal.msg('002', '댓글');
        } else {
            const formData = new FormData();
            formData.append('boardType', boardType);
            formData.append('articleAttachType', articleAttachType);
            formData.append('articleType', articleType);
            if (parentReplyIdx) {
                formData.append('parentReplyIdx', parentReplyIdx);
            } else {
                formData.append('parentReplyIdx', null);
            }
            formData.append('replyLevel', replyLevel);
            formData.append('articleIdx', articleIdx);
            formData.append('replyContent', content);
            console.log('uploadFiles');
            console.log(uploadFiles);

            if (uploadFiles) {
                uploadFiles.forEach(element => {
                    formData.append('files', element);
                });
            }
            if (replyItem) {
                if (boadrFiles.length > 0) {
                    boadrFiles.map(item => {
                        return formData.append('includeFileIdxs', item.idx);
                    });
                }
                formData.append('replyIdx', replyItem.replyIdx);
                putReply({ data: formData }, data => {
                    if (data?.message.indexOf('성공') > -1) {
                        setContent('');
                        setUploadFiles([]);
                        // modal.info('저장 되었습니다.');
                        if (refresh) {
                            refresh();
                        }
                    } else {
                        modal.warn('저장에 실패 했습니다.');
                    }
                });
            } else {
                postReply({ data: formData }, data => {
                    if (data?.message.indexOf('성공') > -1) {
                        setContent('');
                        setUploadFiles([]);
                        // modal.info('저장 되었습니다.');
                        if (refresh) {
                            refresh();
                        }
                    } else {
                        modal.warn('저장에 실패 했습니다.');
                    }
                });
            }
        }
    };
    const onChange = e => {
        const { value } = e.target;
        setContent(value);
    };
    useEffect(() => {
        if (replyItem) {
            setContent(replyItem.replyContent);
            setBoadrFiles(replyItem.replyAttachList);
        }
    }, [replyItem]);
    const onClickDownLoad = (e: any) => {
        apiFileDownload({ idx: e.idx, fileName: e.fileName });
    };
    return (
        <>
            <Row justify="space-between">
                <Col span={24}>
                    {replyItem
                        ? `${replyItem.registerName} (${replyItem.registDate})`
                        : `${userInfo.name} (${userInfo.userId})`}
                </Col>
                <Col span={24}>
                    <TextArea rows={5} onChange={onChange} value={content} />
                </Col>
            </Row>
            {boadrFiles.length > 0 && (
                <Row justify="space-between">
                    <CustomDownload downloadFiles={boadrFiles} setDownloadFiles={setBoadrFiles} />
                </Row>
            )}
            <Row justify="space-between" style={{ marginTop: '10px' }}>
                <Col style={{ marginLeft: `${isPopup ? '0px' : '0px'}` }}>
                    <div className="upload_item_inline">
                        <CustomUpload
                            uploadFiles={uploadFiles}
                            setUploadFiles={setUploadFiles}
                            maxCount={boadrFiles ? 3 - boadrFiles.length : 3}
                        />
                    </div>
                </Col>
                <Col style={{ textAlign: 'end' }}>
                    <Button type="primary" onClick={onSaveReply}>
                        {replyItem ? '수정' : '입력'}
                    </Button>
                </Col>
            </Row>
        </>
    );
};
export default NewReply;
