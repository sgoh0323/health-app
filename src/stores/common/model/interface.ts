// userId: '', name: '', deptNm: ''
export interface IUserInfo {
    id:string; // 아이디
    name?: string; // 성명
    userId?: string; // 아이디
    deptCd?: string; // 부서코드
    deptNm?: string; // 부서명
}

export interface IUserState {
    loading: boolean;
    menuSubItemList: any;
    userInfo: IUserInfo;
    pageFilterParam: any;
    apiCallIds: number[];
}
