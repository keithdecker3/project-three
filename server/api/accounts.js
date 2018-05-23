const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

// function isValidAccount(req, res, next) {
//   if (!isNaN(req.params.id)) return next()
//   next(new Error('Invalid Account'))
// }

// function validAccount(account) {
//   const hasAccount = typeof account.account == 'string' && account.account.trim() != ''
//   const hasSupplierRep = typeof account.supplier_rep == 'string' && account.supplier_rep.trim() != ''
//   const hasDistributorRep = typeof account.distributor_rep == 'string' && account.distributor_rep.trim() != ''
//   const hasBuyer = typeof account.buyer == 'string' && account.buyer.trim() != ''
//   const hasAddress = typeof account.address == 'string' && account.address.trim() != ''
//   const hasAccountType = typeof account.account_type == 'string' && account.account_type.trim() != ''
// }

router.get('/', (req, res) => {
  queries.getAll().then(accounts => {
    res.json(accounts)
  })
})

router.get('/:account',  (req, res) => {
  queries.getOne(req.params.account).then(account => {
    if(account) {
      res.json(account)
    } else {
      next()
    }
  })
})

router.post('/', (req, res, next) => {
  queries.create(req.body).then (accounts => {
    res.json(accounts[0])
  })
})

module.exports = router