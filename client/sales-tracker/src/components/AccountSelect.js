import React from 'react'

import {Button, Input} from 'react-materialize'

import AccountForm from './AccountForm'
import NotesForm from './NotesForm'
import EditAccount from './EditAccount'

class AccountSelect extends React.Component {
  state = {
    showAccountForm: false,
    showNotes: false,
    showEditForm: false,
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
      showEditForm: false
    })
  }

  handleSelect = () => {
    this.setState({
      showNotes: true,
      showAccountForm: false,
      showEditForm: false
    })
  }

  editAccount = () => {
    this.setState({
      showNotes: false,
      showAccountForm: false,
      showEditForm: true
    })
  }

  render() {
    return (
      <div>
        <h3>Select, Add, or Edit an Account</h3>
        <div id='account-select-container'>
          <Input s={12} type='select' label='Account' onChange={this.onAccountSelect}>
            <option>Select</option>
            {this.props.accounts.map(account => {
              return (<option>{account.account}</option>)
            })}
          </Input>
          <Button id='add-account-button' floating medium className='blue' waves='light' icon='add' onClick={this.addAccount} />
          <Button id='edit-account-button' floating medium className='red' waves='light' onClick={this.editAccount}>edit</Button>
        </div>
        <Button waves='light' type='submit' form='account-form' onClick={this.handleSelect}>Select</Button>
        { this.state.showAccountForm ? <section > <AccountForm /> </section> : '' }
        { this.state.showEditForm ? <section > <EditAccount account={this.state.account} /> </section> : '' }
        { this.state.showNotes ? <section> <NotesForm account={this.state.account} /> </section> : '' }
      </div> 
    ) 
  }
}

export default AccountSelect

