import React from 'react'

import {Input, Icon} from 'react-materialize'

class AccountSelect extends React.Component {
  render() {
    return (
      <div id='account-select-container'>
        <Input id='account-select' s={6} label='Account' />
        <Icon medium id='add-account-icon'>add_circle</Icon>
      </div>
    ) 
  }
}

export default AccountSelect