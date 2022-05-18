import React, { useEffect } from 'react';
import { Template } from 'components';
import { Result, Button } from 'antd';

const Exception: React.FunctionComponent = () => {
    const Header = {
        title: '준비중'
    };
    // 모달창 모두 제거
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
            status="404"
            title="Error"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => window.location.assign('#/')}>
                    Back Home
                </Button>
            }
        />
    );
};

export default Exception;
