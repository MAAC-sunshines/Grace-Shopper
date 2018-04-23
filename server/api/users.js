const router = require('express').Router()
const { User, Order, OrderInstrument, LineOrder } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'firstName', 'lastName', 'admin']
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
    .catch(next)
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
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .catch(next);
})

router.delete('/:id/:instrumentId?', (req, res, next) => {
  console.log('hi');
  if (req.params.instrumentId) {
    LineOrder.destroy({
      where: {
        userId: req.params.id,
        orderId: null,
        instrumentId: req.params.instrumentId
      }
    }).then(res.sendStatus(204))
      .catch(next)
  } else {
    LineOrder.destroy({
      where: {
        userId: req.params.id,
        orderId: null
      }
    }).then(res.sendStatus(204))
      .catch(err => console.log(err));
  }
});
