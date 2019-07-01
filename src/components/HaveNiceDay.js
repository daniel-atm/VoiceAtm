import React, { Component, Fragment, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { decorate, observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
class HaveNiceDay extends Component {
    componentDidMount() {
        const { robot, next } = this.props;
        robot.say("Please Take your card!")
        robot.say("Have a nice day!")
    }

    render() {
        const { robot, next } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', height: '100%' }}>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Please Take your card!</h1>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Have a nice day!</h1>
            </div>
        );
    }
}

export default withRouter(inject('robot')(
    observer(decorate(HaveNiceDay, {
    }))
));