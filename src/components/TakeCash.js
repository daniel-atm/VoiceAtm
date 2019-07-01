import React, { Component, Fragment, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { decorate, observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import { sleep } from '../utils/sleep';
class TakeCash extends Component {
    async componentDidMount() {
        const { robot, next } = this.props;
        await robot.say("Please take your cash!")
        await sleep(200);
        next()
    }

    render() {
        const { robot, next } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', height: '100%' }}>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Please take your cash</h1>
                <img src='images/cash_out.jpg' alt='CashOut' style={{width:'90%',height:'300px'}} />
            </div>
        );
    }
}

export default withRouter(inject('robot')(
    observer(decorate(TakeCash, {
    }))
));