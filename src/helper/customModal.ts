/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Modal } from 'antd';
import { alertMsg } from 'types/Common/AlertMassege';

const modal = {
    msg: (msgNo: string, msg?: string, okCallback?: () => void, cancelCallback?: () => void): void => {
        if (Number(msgNo) > 99) {
            Modal.confirm({
                title: '확인',
                className: 'confirm_modal',
                width: '300px',
                content: alertMsg[msgNo],
                okText: '확인',
                cancelText: '취소',
                // okButtonProps: { hidden: true },
                onOk: okCallback,
                onCancel: cancelCallback,
                closable: true
            });
        } else {
            Modal.info({
                title: '확인',
                className: 'confirm_modal',
                width: '300px',
                content: msg ? `${msg} ${alertMsg[msgNo]}` : alertMsg[msgNo],
                okText: '확인',
                cancelText: '취소',
                cancelButtonProps: { hidden: true },
                closable: true
            });
        }
    },
    confirm: (arg: any, okCallback: () => void, cancelCallback: () => void): void => {
        Modal.confirm({
            title: '확인',
            className: 'confirm_modal',
            width: '300px',
            content: arg,
            okText: '확인',
            cancelText: '취소',
            // okButtonProps: { hidden: true },
            onOk: okCallback,
            onCancel: cancelCallback,
            closable: true
        });
    },
    info: (arg: any): void => {
        Modal.info({
            title: '확인',
            className: 'confirm_modal',
            width: '300px',
            content: arg,
            okText: '확인',
            cancelText: '취소',
            cancelButtonProps: { hidden: true },
            closable: true
        });
    },
    infoCallback: (arg: any, okCallback: () => void): void => {
        Modal.info({
            title: '확인',
            className: 'confirm_modal',
            width: '300px',
            content: arg,
            okText: '확인',
            cancelText: '취소',
            onOk: okCallback,
            cancelButtonProps: { hidden: true },
            closable: true
        });
    },
    warn: (arg: any): void => {
        Modal.warn({
            title: '확인',
            className: 'confirm_modal',
            width: '300px',
            content: arg,
            okText: '확인',
            cancelText: '취소',
            cancelButtonProps: { hidden: true },
            closable: true
        });
    }
};

export default modal;
