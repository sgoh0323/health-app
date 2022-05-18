import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'stores';
import { CookiesProvider } from 'react-cookie';
import { ConfigProvider } from 'antd';
import kor from 'antd/lib/locale/ko_KR';

import { LicenseManager } from 'ag-grid-enterprise';
import App from './App';
// import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';
import 'styles/index.scss';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'react-quill/dist/quill.snow.css';

// LicenseManager.setLicenseKey(
//     ''
// );

const mergedNextColor = {
    primaryColor: '#000000',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff'
};
ConfigProvider.config({
    theme: mergedNextColor
});
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            {/* <ConfigProvider locale={kor}> */}
            <CookiesProvider>
                <App />
            </CookiesProvider>
            {/* </ConfigProvider> */}
        </Provider>,
        // document.querySelector('#app')
        document.querySelector('#root')
    );
});

// ReactDOM.render(
//     <Provider store={store}>
//         <ConfigProvider locale={kor}>
//             <CookiesProvider>
//                 <App />
//             </CookiesProvider>
//         </ConfigProvider>
//     </Provider>,
//     document.getElementById('root')
// );
