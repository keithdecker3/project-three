import React from 'react'

import {Row, Input, Button} from 'react-materialize'

const AccountForm = (props) => {
  return (
    <div className='form-container'>
      <Row>
        <Input s={6} label="Account Name" />
        <Input s={6} label="Renegade Rep" />
        <Input s={6} label="Buyer Name" />
        <Input s={6} label="Distributor Rep" />
        <Input s={8} label="Street Address" />
        <Input s={4} label="City" />
        <Input s={4} label="State" />
        <Input s={4} label="Zip Code" />
        <Input s={4} type='select' label="Account Type">
          <option value='1'>On-Premise</option>
          <option value='2'>Off-Premise</option>
        </Input> 
        <div>
          <Button waves='light'>Submit</Button>  
        </div> 
      </Row>
  
    </div>
  )
}

export default AccountForm

