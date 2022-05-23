import moment from 'moment';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setApiCallIds, removeApiCallIds, setLoading as isLoading } from 'stores/common';

export const useLoding = (): any => {
    const dispatch = useDispatch();

    const setLoading = useCallback(
        async payload => {
            const id = moment().valueOf();
            dispatch(setApiCallIds(id));
            try {
                await payload;
            } finally {
                dispatch(removeApiCallIds(id));
            }
        },
        [dispatch]
    );

    const setForceLoading = useCallback(
        async payload => {
            dispatch(isLoading(payload));
        },
        [dispatch]
    );

    return {
        setLoading,
        setForceLoading
    };
};

export default useLoding;
