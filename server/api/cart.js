const router = require('express').Router()
const { LineOrder } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  console.log('req.body', req.body)
  LineOrder.create(
    req.body.instrument)
    .then(created => {
      res.json(created)
    })
    .catch(err => console.log(err))
})
