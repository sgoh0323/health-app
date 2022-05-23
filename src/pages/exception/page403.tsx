import React, { useEffect } from 'react';
import { Template } from 'components';
import { Result, Button } from 'antd';

const Exception: React.FunctionComponent = () => {
    const Header = {
        title: '준비중'
    };
    useEffect(() => {
        const modals = document.getElementsByClassName('ant-modal-root');
        while (modals.length > 0) {
            modals.item(0).remove();
        }
        return () => {
            //
        };
    }, []);
    return (
        <Result
            status="403"
            title="Error"
            subTitle="Sorry, you don't have access to this page."
            extra={
                <Button type="primary" onClick={() => window.location.assign('#/')}>
                    Back Home
                </Button>
            }
        />
    );
};

export default Exception;
