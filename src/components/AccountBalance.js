import React, { Component, Fragment, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { decorate, observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import { sleep } from '../utils/sleep';
class AccountBalance extends Component {
    async componentDidMount() {
        const { robot, next } = this.props;
        await robot.say("Your Account Balance is: 50,000 Naira")
        await sleep(200);
        next()
    }

    render() {
        const { robot, next } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', height: '100%' }}>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Your Account Balance is: #50,000</h1>
            </div>
        );
    }
}

export default withRouter(inject('robot')(
    observer(decorate(AccountBalance, {
    }))
));