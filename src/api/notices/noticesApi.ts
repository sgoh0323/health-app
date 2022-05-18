/* eslint-disable */
import axios from 'axios';
import { Cookies } from 'react-cookie';
import service from '../request';
import { Notice, NoticeList, Answer } from './noticesType';

export const getNotices = async (payload, callback: any): Promise<NoticeList> => {
    const { data } = await service.get(`/board-api/cms/notices`, { params: payload });
    return callback(data);
};

export const postNotices = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const getNotice = async (payload, callback: any): Promise<Notice> => {
    const { data } = await service.get(`/board-api/cms/notices/${payload}`);
    return callback(data);
};

export const putNotice = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deleteNotice = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/${payload}`,
        method: 'delete',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
// {"noticeTargetIds":"9","targetIds":null}
export const deleteNotices = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const postNoticesAnswer = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const getNoticeAnswer = async (payload, callback: any): Promise<Answer> => {
    const { data } = await service.get(`/board-api/cms/notices/answer/${payload}`);
    return callback(data);
};

export const putNoticeAnswer = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/notices/answer`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deleteNoticeAnswer = async (payload, callback: any) => {
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

export const apiExcelFileDownload = async (payload: any) => {
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
export const postReply = async (payload, callback: any) => {
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
export const putReply = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'PUT',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
// {"boardType":0,"articleType":"A","replyIdx":96,"articleIdx":103,"articleAttachType":6}
export const deleteReply = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/reply`,
        method: 'DELETE',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const getPatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service.get(`/board-api/cms/partners/questions/`, { params: payload });
    if (data !== null) {
        callback(data);
    }
};

export const getPatnerQuestion = async (payload, callback: any) => {
    const { data = null } = await service.get(`/board-api/cms/partners/questions/${payload}`);
    if (data !== null) {
        callback(data);
    }
};

export const postPatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerQuestionsStatus = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions/status`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerQuestion = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions/${payload}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};

export const deletePatnerQuestions = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/questions`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerQnA = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/question-answer/${payload}`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

export const postPatnerAnswers = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'post',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};

export const putPatnerAnswers = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'put',
        data: payload.data
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerAnswer = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers/${payload.idx}`,
        method: 'delete'
    });
    if (data !== null) {
        callback(data);
    }
};
export const deletePatnerAnswers = async (payload, callback: any) => {
    const { data = null } = await service({
        url: `/board-api/cms/partners/answers`,
        method: 'delete',
        data: payload
    });
    if (data !== null) {
        callback(data);
    }
};

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
