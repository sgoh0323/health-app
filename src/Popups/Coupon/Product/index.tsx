/* eslint-disable */
import { Breadcrumb, Button, Modal, Row } from 'antd';
// import { postProductCouponItems } from 'api/coupon/couponApi';
import useLoding from 'hooks/useLoding';
import React, { useState } from 'react';
import Product from './Product';

const ProductPopup: React.FunctionComponent<any> = props => {
    const { buttonName = '조회', buttonType = 'primary', setData, data, idx, refresh } = props;
    const [visible, setVisible] = useState(false);
    const { setLoading } = useLoding();

    const onFinish = e => {
        // idx가 있으면 상품 추가모드
        if (idx) {
            let params = e.map(i => {
                return {
                    itemId: i.itId
                };
            });
            setLoading(
                // postProductCouponItems({ idx, data: { products: params } }, data => {
                //     refresh();
                // })
            );
        } else {
            setData(e);
        }
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
                width={1400}
                footer={<></>}>
                <Product onFinish={onFinish} defaultData={data} />
            </Modal>
        </>
    );
};

export default ProductPopup;
