import { RouteComponentProps } from 'react-router-dom';

interface Iredirect {
    type: boolean;
    to?: string;
}

export interface IRoutesProps {
    exact?: boolean;
    path?: string;
    key: string;
    label?: string;
    redirect: Iredirect;
}

export interface IMenuItem {
    path: string;
    key: string;
    label: string;
    icon: string;
    components: string;
    MENU_SEQ?: number;
    children?: IMenuItem[];
}

export interface IMenuData {
    resultCd: number;
    resultMsg: string;
    resultMsgTyp: string;
    data: {
        menuSubItemList: IMenuItem[];
    };
}
