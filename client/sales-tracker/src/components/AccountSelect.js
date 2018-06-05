import React from 'react'

import {Button, Input} from 'react-materialize'

import AccountForm from './AccountForm'
import NotesForm from './NotesForm'

class AccountSelect extends React.Component {
  state = {
    showAccountForm: false,
    showNotes: false,
    account: ''
  }

  onAccountSelect = (event) => {
    this.setState({
      account: event.target.value,
      showNotes: true,
      showAccountForm: false
    })
  }

  addAccount = () => {
    this.setState({
      showNotes: false,
      showAccountForm: true,
    })
  }

  render() {
    return (
      <div>
        <p>Select or Add an Account</p>
        <div id='account-select-container'>
          <Input s={12} type='select' label='Account' onChange={this.onAccountSelect} value={this.state.account}>
            <option>Select</option>
            {this.props.accounts.map(account => {
              return (<option>{account.account}</option>)
            })}
          </Input>
          <Button floating large className='red' waves='light' icon='add' onClick={this.addAccount} />
        </div>
        <Button waves='light' type='submit' form='account-form'>Select</Button>
        { this.state.showAccountForm ? <section> <AccountForm /> </section> : '' }
        { this.state.showNotes ? <section> <NotesForm account={this.state.account} /> </section> : '' }
      </div> 
    ) 
  }
}

export default AccountSelect

