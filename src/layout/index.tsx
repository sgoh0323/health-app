import NotiPopup from 'components/notiPopup/NotiPopup';
import { motion } from 'framer-motion';
import React from 'react';
import { ILayoutProps } from './interface';
import Nav from './nav';
import TabMenu from './tabMenu';

const Layout = ({ item, contents }) => {
    return (
        <>
            <Nav item={item} />
            <div
                style={{
                    position: 'fixed',
                    top: `${item?.header ? 45 : 0}`,
                    // height: `${item?.header && item?.tabnav ? 'calc( 100vh - 95px )' : 'calc( 100vh - 50px )'}`,
                    height: `${
                        item?.header && (item?.tabnav || item?.key === 'chat')
                            ? 'calc( 100vh - 95px )'
                            : 'calc( 100vh - 50px )'
                    }`,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    // padding: '10px',
                    width: '100vW',
                    // backgroundColor: '#ddf1fb'
                    backgroundColor: '#EFE9E9'
                }}>
                <motion.div
                    initial={{
                        y: item.key !== 'chat' ? undefined : -100,
                        x: item.key === 'chat' ? undefined : 100,
                        opacity: 0
                    }}
                    animate={{ y: 0, x: 0, opacity: 1 }}>
                    {contents}
                </motion.div>
            </div>
            <NotiPopup type="공지/이벤트" title="간식제로 챌린지 공유하기!">
                <div>간식제로 챌린지를 친구들에게도 소개해보세요. 추첨을 통하여 커피 이모티콘을 드려요</div>
            </NotiPopup>
            <TabMenu />
        </>
    );
};

export default Layout;
