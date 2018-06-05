const express = require('express')

const router = express.Router()

const queries = require('../db/notesQueries')

router.get('/', (req, res) => {
  queries.getAll().then(notes => {
    res.json(notes)
  })
})

router.get('/:notes',  (req, res) => {
  queries.getOne(req.params.notes).then(notes => {
    if(notes) {
      res.json(notes)
    } else {
      next()
    }
  })
})

router.post('/', (req, res, next) => {
  queries.create(req.body).then(notes => {
    res.json(notes[0])
  })
})

router.put('/:id', (req,res,next) => {
  queries.update(req.params.id, req.body).then(notes => {
  res.json(notes[0])
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