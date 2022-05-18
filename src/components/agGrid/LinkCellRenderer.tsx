import { Typography } from 'antd';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface LinkCellRendererProps {
    value: any;
    valueFormatted: string;
    url: string;
    data: any;
    idKey: string;
}

export default function LinkCellRenderer(props: LinkCellRendererProps): ReactElement {
    const { url, value, data, idKey } = props;
    return (
        <Link to={`${url}/${data[idKey]}`}>
            <span>{value}</span>
        </Link>
    );
}
