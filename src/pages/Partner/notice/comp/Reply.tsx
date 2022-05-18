import { EnterOutlined, FileOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import { deleteReply } from 'api/partner/noticesApi';
import modal from 'helper/customModal';
import { apiFileDownload } from 'api/common/commonApi';
import useUser from 'hooks/user';
import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import useLoding from 'hooks/useLoding';
import ReplyPopup from 'Popups/Reply';
import NewReply from './NewReply';

const Reply = props => {
    const { boardType, reply, articleAttachType, articleIdx, articleType, refresh } = props;
    const { userInfo } = useUser();
    const [replys, setReplys] = useState<any>();
    const { setLoading } = useLoding();

    const onDeleteReply = param => {
        const callApi = () => {
            deleteReply(
                {
                    boardType: Number(param.boardType),
                    articleType: param.articleType,
                    replyIdx: param.replyIdx,
                    articleIdx: param.articleIdx,
                    articleAttachType
                },
                data => {
                    if (data?.message.indexOf('성공') > -1) {
                        modal.info('저장 되었습니다.');
                        refresh();
                    } else {
                        modal.warn('저장에 실패 했습니다.');
                    }
                }
            );
        };
        modal.msg('102', '', callApi, () => {
            //
        });
    };
    const onClickDownLoad = (e: any) => {
        setLoading(apiFileDownload({ idx: e.idx, fileName: e.fileName }));
    };
    useEffect(() => {
        if (reply) {
            const madeReplyData = [];
            reply.forEach(element => {
                if (!element.parentReplyIdx || element.parentReplyIdx === 'null') {
                    madeReplyData.push({ ...element, children: [] });
                }
                madeReplyData.forEach(data => {
                    if (Number(data.replyIdx) === Number(element.parentReplyIdx)) {
                        data.children.push({ ...element });
                    }
                });
            });
            setReplys(madeReplyData);
        }
    }, [reply]);
    return (
        <Row
            className="content__contentbox__table"
            style={{ borderLeft: '1px solid #E0E0E0', borderRight: '1px solid #E0E0E0' }}>
            {replys && replys.length > 0 && (
                <>
                    <Col className="label" span={24}>
                        댓글 {replys.length > 0 ? `${replys.length}개` : ''}
                    </Col>
                    {replys &&
                        replys.map((item, index) => {
                            return (
                                <Col className="data" span={24} style={{ padding: '0px' }} key={uniqueId()}>
                                    <Row
                                        align="middle"
                                        justify="space-between"
                                        style={{
                                            // borderTop: `${index === 0 ? 0 : 1}px solid #E0E0E0`,
                                            minHeight: '100px',
                                            // marginBottom: '5px'
                                            padding: '10px'
                                        }}>
                                        <Col span={20}>
                                            <Col span={24} style={{ marginBottom: '5px' }}>
                                                {item.registerName}({item.regId}) {item.registDate}{' '}
                                                <ReplyPopup
                                                    button={{ name: '대댓글쓰기', type: 'text' }}
                                                    userInfo={userInfo}
                                                    boardType={boardType}
                                                    articleIdx={item.articleIdx}
                                                    articleAttachType={articleAttachType}
                                                    articleType={articleType}
                                                    replyLevel={Number(item.replyLevel) + 1}
                                                    parentReplyIdx={item.replyIdx}
                                                    refresh={refresh}
                                                />
                                                {item.replyAttachList.length > 0 &&
                                                    item.replyAttachList.map(el => {
                                                        return (
                                                            <FileOutlined
                                                                title={el?.fileName ? el?.fileName : ''}
                                                                key={uniqueId()}
                                                                onClick={() => {
                                                                    onClickDownLoad(el);
                                                                }}
                                                                style={{ marginRight: '10px' }}
                                                            />
                                                        );
                                                    })}
                                            </Col>
                                            <Col span={24}>{item.replyContent}</Col>
                                        </Col>
                                        <Col span={4} style={{ textAlign: 'end' }}>
                                            {/* <Button
                                                onClick={() => {
                                                    // onDeleteReply(item);
                                                }}>
                                                수정
                                            </Button> */}
                                            <ReplyPopup
                                                button={{ name: '수정', type: '' }}
                                                userInfo={userInfo}
                                                boardType={boardType}
                                                articleIdx={item.articleIdx}
                                                articleAttachType={articleAttachType}
                                                articleType={articleType}
                                                replyLevel={Number(item.replyLevel) + 1}
                                                parentReplyIdx={item.replyIdx}
                                                refresh={refresh}
                                                replyItem={item}
                                            />
                                            <Button
                                                onClick={() => {
                                                    onDeleteReply(item);
                                                }}>
                                                삭제
                                            </Button>
                                        </Col>
                                    </Row>
                                    {item.children &&
                                        item.children.map(cItem => {
                                            return (
                                                <Row
                                                    align="middle"
                                                    justify="space-between"
                                                    key={uniqueId()}
                                                    style={{
                                                        // borderTop: `${index === 0 ? 0 : 1}px solid #E0E0E0`,
                                                        minHeight: '100px',
                                                        // marginBottom: '5px'
                                                        padding: '10px',
                                                        paddingLeft: '20px'
                                                    }}>
                                                    <Col span={1}>
                                                        <EnterOutlined style={{ transform: 'scaleX(-1)' }} />
                                                    </Col>
                                                    <Col span={19}>
                                                        <Col span={24} style={{ marginBottom: '5px' }}>
                                                            {cItem.registerName}({cItem.regId}) {cItem.registDate}{' '}
                                                            {/* <ReplyPopup
                                                                button={{ name: '대댓글쓰기', type: 'text' }}
                                                                userInfo={userInfo}
                                                                boardType={boardType}
                                                                articleIdx={cItem.articleIdx}
                                                                articleAttachType={articleAttachType}
                                                                articleType="Q"
                                                                replyLevel={Number(cItem.replyLevel) + 1}
                                                                parentReplyIdx={cItem.replyIdx}
                                                            /> */}
                                                            {cItem.replyAttachList.length > 0 &&
                                                                cItem.replyAttachList.map(el => {
                                                                    return (
                                                                        <FileOutlined
                                                                            title={el?.fileName ? el?.fileName : ''}
                                                                            onClick={() => {
                                                                                onClickDownLoad(el);
                                                                            }}
                                                                            key={uniqueId()}
                                                                            style={{ marginRight: '10px' }}
                                                                        />
                                                                    );
                                                                })}
                                                        </Col>
                                                        <Col span={24}>{cItem.replyContent}</Col>
                                                    </Col>
                                                    <Col span={4} style={{ textAlign: 'end' }}>
                                                        <ReplyPopup
                                                            button={{ name: '수정', type: '' }}
                                                            userInfo={userInfo}
                                                            boardType={boardType}
                                                            articleIdx={cItem.articleIdx}
                                                            articleAttachType={articleAttachType}
                                                            articleType={articleType}
                                                            replyLevel={Number(cItem.replyLevel)}
                                                            parentReplyIdx={cItem.replyIdx}
                                                            refresh={refresh}
                                                            replyItem={cItem}
                                                        />
                                                        <Button
                                                            onClick={() => {
                                                                onDeleteReply(cItem);
                                                            }}>
                                                            삭제
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                </Col>
                            );
                        })}
                </>
            )}
            <Col className="label" span={4}>
                댓글
            </Col>
            <Col className="data" span={20}>
                <NewReply
                    userInfo={userInfo}
                    boardType={boardType}
                    articleIdx={articleIdx}
                    articleAttachType={articleAttachType}
                    articleType={articleType}
                    replyLevel={0}
                    refresh={refresh}
                />
            </Col>
        </Row>
    );
};
export default Reply;
