import React from 'react'

import {Navbar, NavItem} from 'react-materialize'


import AccountSelect from './AccountSelect'



class Header extends React.Component {
  state = {
    accounts: []
  }

  componentDidMount() {
    fetch('https://beer-rep-tracker.herokuapp.com/api/v1/accounts')
    .then(response => response.json())
    .then(data => this.setState({accounts: data}))
  }

  render() {
    return (
      <div>
        <Navbar brand='Sales Tracker' right>
          <NavItem onClick={() => console.log('test click')}>Add Notes</NavItem>
          <NavItem href='components.html'>View Notes</NavItem>
        </Navbar>
        <div  id='select-container'>
          <AccountSelect accounts={this.state.accounts} />
        </div>       
      </div>
    ) 
  }
}

export default Header