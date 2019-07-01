import React, { Component, Fragment, useState } from 'react';
import { observer, inject } from 'mobx-react';
import { decorate, observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { sleep } from '../utils/sleep';
import { MenuItem } from '@material-ui/core';
class Transfer extends Component {
    amount = ''
    bank = ''
    setAmount = (amount)=>{
        this.amount=amount
    }
    setBank = (bank)=>{
        this.bank=bank
    }
    componentDidMount() {
        this.listenToAmountToTransfer()
    }
    listenToAmountToTransfer=async ()=>{
        const { robot, next, setType } = this.props;
        await robot.say("Please select recipient account number and bank name")
    }
    render() {
        const { robot, next } = this.props;

        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', height: '100%' }}>
                <h1 style={{ color: 'blue', textAlign: 'center' }}>Please enter recipient account number</h1>
                <form onSubmit={next} style={{ textAlign: 'center' }}>
                    <FormControl margin="normal" required fullWidth style={{ border: '3px solid blue' }}>
                        <Input type='number'  name="amount" autoFocus onChange={(e)=>{  this.setAmount(e.target.value)   }} value={this.amount} required />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth style={{ border: '3px solid blue' }}>
                        <Select required value={this.bank} onChange={(e)=>{  this.setBank(e.target.value)   }}>
                            <MenuItem value={''} disabled>Select Recipient Bank</MenuItem>
                            <MenuItem>First Bank of Nigeria</MenuItem>
                            <MenuItem>Guarantee Trust Bank</MenuItem>
                            <MenuItem>United Bank of Africa</MenuItem>
                            <MenuItem>Fidelity Bank</MenuItem>
                            <MenuItem>Heritage Bank</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth >
                        <Button type='submit' size="large" variant="contained" color="primary" disabled={!(this.bank&&this.amount)}>Submit</Button>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default withRouter(inject('robot')(
    observer(decorate(Transfer, {
        bank: observable,
        amount: observable,
        setAmount: action,
        setBank: action,
        password: observable,
        setPassword: action
    }))
));