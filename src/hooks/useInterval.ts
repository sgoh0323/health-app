import { useEffect, useRef } from 'react';

interface ISaveCallbackRef {
    current: () => void;
}

const useInterval = (callback: () => void, delay: number | null): void => {
    const savedCallback: ISaveCallbackRef = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return () => null;
    }, [delay]);

    // Set up the interval.
};

export default useInterval;
