import React, { Component, Fragment, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { decorate, observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { sleep } from '../utils/sleep';
import { MenuItem, InputLabel } from '@material-ui/core';
class ChangePin extends Component {
    old_pin = ''
    new_pin = ''
    setOldPin = (old_pin)=>{
        this.old_pin=old_pin
    }
    setNewPin = (new_pin)=>{
        this.new_pin=new_pin;
    }
    componentDidMount() {
        this.listenToAmountToTransfer()
    }
    listenToAmountToTransfer=async ()=>{
        const { robot, next, setType } = this.props;
        await robot.say("Please enter your old and new pin")
    }
    render() {
        const { robot, next } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', height: '100%' }}>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Please enter recipient account number</h1>
                <form onSubmit={next} style={{ textAlign: 'center' }}>
                    <FormControl margin="normal" required fullWidth style={{ border: '3px solid blue' }}>
                        <InputLabel htmlFor="amount">Old Pin</InputLabel>
                        <Input type='number' id='amount'  name="amount" autoFocus onChange={(e)=>{  this.setOldPin(e.target.value)   }} value={this.old_pin} required />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth style={{ border: '3px solid blue' }}>
                        <InputLabel htmlFor="account_number">New Pin</InputLabel>
                        <Input type='number' id='account_number'  name="account_number" autoFocus onChange={(e)=>{  this.setNewPin(e.target.value)   }} value={this.new_pin} required />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth >
                        <Button type='submit' size="large" variant="contained" color="primary" disabled={!(this.new_pin&&this.old_pin)}>Submit</Button>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default withRouter(inject('robot')(
    observer(decorate(ChangePin, {
        old_pin:observable,
        new_pin: observable,
        setNewPin:action,
        setOldPin: action
     }))
));