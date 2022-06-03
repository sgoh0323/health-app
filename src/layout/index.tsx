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
                    height: `${item?.header && item?.tabnav ? 'calc( 100vh - 95px )' : 'calc( 100vh - 50px )'}`,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    // padding: '10px',
                    width: '100vW',
                    backgroundColor: '#ddf1fb'
                }}>
                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    {contents}
                </motion.div>
            </div>
            <TabMenu />
        </>
    );
};

export default Layout;
