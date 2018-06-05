import React from 'react'

import {Navbar, NavItem} from 'react-materialize'

class Header extends React.Component {
  render() {
    return (
      <Navbar brand='logo' right>
        <NavItem onClick={() => console.log('test click')}>Select Account</NavItem>
        <NavItem href='components.html'>Add Account</NavItem>
      </Navbar>
    ) 
  }
}

export default Header