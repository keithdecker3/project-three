import React from 'react'

import {Row, Input, Button} from 'react-materialize'

class AccountForm extends React.Component {
  state = {
    account: '',
    supplierRep: '',
    distributorRep: '',
    buyer: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    accountType: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }

  formSubmit = (event) => {
    event.preventDefault()
    const url = 'https://beer-rep-tracker.herokuapp.com/api/v1/accounts'
    const postData = {
      account: this.state.account,
      supplier_rep: this.state.supplierRep,
      distributor_rep: this.state.distributorRep,
      buyer: this.state.buyer,
      address: `${this.state.streetAddress}, ${this.state.city}, ${this.state.state} ${this.state.zipCode}`,
      account_type: this.state.accountType
    }
    // console.log(JSON.stringify(postData))
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    this.setState({
      account: '',
      supplierRep: '',
      distributorRep: '',
      buyer: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      accountType: ''
    })
  }


  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.formSubmit} id='account-form'>
          <Row>
            <Input s={6} label="Account Name" name='account' value={this.state.account} onChange={this.handleChange} />
            <Input s={6} label="Renegade Rep" name='supplierRep' value={this.state.supplierRep} onChange={this.handleChange} />
            <Input s={6} label="Buyer Name" name='distributorRep' value={this.state.distributorRep} onChange={this.handleChange} />
            <Input s={6} label="Distributor Rep" name='buyer' value={this.state.buyer} onChange={this.handleChange} />
            <Input s={8} label="Street Address" name='streetAddress' value={this.state.streetAddress} onChange={this.handleChange} />
            <Input s={4} label="City" name='city' value={this.state.city} onChange={this.handleChange} />
            <Input s={4} label="State" name='state' value={this.state.state} onChange={this.handleChange} />
            <Input s={4} label="Zip Code" name='zipCode' value={this.state.zipCode} onChange={this.handleChange} />
            <Input s={4} type='select' label="Account Type" name='accountType' value={this.state.accountType} onChange={this.handleChange}>
              <option>Select</option>
              <option>On-Premise</option>
              <option>Off-Premise</option>
            </Input> 
            <div>
              <Button waves='light' type='submit' form='account-form' >Submit</Button>  
            </div> 
          </Row>
        </form>
      </div>
    )
  }
}
export default AccountForm

