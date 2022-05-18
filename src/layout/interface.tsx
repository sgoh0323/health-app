import React from 'react';
import { IUserInfo } from 'stores/common/model/interface';
import { menuInfoType } from 'components/sider-menu/interface';
import { NonReadInfo } from 'api/common/commonType';

export interface IHeaderProps {
    title?: string;
    subTitle?: string;
    userInfo?: IUserInfo;
    nonReadInfo?: NonReadInfo;
    unreadAlrmCnt?: number;
    onClickConfig?: () => void;
    onClickFmlyConfig?: () => void;
    onClickAlram?: () => void;
    onCollapse?: () => void;
    onClickLogOut?: () => void;
}

export interface ITemplateProps {
    header: IHeaderProps;
    content: React.ReactNode;
}
export interface ISiderProps {
    menuList: [];
    collapse: boolean;
    selectMenu: string[];
    onCollapse: () => void;
    onClick?: (e: menuInfoType) => void;
}
