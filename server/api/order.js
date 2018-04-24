const router = require('express').Router()
const { LineOrder, Instrument } = require('../db/models')
module.exports = router

router.get(`/order-history`, (req, res, next) => {
  const id = req.params.userId
  Order.findById(id)
    .then(orders => {
      res.json(orders)
    })
    .catch(next)
})
