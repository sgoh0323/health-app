// eslint-disable-next-line import/no-extraneous-dependencies
import { MenuInfo, SelectInfo } from 'rc-menu/lib/interface';

export interface IMenuItem {
    icon?: string;
    key: string;
    path: string;
    level: number;
    parentKey?: string;
    components: string;
    label?: string | React.ReactNode;
}

export type menuInfoType = MenuInfo;
export type selectInfoType = SelectInfo;

export interface ISiderMenuProps {
    menuItemList: IMenuItem[];
    selectedKeys: string[];
    // onClick: (e: menuInfoType) => void;
    onClick: (e: any) => void;
    className?: string;
    defaultSelectedKeys?: string[];
    defaultOpenKeys?: string[];
    mode?: 'vertical' | 'horizontal' | 'inline';
    onSelect?: (e: selectInfoType) => void;
    // inlineCollapsed?: boolean;
    collapse?: boolean;
    // theme?: 'light' | 'dark';
    theme?: 'light';
}
