import { CommonPayload, CommonResult, FileInfo, RegInfo, UpdateInfo } from 'api/common/commonType';

// 댓글
export type ReplyInfo = {
    articleIdx: number;
    articleType: string;
    boardType: string;
    isUse: number;
    parentReplyIdx: string;
    replyAttachList: FileInfo[];
    replyContent: string;
    replyIdx: number;
    replyLevel: number;
} & UpdateInfo &
    RegInfo;

// 답글
export type AnswerInfo = {
    answerIdx: number;
    answerReplyList: ReplyInfo[];
    articleIdx: number;
    boardType: number;
    content: string;
    deleted: number;
    title: string;
} & UpdateInfo &
    RegInfo;

// 공지사항 부가 정보
export type NoticeOptions = {
    isConfirm?: number;
    isTopFix?: number;
    isUse?: number;
    noticeTarget?: number;
    noticeTargetId?: string;
    noticeTargetNm?: string;
};

// 공지사항리스트
export type NoticeInfo = {
    answerIdx: number;
    answerTitle: string;
    articleAnswerReplyCnt: number;
    articleIdx: number;
    articleReplyCnt: number;
    isConfirmFormat: string;
    isTopFixFormat: string;
    isUseFormat: string;
    noticeTargetCnt: string;
    noticeTargetFormat: string;
    noticeTargetNm: string;
    number: number;
    title: string;
    content;
} & UpdateInfo &
    RegInfo;

// 공지사항 상제
export type NoticeDetailInfo = {
    answerIdx: number;
    articleIdx: number;
    content: number;
    replyList: ReplyInfo[];
    title: string;
} & NoticeOptions &
    UpdateInfo &
    RegInfo;

export type PatnerQuestionInfo = {
    number: number;
    idx: number;
    type: string;
    content: string;
    productCode: string;
    productUrl: string;
    questionId: string;
    questionName: string;
    companyName: string;
    answerId: string;
    answerName: string;
    updateId: string;
    updateName: string;
    targetType: number;
    targetTypeFormat: string;
    status: number;
    statusFormat: string;
    updateDateFormat: string;
    answerDateFormat: string;
    regdateFormat: string;
};
export type PatnerQuestionDetailInfo = {
    idx: string;
    answerIdx: number;
    type: string;
    content: string;
    productCode: string;
    productUrl: string;
    questionId: string;
    questionName: string;
    companyName: string;
    answerId: string;
    answerName: string;
    answerContent: string;
    updateId: string;
    updateName: string;
    status: number;
    statusFormat: string;
    updateDateFormat: string;
    answerDateFormat: string;
    regdateFormat: string;
};

// 공지사항 리스트 반환
export interface NoticeList extends CommonResult {
    result: { list: NoticeInfo[]; total: number };
}

// 공지사항 상세 반화
export interface Notice extends CommonResult {
    result: { data: NoticeInfo; files: FileInfo[] };
}

// 답글 반환
export interface Answer extends CommonResult {
    result: { data: NoticeInfo[]; files: FileInfo[] };
}
export interface PatnerQuestions extends CommonResult {
    result: { list: PatnerQuestionInfo[]; total: number };
}
export interface PatnerQuestion extends CommonResult {
    result: { data: PatnerQuestionDetailInfo; questionFiles: FileInfo[]; answerFiles: FileInfo[] };
}

export interface NoticeParam extends CommonPayload {
    noticeTarget: number;
    isConfirm: number;
    isTopFix: number;
    isUse: number;
}

export interface QuestionParam extends CommonPayload {
    questionStatus?: number;
}

export interface ReplyDeleteParam {
    boardType: number;
    articleType: string;
    replyIdx: number;
    articleIdx: number;
    articleAttachType: number;
}
