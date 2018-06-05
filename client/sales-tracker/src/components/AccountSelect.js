import React from 'react'

import {Icon, Button, Input} from 'react-materialize'

class AccountSelect extends React.Component {

  render() {
    return (
      <div>
        <p>Select or Add an Account</p>
        <div id='account-select-container'>
          <Input s={12} type='select' label='Select Account' defaultValue='2'>
            {this.props.accounts.map(account => {
              return (<option>{account.account}</option>)
            })}
          </Input>
          <Icon medium id='add-account-icon'>add_circle</Icon>
        </div>
        <Button waves='light' type='submit' form='account-form' onClick={this.createList} >Select</Button>
      </div> 
    ) 
  }
}

export default AccountSelect

