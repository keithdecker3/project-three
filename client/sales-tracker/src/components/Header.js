import React from 'react'

import {Navbar, NavItem} from 'react-materialize'


import AccountSelect from './AccountSelect'
import ViewNotes from './ViewNotes'



class Header extends React.Component {
  state = {
    accounts: [],
    showAccountSelect: true,
    showViewNotes: false,
  }

  componentDidMount() {
    fetch('https://beer-rep-tracker.herokuapp.com/api/v1/accounts')
    .then(response => response.json())
    .then(data => this.setState({accounts: data}))
  }

  showAccountSelect = () => {
    this.setState({
      showAccountSelect: true,
      showViewNotes: false
    })
  }

  showViewNotes = () => {
    this.setState({
      showAccountSelect: false,
      showViewNotes: true
    })
  }

  render() {
    return (
      <div>
        <Navbar brand='Sales Tracker' right>
          <NavItem onClick={this.showAccountSelect}>Add Notes</NavItem>
          <NavItem onClick={this.showViewNotes}>View Notes</NavItem>
        </Navbar>
        { this.state.showAccountSelect ? <div  id='select-container'><AccountSelect accounts={this.state.accounts} /></div> : '' }
        { this.state.showViewNotes ? <ViewNotes /> : '' }
      </div>
    ) 
  }
}

export default Header