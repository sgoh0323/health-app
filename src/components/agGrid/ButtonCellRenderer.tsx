import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';

export interface ButtonCellRendererProps {
    value: any;
    label?: string;
    valueFormatted: string;
    url: string;
    buttonProps?: BaseButtonProps;
}

function ButtonCellRenderer(props: ButtonCellRendererProps): ReactElement {
    const { url, label, value, buttonProps } = props;
    const history = useHistory();
    console.log('button cell renderer', url, value);
    return (
        <Button onClick={() => history.push(`${url}/${value}`)} {...buttonProps}>
            <span>{label || value}</span>
        </Button>
    );
}

ButtonCellRenderer.defaultProps = {
    label: null,
    buttonProps: {}
};
export default ButtonCellRenderer;
