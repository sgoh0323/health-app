import React from 'react';
import Container from './DetailContainer';

interface INotiesPopup {
    idx: number;
    hideModal: (e) => void;
}
const DirectDetail: React.FunctionComponent<INotiesPopup> = ({ idx, hideModal }) => {
    return <Container idx={idx} hideModal={hideModal} />;
};

export default DirectDetail;
