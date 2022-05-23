/* eslint-disable */
import { Col, Button, Modal, Form } from 'antd';
import NewReply from 'pages/Partner/notice/comp/NewReply';
import { Provider } from 'react-redux';
import { store } from 'stores';
import React from 'react';

const ReplyPopup: React.FunctionComponent<any> = props => {
    const {
        button,
        userInfo,
        replyItem,
        boardType,
        articleIdx,
        articleAttachType,
        articleType,
        replyLevel,
        parentReplyIdx,
        refresh
    } = props;
    const [form] = Form.useForm();
    // 팝업창 열기
    const openPostCode = () => {
        const onClose = () => {
            refresh();
            modal.destroy();
        };
        const modal = Modal.info({
            content: (
                <Provider store={store}>
                    <Col className="data" span={24} style={{ textAlign: 'left', marginTop: '-30px' }}>
                        <NewReply
                            userInfo={userInfo}
                            boardType={boardType}
                            articleIdx={articleIdx}
                            articleAttachType={articleAttachType}
                            articleType={articleType}
                            replyLevel={replyLevel}
                            parentReplyIdx={parentReplyIdx}
                            refresh={onClose}
                            replyItem={replyItem}
                            isPopup
                        />
                    </Col>
                </Provider>
            ),
            title: '댓글',
            closable: true,
            okButtonProps: { style: { display: 'none' } },
            cancelButtonProps: { style: { display: 'none' } },
            className: 'confirm_modal footer_none',
            width: '840px'
        });
    };

    return (
        <Button type={button?.type} onClick={openPostCode} style={button?.style}>
            {button?.name}
        </Button>
    );
};

export default ReplyPopup;
