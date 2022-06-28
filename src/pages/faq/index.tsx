import React from 'react';
import { Template } from 'components';
import FaqContent from './content';
import { menus } from 'router/menu';
import Layout from 'layout';
import { withRouter } from 'react-router-dom';

const Chat = ({ location, history }) => {
    const Header = {
        title: 'aimmed App'
    };
    const item = menus[location.pathname];
    return <Layout item={item} contents={<FaqContent />} />;
};

export default withRouter(Chat);
