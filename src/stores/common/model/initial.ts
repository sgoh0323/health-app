import { IUserState } from './interface';

export const name = 'user';

export const initialUserState: IUserState = {
    loading: false,
    menuSubItemList: [],
    userInfo: { userId: '', name: '', deptNm: '', id: '' },
    pageFilterParam: {},
    apiCallIds: []
};
