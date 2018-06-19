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

    })
  }

  addAccount = () => {
    this.setState({
      showNotes: false,
      showAccountForm: true,
    })
  }

  handleSelect = () => {
    this.setState({
      showNotes: true,
      showAccountForm: false
    })
  }

  render() {
    return (
      <div>
        <h3>Select or Add an Account</h3>
        <div id='account-select-container'>
          <Input s={12} type='select' label='Account' onChange={this.onAccountSelect}>
            <option>Select</option>
            {this.props.accounts.map(account => {
              return (<option>{account.account}</option>)
            })}
          </Input>
          <Button id='add-account-button' floating large className='blue' waves='light' icon='add' onClick={this.addAccount} />
        </div>
        <Button waves='light' type='submit' form='account-form' onClick={this.handleSelect}>Select</Button>
        { this.state.showAccountForm ? <section > <AccountForm /> </section> : '' }
        { this.state.showNotes ? <section> <NotesForm account={this.state.account} /> </section> : '' }
      </div> 
    ) 
  }
}

export default AccountSelect

