/* eslint-disable */
import { Button, Modal } from 'antd';
import { Provider } from 'react-redux';
import { store } from 'stores';
import useUser from 'hooks/user';
import React from 'react';
import AnswerForm from './AnswerForm';

const AnswerPopup: React.FunctionComponent<any> = props => {
    const { articleIdx, refresh } = props;
    const { userInfo } = useUser();
    const openPostCode = () => {
        const onClose = () => {
            answerModal.destroy();
        };
        const answerModal = Modal.info({
            content: (
                <Provider store={store}>
                    <AnswerForm userInfo={userInfo} articleIdx={articleIdx} onClose={onClose} refresh={refresh} />
                </Provider>
            ),
            title: '답글 쓰기',
            closable: true,
            okButtonProps: { style: { display: 'none' } },
            cancelButtonProps: { style: { display: 'none' } },
            className: 'confirm_modal footer_none',
            width: '1000px'
        });
    };

    return (
        <Button type="primary" onClick={openPostCode}>
            답글쓰기
        </Button>
    );
};

export default AnswerPopup;
