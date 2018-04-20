const router = require('express').Router()
const { LineOrder } = require('../db/models')
module.exports = router

router.post('/cart', (req, res, next) => {
  LineOrder.create(req.body)
    .then(created => {
      res.json(created)
    })
    .catch(next)
})
