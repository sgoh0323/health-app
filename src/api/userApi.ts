/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { Cookies } from 'react-cookie';

export const service = axios.create({
    withCredentials: true,
    timeout: 10000,
    baseURL: 'http://cms-api-gateway-test.aimmed.io'
});

export const apiUserLogin = async (payload, callback: any) => {
    const cookies = new Cookies();
    await cookies.remove('accessToken');
    await cookies.remove('refreshToken');
    // const { data = null } = await service({
    //     url: `/admin-user-api/cms/token/login`,
    //     method: 'post',
    //     data: payload
    // });
    const data = {result:{token:{accessToken:'123k1hk31hk23h1hjhdada13j1h2',refreshToken:'asdadkhqk1kh3k1231k2h3k1khkhadkah'}}}
    if (data !== null) {
        await cookies.set('accessToken', data.result.token.accessToken, {
            path: '/'
        });
        await cookies.set('refreshToken', data.result.token.refreshToken, {
            path: '/'
        });

        callback(data);
    }
};

export default apiUserLogin;
