const router = require('express').Router()
const { LineOrder, Instrument, Order } = require('../db/models')
module.exports = router

router.get(`/`, (req, res, next) => {
  const id = req.user.id
  Order.findAll({
    where: {
      userId: id
    },
    include: [{ all: true }]
  })
    .then(orders => res.json(orders))
    .catch(next)
})
