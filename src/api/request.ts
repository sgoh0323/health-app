/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import axios from 'axios';
import modal from 'helper/customModal';
import { Cookies } from 'react-cookie';
import ErrorContent from 'components/api/ErrorContent';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
const service = axios.create({
    withCredentials: true,
    // timeout: 1000 * 60 * 30 // TimeOut 30분으로 설정
    // baseURL: 'http://cms-api-gateway-test.aimmed.io'
});

service.interceptors.request.use(
    config => {
        // 헤더 토큰을 발급받은 토큰으로 설정
        const cookies = new Cookies();
        config.headers.Authorization = `Bearer ${cookies.get('accessToken')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
/**
 * Response interceptor
 */
service.interceptors.response.use(
    response => {
        if (response?.data?.message && response?.data?.message.indexOf('성공') > -1) {
            return response;
        }
        if (response?.data?.message && response?.data?.message.indexOf('완료') > -1) {
            return response;
        }
        if (response?.data?.message) {
            modal.warn(response?.data?.message);
        }
        return response;
    },
    async error => {
        const cookies = new Cookies();
        const originalRequest = error.config;
        if (
            error &&
            error.response &&
            error.response.status &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            if (isRefreshing) {
                return new Promise(function refFunc(resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        // originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
                        originalRequest.headers.Authorization = `Bearer ${cookies.get('accessToken')}`;
                        return axios(originalRequest);
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
            }
            originalRequest._retry = true;
            isRefreshing = true;
            // const refreshToken = localStorage.getItem('refreshToken');
            const refreshToken = cookies.get('refreshToken');
            return axios
                .post(
                    `/admin-user-api/cms/token/refresh`,
                    { refreshToken },
                    {
                        headers: { Authorization: `Bearer ${refreshToken}` }
                    }
                )
                .then(response => {
                    if (response?.data?.message && response?.data?.message.indexOf('성공') > -1) {
                        // 리턴값
                        const returnData = response.data.result;
                        // 토큰 쿠키 저장
                        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = returnData.token;
                        cookies.remove('accessToken');
                        cookies.remove('refreshToken');
                        cookies.set('accessToken', newAccessToken);
                        cookies.set('refreshToken', newRefreshToken);

                        cookies.set('accessToken', newAccessToken, {
                            path: '/'
                        });
                        cookies.set('refreshToken', newRefreshToken, {
                            path: '/'
                        });
                        // 헤더 토큰을 새로 발급받은 토큰으로 재설정
                        service.defaults.headers.common.Authorization = `Bearer ${cookies.get('accessToken')}`;
                        processQueue(null, returnData.AccessToken);
                        // 반환
                        return service(originalRequest);
                    }
                    processQueue(error, null);
                    window.location.href = '#/login';
                })
                .catch(error => {
                    processQueue(error, null);
                    window.location.href = '#/login';
                })
                .finally(() => {
                    isRefreshing = false;
                });
        }
        modal.warn(ErrorContent(error));
        console.error(error.response);
    }
);
export default service;
