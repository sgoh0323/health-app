import { createSlice } from '@reduxjs/toolkit';

import { Reducers } from './reducers';

import { SelectMenuList } from './extra-reducers';

import { initialUserState, name } from './model/initial';

export const commonStore = createSlice({
    name,
    initialState: Object.assign(initialUserState),
    reducers: { ...Reducers },
    extraReducers: {
        ...SelectMenuList
    }
});

export default commonStore.reducer;

export const { clearState, setLoading, setApiCallIds, removeApiCallIds, setUserInfo } = commonStore.actions;
