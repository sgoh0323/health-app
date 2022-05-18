export const targetsOptions = [
    { label: '모든공지사항', value: 0 },
    { label: '모든힙합퍼', value: 1 },
    { label: '모든파트너', value: 2 },
    { label: '특정파트너', value: 3 }
];
export const confirmOptions = [
    { label: '필수', value: 1 },
    { label: '필수아님', value: 0 }
];
// export const topFixOptions = [
//     { label: '고정함', value: 1 },
//     { label: '고정 안함', value: 0 }
// ];
export const useOptions = [
    { label: '노출', value: 1 },
    { label: '노출 안함', value: 0 }
];
export const topFixOptions = [
    { label: '전체', value: 'all' },
    { label: '고정', value: 1 },
    { label: '고정 안함', value: 0 }
];
export const dateTypeOptions = [
    { label: '등록일', value: 0 },
    { label: '최종수정일', value: 1 }
];

export const searchOptions = [
    { label: '제목', value: 0 },
    { label: '등록자명', value: 1 },
    { label: '최종수정자명', value: 2 }
];

// 1:1문의
export const directDateTypeOptions = [
    { label: '등록일', value: 0 },
    { label: '최종답변일', value: 1 }
];

export const directTargetsOptions = [
    { label: '전체', value: 0 },
    { label: 'MD', value: 1 }
];
export const directSearchOptions = [
    { label: '문의업체명', value: 0 },
    { label: '최종답변자', value: 1 },
    { label: '내용', value: 2 }
];
export const statusOptions = [
    { label: '전체', value: 999 },
    { label: '답변대기', value: 100 },
    { label: '답변준비', value: 500 },
    { label: '답변완료', value: 200 }
];

// 관리자 조회 옵션
export const managerUserTypeOptions = [
    { label: '전체', value: 'all' },
    { label: '힙합퍼', value: 0 },
    { label: '파트너', value: 1 }
];
export const managerSearchOptions = [
    { label: '이름', value: 0 },
    { label: '아이디', value: 1 }
];

// 고객 상품문의
export const productInquiryQuestionTypeOptions = [
    { label: '전체', value: 999 },
    { label: '상품 문의', value: 100 },
    { label: '재입고 문의', value: 200 },
    { label: '사이즈 문의', value: 300 },
    { label: '배송 문의', value: 400 },
    { label: '기타', value: 500 }
];

export const productInquirySearchTypeOptions = [
    { label: '문의자명', value: 0 },
    { label: '문의자ID', value: 1 },
    { label: '상품코드', value: 2 },
    { label: '내용', value: 3 },
    { label: '최초답변자명', value: 4 },
    { label: '최종답변자명', value: 5 }
];

export const productInquiryDateTypeOptions = [
    { label: '문의등록일', value: 0 },
    { label: '최초답변일', value: 1 },
    { label: '최종수정일', value: 2 }
];

export const productInquiryStatusOptions = [
    { label: '전체', value: 999 },
    { label: '답변대기', value: 100 },
    { label: '답변완료', value: 200 },
    { label: '답변준비', value: 500 }
];
