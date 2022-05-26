import React from 'react';
import { ILayoutProps } from './interface';
import Nav from './nav';

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
                    width: '100vW'
                }}>
                {contents}
            </div>
        </>
    );
};

export default Layout;
