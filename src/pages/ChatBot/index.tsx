import React from 'react';
import { Template } from 'components';
import LoginContent from './content';
import { menus } from 'router/menu';
import Layout from 'layout';
import { withRouter } from 'react-router-dom';

const Login = ({ location, history }) => {
    const Header = {
        title: 'aimmed App'
    };
    const item = menus[location.pathname];
    return <Layout item={item} contents={<LoginContent />} />;
};

export default withRouter(Login);
