import React from 'react';
import { Breadcrumb, Button, Space, Modal } from 'antd';
import { useSelector } from 'react-redux';
import useUser from 'hooks/user';
// import GuideMainContent from 'pages/guide';
import { ITitleNaviProps } from './interface';

const TitleNavi: React.FunctionComponent<ITitleNaviProps> = ({
    keyNum,
    helpButtonLabel,
    helpPopLink,
    helpButtonCode
}) => {
    // const menuList = useSelector(menuState);
    const { menuSubItemList } = useUser();
    const findMenu = menuSubItemList.filter(item => item.key === keyNum);
    let parentText = '';
    let childrenText = '';

    const setNavi = () => {
        if (findMenu && !findMenu[0]?.parentKey) {
            parentText = findMenu[0]?.label;
        } else {
            const findParentMenu = menuSubItemList.filter(item => item.key === findMenu[0]?.parentKey);
            parentText = findParentMenu[0]?.label;
            childrenText = findMenu[0]?.label;
        }
    };

    const guideModal = () => {
        Modal.info({
            title: '제도안내',
            className: 'wlsys__modal',
            width: '850px',
            content: <div>{/* <GuideMainContent gType={helpButtonCode} title={helpButtonLabel} /> */}</div>,
            okButtonProps: { hidden: true },
            closable: true
        });
    };

    return (
        <div className="title-navi">
            {setNavi()}
            <Space>
                <span className="title-navi__title">{childrenText}</span>
                {helpButtonLabel === '' ? (
                    ''
                ) : (
                    <Button type="default" className="title-navi__help" onClick={guideModal}>
                        {helpButtonLabel}
                    </Button>
                )}
            </Space>
            <Breadcrumb className="title-navi__navi">
                <Breadcrumb.Item className="title-navi__navi__home">홈</Breadcrumb.Item>
                <Breadcrumb.Item className="title-navi__navi__parent">{parentText}</Breadcrumb.Item>
                <Breadcrumb.Item className="title-navi__navi__children">{childrenText}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default TitleNavi;
