/* eslint-disable */
import { Row, Col, Select, DatePicker, Input, Button, Checkbox, Modal, Form, Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import ManagerList from './Container';

const ManagerPopup: React.FunctionComponent<{ setValue: (e: any) => void }> = props => {
    const { setValue } = props;
    const [form] = Form.useForm();
    // 팝업창 열기
    const openPostCode = () => {
        const handleManagerList = data => {
            console.log('handleManagerList');
            console.log(data);
            setValue(data);
            modal.destroy();
        };
        const modal = Modal.info({
            content: <ManagerList setValue={handleManagerList} />,
            title: '관리자 검색',
            closable: true,
            okButtonProps: { style: { display: 'none' } },
            className: 'confirm_modal',
            width: '800px'
        });
    };

    return (
        <Button type="primary" onClick={openPostCode}>
            검색
        </Button>
    );
};

export default ManagerPopup;
