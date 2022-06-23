/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line
import { fetchMenuList, fetchUserInfo } from './async-thunk';

export const SelectMenuList = {
    [fetchMenuList.pending.type]: (state, action) => {
        state.loading = true;
    },
    [fetchMenuList.fulfilled.type]: (state, action) => {
        state.menuSubItemList = action.payload.data;
        if (action.payload.data) {
            localStorage.setItem('menuSubItemList', JSON.stringify(action.payload.data));
        }
        state.loading = false;
    },
    [fetchMenuList.rejected.type]: (state, action) => {
        state.loading = false;
    },
    [fetchUserInfo.pending.type]: (state, action) => {
        state.loading = true;
    },
    [fetchUserInfo.fulfilled.type]: (state, action) => {
        state.userInfo = action.payload.data;
        state.loading = false;
    },
    [fetchUserInfo.rejected.type]: (state, action) => {
        state.loading = false;
    }
};
