import React, { useEffect } from 'react';
import { Template } from 'components';
import { Result, Button } from 'antd';
import modal from 'helper/customModal';

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
        <>
            <Result
                status="500"
                title="Error"
                subTitle="Sorry, the server is reporting an error."
                extra={
                    <Button type="primary" onClick={() => window.location.assign('#/')}>
                        Back Home
                    </Button>
                }
            />
        </>
    );
};

export default Exception;
