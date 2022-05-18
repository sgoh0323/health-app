import _ from 'lodash';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo, IUserState } from './model/interface';
import { initialUserState } from './model/initial';

export const Reducers = {
    clearState: (state: IUserState): void => {
        state.menuSubItemList = initialUserState.menuSubItemList;
        state.userInfo = initialUserState.userInfo;
        state.loading = initialUserState.loading;
    },
    setUserInfo: (state: IUserState, action: PayloadAction<IUserInfo>): void => {
        state.userInfo = action.payload;
    },
    setLoading: (state: IUserState, action: PayloadAction<boolean>): void => {
        state.loading = action.payload;
    },
    setApiCallIds: (state: IUserState, action: PayloadAction<number>): void => {
        state.apiCallIds.push(action.payload);
    },
    removeApiCallIds: (state: IUserState, action: PayloadAction<number>): void => {
        if (state.apiCallIds.includes(action.payload)) {
            state.apiCallIds = _.remove(state.apiCallIds, action.payload);
        }
    }
};
