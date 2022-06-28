import React from 'react';
import { Template } from 'components';
import { menus } from 'router/menu';
import Layout from 'layout';
import { withRouter } from 'react-router-dom';
import Faq from './content';

const Chat = ({ location, history }) => {
    const Header = {
        title: 'aimmed App'
    };
    const item = menus[location.pathname];
    return <Layout item={item} contents={<Faq />} />;
};

export default withRouter(Chat);
