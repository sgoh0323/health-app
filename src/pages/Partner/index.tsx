import React from 'react';
import { Result, Button } from 'antd';

const DashboardContatiner: React.FunctionComponent = () => {
    return (
        <Result
            status="404"
            title="준비중입니다."
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => window.location.assign('#/')}>
                    Back Home
                </Button>
            }
        />
    );
};

export default DashboardContatiner;
