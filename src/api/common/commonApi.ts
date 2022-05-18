import service from '../request';
import { excelDownParam, NonRead } from './commonType';

// 공통 파일 다운로드 {idx : 파일 idx,fileName : fileOriginName }
export const apiFileDownload = async (payload: any) => {
    await service
        .get(`/board-api/cms/files/download`, { params: { idx: payload.idx }, responseType: 'blob' })
        .then(response => {
            const url = window.URL.createObjectURL(
                new Blob([response.data], { type: response.headers['content-type'] })
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', payload.fileName);
            document.body.appendChild(link);
            link.click();
        });
};

// 관리자 조회 API
export const getCommonUsers = async (payload, callback: any) => {
    const { data = null } = await service.get(`/admin-user-api/cms/common-users`, { params: payload });
    if (data !== null) {
        callback(data);
    }
};

// 공통 엑셀 다운로드 공통 params : ulr , params ,fileName
export const apiExcelFileDownload = async (payload: excelDownParam) => {
    await service.get(payload.url, { responseType: 'blob', params: payload.params }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', payload.fileName);
        document.body.appendChild(link);
        link.click();
    });
};

// 알림 조회 API
export const getNonRead = async (callback: (e: NonRead) => void) => {
    const { data = null } = await service.get(`/admin-user-api/cms/users/non-read`);
    if (data !== null) {
        callback(data);
    }
};
