import axios from 'axios';
import { Cookies } from 'react-cookie';
import service from './request';
import mockData from './mockData';

// 테스트용
export const getUserList = async (payload, callback: any) => {
    // const { data = null } = await request({
    //     // url: `/`,
    //     method: 'get',
    //     data: payload
    // });
    const data = mockData.userList;
    if (data !== null) {
        callback(data);
    }
};
export const getDirectQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        // url: `/board-api/cms/direct-questions?searchDateType=0&startDate=2022-01-01&endDate=2022-02-15&searchStatus=999&questionType=999&searchUserType=0&limit=100&page=1`,
        // url: `/board-api/cms/product-inquiry?page=1&limit=30&searchDateType=1&startDate=2022-02-10&endDate=2022-02-13&questionType=999&searchStatus=999&searchUserType=0&searchUserWord=&itemCode=&searchWord=&searchUserWord=&itemCode=&searchWord=`,
        url: `http://58.181.51.162:5004/webhooks/rasa/webhook?token=secret`,
        method: 'post',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const getManagerList = async (payload, callback: any) => {
    // const { data = null } = await request({
    //     // url: `/`,
    //     method: 'get',
    //     data: payload
    // });
    const data = mockData.managerList;
    if (data !== null) {
        callback(data);
    }
};
