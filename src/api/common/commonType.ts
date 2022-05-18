// 공통으로 쓸만한 타입 정의

// 기본 Response 반환 타입
export type CommonResult = {
    date: string;
    message: string;
};

export type CommonFileResult = CommonResult & {
    result: string;
};

// 파일 타입
export type FileInfo = {
    boardTypeFormat: string;
    fileName: string;
    fileOriginName: string;
    filePath: string;
    idx: number;
    referenceIdx: number;
    registDate: string;
    updateDate: string;
};

// 작성 타입
export type RegInfo = {
    registDate: string;
    registerName: string;
    registerId?: string;
    regId?: string;
};

// 업데이트 타입
export type UpdateInfo = {
    updateDate: string;
    updaterName: string;
    updaterId?: string;
    updateId?: string;
};

export type ImageInfo = {
    idx: number;
    qnaIdx?: number;
    imageUrl?: string;
    fileName?: string;
    position?: string;
};

// parameter 타입 설정전 임시 anyType
export type AnyParamType = {
    [key: string]: any;
};

//
export type CommonPayload = {
    page: number;
    limit: number;
    searchDateType?: number;
    startDate?: string;
    endDate?: string;
    searchType?: number;
    searchWord?: string;
};

export type excelDownParam = { url: string; params: any; fileName: string };

export type CommonOptionType = {
    value: any;
    label: string;
};

export type NonReadInfo = {
    noticeCount: number;
    qnaCount: number;
};

export interface NonRead extends CommonResult {
    result: NonReadInfo;
}
