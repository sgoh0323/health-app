/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';
import { withCookies, Cookies } from 'react-cookie';

enum MethodType {
    GET = 'get',
    POST = 'post'
}

export const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    withCredentials: true,
    timeout: 10000
});

service.interceptors.request.use(
    config => {
        const cookies = new Cookies();
        // 헤더 토큰을 발급받은 토큰으로 설정
        // if (localStorage.getItem('accessToken') !== null) {
        if (cookies.get('accessToken') !== null) {
            // config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
            config.headers.Authorization = `Bearer ${cookies.get('accessToken')}`;
        }
        // 반환
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const getAccessToken = async (smuser, callback: any) => {
    // await localStorage.removeItem('accessToken');
    // await localStorage.removeItem('refreshToken');
    const cookies = new Cookies();
    await cookies.remove('accessToken');
    await cookies.remove('refreshToken');

    // const { data = null } = await service({
    //     url: `/adm/createToken`,
    //     method: 'post',
    //     data: { userId: smuser }
    // });
    const data = {
        data: {
            TOKEN_ACCESS: 'asdddqdq113adad',
            TOKEN_REFRESH: 'asdddqdq113adadaa'
        }
    };
    if (data !== null) {
        // await localStorage.setItem('accessToken', data.data.TOKEN_ACCESS);
        // await localStorage.setItem('refreshToken', data.data.TOKEN_REFRESH);

        await cookies.set('accessToken', data.data.TOKEN_ACCESS, {
            path: '/'
        });
        await cookies.set('refreshToken', data.data.TOKEN_REFRESH, {
            path: '/'
        });

        callback(data);
    }
};

export const getMenus = (): Promise<AxiosResponse> =>
    service({
        url: ``,
        method: 'post',
        // data: params
        data: { userId: '' }
    });

export const getUserInfo = (): Promise<AxiosResponse> =>
    service({
        url: ``,
        method: 'post'
        // data: params
        // data: payload
    });
