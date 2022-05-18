/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Page500 from './page500';

class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <Page500 />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
