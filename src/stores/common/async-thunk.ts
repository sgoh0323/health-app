import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMenus, getUserInfo } from 'api/authUtil';
import mockData from 'api/mockData_menu';

import { initialUserState } from './model/initial';

// Slice Info
const name = 'user';
const initialState = Object.assign(initialUserState);

// async Thunk Api
export const fetchMenuList = createAsyncThunk(`${name}/fetchUser`, async ({ payload }: { payload: null }, thunkAPI) => {
    // const { data = '' } = await getMenus();
    const data = mockData.menu;
    if (data) {
        return data;
    }
    return thunkAPI.rejectWithValue('error');
});

export const fetchUserInfo = createAsyncThunk(
    `${name}/fetchUserInfo`,
    async ({ payload }: { payload: null }, thunkAPI) => {
        // const { data = '' } = await getUserInfo();
        const data = mockData.user;
        if (data) {
            return data;
        }
        return thunkAPI.rejectWithValue('error');
    }
);
