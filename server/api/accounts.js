const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

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
  queries.create(req.body).then(accounts => {
    res.json(accounts[0])
  })
})

router.put('/:id', (req,res,next) => {
  queries.update(req.params.id, req.body).then(accounts => {
  res.json(accounts[0])
  })
})

router.delete('/:id', (req, res) => {
  queries.delete(req.params.id).then(() =>
    res.json({
    deleted:true
    })
  )
})

module.exports = router