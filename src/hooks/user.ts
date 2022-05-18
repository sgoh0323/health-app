import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenuList, fetchUserInfo } from 'stores/common/async-thunk';
import { clearState, setLoading, setUserInfo } from 'stores/common';
import { sortBy } from 'lodash';

import { RootState } from 'stores';

export const useUser = (): any => {
    const { loading, menuSubItemList, userInfo } = useSelector((state: RootState) => state.userStore);
    const dispatch = useDispatch();

    const dispatchMenuList = useCallback(payload => dispatch(fetchMenuList({ payload: null })), [dispatch]);
    // const dispatchUserInfo = useCallback(payload => dispatch(fetchUserInfo({ payload: null })), [dispatch]);
    const onClearState = useCallback(() => dispatch(clearState()), [dispatch]);
    const setLoadingState = useCallback(payload => dispatch(setLoading(payload)), [dispatch]);
    const setUserState = useCallback(payload => dispatch(setUserInfo(payload)), [dispatch]);
    return {
        dispatchMenuList,
        menuSubItemList,
        // dispatchUserInfo,
        onClearState,
        userInfo,
        loading,
        setLoadingState,
        setUserState
    };
};

export default useUser;
