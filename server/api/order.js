const router = require('express').Router()
const { LineOrder, Instrument } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  LineOrder.findAll()
    .then(orders => {
      res.json(orders)
    })
    .catch(next)
})
