import React from 'react';
import Container from './DetailContainer';

interface INotiesPopup {
    articleIdx: number;
    answerIdx: number;
    hideModal: (e) => void;
}
const NotidceDetail: React.FunctionComponent<INotiesPopup> = ({ articleIdx, hideModal, answerIdx }) => {
    return <Container articleIdx={articleIdx} hideModal={hideModal} answerIdx={answerIdx} />;
};

export default NotidceDetail;
