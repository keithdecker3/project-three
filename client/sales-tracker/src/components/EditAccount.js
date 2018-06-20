import React from 'react'

import {Row, Input, Button} from 'react-materialize'

class EditAccount extends React.Component {
  state = {
    account: '',
    supplierRep: '',
    distributorRep: '',
    buyer: '',
    streetAddress: '',
    accountType: '',
    accountID: '',
    showForm: true,
    showUpdate: false,
    showDelete: false
  }

  componentDidMount() {
    fetch(`https://beer-rep-tracker.herokuapp.com/api/v1/accounts/${this.props.account}`)
    .then(response => response.json())
    .then(response => {
      this.setState({
      account: this.props.account,
      supplierRep: response.supplier_rep,
      distributorRep: response.distributor_rep,
      buyer: response.buyer,
      streetAddress: response.address,
      accountType: response.account_type,
      accountID: response.id
      })
    })
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }

  updateAccount = (event) => {
    event.preventDefault()
    const url = `https://beer-rep-tracker.herokuapp.com/api/v1/accounts/${this.state.accountID}`
    const postData = {
      account: this.state.account,
      supplier_rep: this.state.supplierRep,
      distributor_rep: this.state.distributorRep,
      buyer: this.state.buyer,
      address: this.state.streetAddress,
      account_type: this.state.accountType
    }
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
    this.setState({
      showForm: false,
      showUpdate: true,
      showDelete: false
    })
  }

  deleteAccount = (event) => {
    event.preventDefault()
    const url = `https://beer-rep-tracker.herokuapp.com/api/v1/accounts/${this.state.accountID}`
    fetch(url, {
      method: 'DELETE'
    })
    this.setState({
      showForm: false,
      showDelete: true,
      showUpdate: false,
    })
  }

  render() {
    return (
      <div className='form-container'>
        { this.state.showForm ? 
        <form id='account-form'>
          <Row>
            <Input s={6} name='account' value={this.state.account} onChange={this.handleChange} />
            <Input s={6} name='supplierRep' value={this.state.supplierRep} onChange={this.handleChange} />
            <Input s={6} name='distributorRep' value={this.state.distributorRep} onChange={this.handleChange} />
            <Input s={6} name='buyer' value={this.state.buyer} onChange={this.handleChange} />
            <Input s={8} name='streetAddress' value={this.state.streetAddress} onChange={this.handleChange} />
            <Input s={4} type='select' label="Account Type" defaultValue={this.state.accountType} name='accountType' value={this.state.accountType} onChange={this.handleChange}>
              <option>Select</option>
              <option value='on'>On-Premise</option>
              <option value='off'>Off-Premise</option>
            </Input> 
            <div>
              <Button waves='light' type='submit' form='account-form' onClick={this.updateAccount}>Update</Button> 
              <Button waves='light' type='submit' form='account-form' onClick={this.deleteAccount}>Delete</Button>   
            </div> 
          </Row>
        </form>
        : ''}
        {this.state.showUpdate ? <h2>Update Submitted!</h2> : ''}
        {this.state.showDelete ? <h2>Account Deleted!</h2> : ''}
      </div>     
    )
  }
}
export default EditAccount