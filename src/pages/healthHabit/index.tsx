import { Result } from 'antd';
import { Button, Card, Form, Input, Space } from 'antd-mobile';
import Layout from 'layout';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { menus } from 'router/menu';

const Login = ({ location, history }) => {
    const item = menus[location.pathname];
    return (
        <Layout
            item={item}
            contents={
                <Result
                    status="500"
                    title="준비중"
                    subTitle="개발 진행중입니다."
                    extra={
                        <Link to={'/home'}>
                            <Button color="primary" fill="solid">
                                Back Home
                            </Button>
                        </Link>
                    }
                />
            }
        />
    );
};

export default withRouter(Login);
