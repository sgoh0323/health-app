import { AxiosError } from 'axios';
import React, { FC } from 'react';

const ErrorContent: FC<AxiosError> = (error: AxiosError) => {
    const { response } = error;
    return (
        <>
            <h3>{response.statusText} </h3> <p>{response.data.message}</p>
        </>
    );
};

export default ErrorContent;
