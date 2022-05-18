/* eslint-disable */
import React from 'react';
import { Pagination } from 'antd';

interface IAntdPagenationProps {
    defaultCurrent?: number;
    onShowSizeChange?: (current: number, pageSize: number) => void;
    showSizeChanger?: boolean;
    className?: string;
    showLessItems?: boolean;
    total: number;
    current: number;
    onChange: (page: number, pageSize: number) => void;
    pageSizeOptions?: string[];
    defaultPageSize?: number;
}

const AntdPagenation: React.FunctionComponent<IAntdPagenationProps> = ({ ...props }) => {
    return <Pagination {...props} />;
};

export default AntdPagenation;

AntdPagenation.defaultProps = {
    showLessItems: false,
    defaultCurrent: 1
};
