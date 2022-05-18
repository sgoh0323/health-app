/* eslint-disable */
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const PostcodePopup: React.FunctionComponent<{ setPostCode: (e: any) => void }> = props => {
    const { setPostCode } = props;

    // 팝업창 열기
    const openPostCode = () => {
        const handlePostCode = data => {
            let fullAddress = data.address;
            let extraAddress = '';
            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }
            console.log(data);
            setPostCode(data);
            modal.destroy();
        };
        const modal = Modal.info({
            content: <DaumPostcode onComplete={handlePostCode} />,
            title: '우편번호 검색',
            closable: true,
            okButtonProps: { style: { display: 'none' } },
            className: 'confirm_modal'
        });
    };

    // 팝업창 닫기

    return (
        <Button type="primary" onClick={openPostCode}>
            우편번호
        </Button>
    );
};

export default PostcodePopup;
