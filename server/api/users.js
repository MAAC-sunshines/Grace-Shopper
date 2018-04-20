const router = require('express').Router()
const {User, Order, OrderInstrument} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  console.log('in users get')
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
})

//route to get ALL PREVIOUS ORDERS on ORDER HISTORY PAGE
router.get('/:id/order-history', (req, res, next) => {
  Order.findAll({
    where: {
      userId: req.params.id
      }
    })
    .then(allOrders => {
      res.json(allOrders)
    })
    .catch(err => console.error(err))
})

//route to get a SINGLE ORDER
router.get('/:id/order-history/:orderId', (req, res, next) => {
  OrderInstrument.findOne({
    where: {
      orderId: req.params.orderId
      }
    })
    .then(singleOrder => {
      res.json(singleOrder)
    })
    .catch(err => console.error(err))
})

