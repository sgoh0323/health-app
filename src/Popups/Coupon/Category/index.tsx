/* eslint-disable */
import { Breadcrumb, Button, Modal, Row } from 'antd';
import { Provider } from 'react-redux';
import { store } from 'stores';
import useUser from 'hooks/user';
import React, { useState } from 'react';
import Category from './Category';

const CategoryPopup: React.FunctionComponent<any> = props => {
    const { buttonName = '조회', buttonType = 'primary', setData, data } = props;
    const [visible, setVisible] = useState(false);

    const onFinish = e => {
        console.log('onFinish');
        console.log(e);
        setData(e);
        setVisible(false);
    };
    return (
        <>
            <Button
                style={{ marginLeft: '0px' }}
                type={buttonType}
                onClick={e => {
                    setVisible(true);
                }}>
                {buttonName}
            </Button>
            <Modal
                visible={visible}
                title={<Breadcrumb.Item className="title-navi__navi__parent">상품조회</Breadcrumb.Item>}
                onCancel={() => setVisible(false)}
                className="detail_modal"
                width={800}
                footer={<></>}>
                <Category onFinish={onFinish} defaultData={data} />
            </Modal>
        </>
    );
};

export default CategoryPopup;
