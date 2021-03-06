const router = require('express').Router()
const { User, Order, OrderInstrument, LineOrder } = require('../db/models')
module.exports = router

function throwError(status, msg) {
  const err = new Error(msg);
  err.status = status;
  throw err;
}

function isLoggedIn (req, res, next) {
  if (!req.user) throwError(401, 'Unauthorized')
  next()
}
function isAdmin (req, res, next) {
  if (!req.user.admin) throwError(401, 'Unauthorized')
  next()
}

router.get('/', isLoggedIn, isAdmin, (req, res, next) => {
  User.findAll({

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

router.delete('/:id', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(204).send('User deleted'))
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

