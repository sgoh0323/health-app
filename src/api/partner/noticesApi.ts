import { AnyParamType, CommonResult } from 'api/common/commonType';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import service from '../request';
import {
    Notice,
    NoticeList,
    Answer,
    PatnerQuestions,
    PatnerQuestion,
    NoticeParam,
    QuestionParam,
    ReplyDeleteParam
} from './noticesType';

export const getNotices = async (payload: NoticeParam, callback: (e: NoticeList) => void): Promise<void> => {
    const { data } = await service.get<NoticeList>(`/board-api/cms/notices`, { params: payload });
    if (data !== null) {
        callback(data);
    }
};

export const postNotices = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data } = await service({
        url: `/board-api/cms/notices`,
        method: 'post',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const getNotice = async (payload: number, callback: (e: Notice) => void): Promise<void> => {
    const { data } = await service.get(`/board-api/cms/notices/${payload}`);
    if (data !== null) {
        callback(data);
    }
};

export const putNotice = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const deleteNotice = async (payload: number, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/${payload}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};

export const deleteNotices = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const postNoticesAnswer = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const getNoticeAnswer = async (payload: number, callback: (e: Answer) => void): Promise<void> => {
    const { data } = await service.get(`/board-api/cms/notices/answer/${payload}`);
    if (data !== null) {
        callback(data);
    }
};

export const putNoticeAnswer = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deleteNoticeAnswer = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    console.log('deleteNoticeAnswer');
    console.log(payload);
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer/${payload.articleIdx}/${payload.answerIdx}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};

export const apiExcelFileDownload = async (payload: AnyParamType): Promise<void> => {
    await service
        .get(
            // `/board-api/cms/notices/excel?page=1&limit=30&searchDateType=0&startDate=2022-01-10&endDate=2022-03-12&noticeTarget=&isConfirm=1&isTopFix=&isUse=1&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=&noticeTarget=&isTopFix=&searchRegisterName=&searchWord=&noticeTargetIds=&targetIds=&userId=`,
            payload.url,
            { responseType: 'blob', params: payload.params }
        )
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
/**
-- 댓글 API
boardType게시판 타입 (3 : 파트너 1:1문의 게시판, 0: 공지사항)
articleAttachType 게시물 타입 필수 입니다.(1:1 파트너 문의사항: 3,게시글의 댓글 : 5 , 답글의 댓글 : 6)
articleType 게시물 타입 (게시글의 댓글 : Q , 답글의 댓글 : A)
replyIdx 댓글의 id값
articleIdx 게시물의 id값
replyContent 댓글 내용
files파일 
*/
/*
    -F 'files=@hello_notice_answer_article_Reply_01.txt;type=text/plain' \
    -F 'files=@hello_notice_answer_article_Reply_02.txt;type=text/plain' \
    -F 'boardType=0' \
    -F 'articleType=Q' \
    -F 'articleAttachType=5' \
    -F 'articleIdx=39' \
    -F 'replyLevel=0' \
    -F 'parentReplyIdx=null' \
    -F 'replyContent=39 게시글의 두번째 댓글의 대댓글 내용....!' \
    -F 'files=null'
 */
export const postReply = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
/*
    'boardType=0' \
    -F 'articleType=A' \
    -F 'articleAttachType=6' \
    -F 'replyIdx=92' \
    -F 'articleIdx=103' \
    -F 'replyContent=39 게시글의 103 답글 첫번째 댓글 내용....! 수정합니다....' \
    -F 'files=null'
 */
export const putReply = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'PUT',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const deleteReply = async (payload: ReplyDeleteParam, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'DELETE',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const getPatnerQuestions = async (
    payload: QuestionParam,
    callback: (e: PatnerQuestions) => void
): Promise<void> => {
    const { data = null } = await service.get(`/board-api/cms/partners/questions/`, { params: payload });
    if (data !== null) {
        callback(data);
    }
};

export const getPatnerQuestion = async (payload: number, callback: (e: PatnerQuestion) => void): Promise<void> => {
    const { data = null } = await service.get(`/board-api/cms/partners/questions/${payload}`);
    if (data !== null) {
        callback(data);
    }
};

export const postPatnerQuestions = async (
    payload: AnyParamType,
    callback: (e: CommonResult) => void
): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerQuestions = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerQuestionsStatus = async (
    payload: AnyParamType,
    callback: (e: CommonResult) => void
): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions/status`,
        method: 'put',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerQuestion = async (payload: number, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions/${payload}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};

export const deletePatnerQuestions = async (
    payload: AnyParamType,
    callback: (e: CommonResult) => void
): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const deletePatnerQnA = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/question-answer/${payload}`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const postPatnerAnswers = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerAnswers = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerAnswer = async (payload: number, callback: (e: CommonResult) => void): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers/${payload}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerAnswers = async (
    payload: AnyParamType,
    callback: (e: CommonResult) => void
): Promise<void> => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const apiFileDownload = async (payload: AnyParamType, callback: (e: CommonResult) => void): Promise<void> => {
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
