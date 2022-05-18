import { ConfigProvider } from 'antd-mobile';
import React from 'react';
import Routers from 'router';
import koKR from 'antd-mobile/es/locales/ko-KR';

const App: React.FunctionComponent = () => {
    return (
        <ConfigProvider locale={koKR}>
            <Routers />
        </ConfigProvider>
    );
};

export default App;
