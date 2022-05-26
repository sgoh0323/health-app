import { Dispatch, SetStateAction } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Header = 'page' | 'main';

export interface IPageHeaderProps {
    title: string;
    goBack?: () => void;
    onClickGuide?: () => void;
    guide?: boolean;
}

export interface IMainHeaderProps extends RouteComponentProps {
    title: string;
    headerClassName?: string;
}

export interface IDrawVisible {
    drawVisible?: boolean;
    setDrawVisible?: Dispatch<SetStateAction<boolean>>;
}

export interface ILayoutProps {
    header?: IPageHeaderProps;
    contents: React.ReactNode;
    headerType: Header;
    mainHeader?: React.ReactNode;
    className?: string;
}
