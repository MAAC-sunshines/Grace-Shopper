const router = require('express').Router()
const { User, Order, OrderInstrument, LineOrder } = require('../db/models')
module.exports = router

function throwError(status, msg) {
  const err = new Error(msg)
  err.status = status
  throw err
}

function isLoggedIn ( req, res, next ) {
  if (!req.user) throwError(401, 'Unauthorized')
  next()
}

router.get('/',isLoggedIn, (req, res, next) => {
  if (!req.user.isAdmin) // throw 403
  next();
}, (req, res, next) => { // loggedIn, isAdmin
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'firstName', 'lastName', 'admin']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:id', (req, res, next) => { // selfOrAdmin -- KHHW
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
})

//route to get ALL PREVIOUS ORDERS on ORDER HISTORY PAGE
router.get('/:id/order-history', (req, res, next) => { // selfOrAdmin -- KHHW
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
// this seems like an order route -- KHHW
router.get('/:id/order-history/:orderId', (req, res, next) => {
  OrderInstrument.findOne({ // findbyid -- KHHW
    where: {
      orderId: req.params.orderId
    }
  })
    .then(singleOrder => { // consistency with when everything is on 1 line -- KHHW
      res.json(singleOrder)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => { // selfOrAdmin. Don't let user make themselves an admin -- KHHW
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .catch(next);
})
// req.query
router.delete('/:id/:instrumentId', (req, res, next) => { // auth, consider in cart route. should be 2 routes -- KHHW
  console.log('hi');
  if (req.params.instrumentId) {
    LineOrder.destroy({
      where: {
        userId: req.params.id,
        orderId: null,
        instrumentId: req.params.instrumentId
      }
    })
      .then(() => {
        console.log('here')
        res.sendStatus(204)
      })
      .catch(next)
  } else {
    LineOrder.destroy({
      where: {
        userId: req.params.id,
        orderId: null
      }
    }).then(res.sendStatus(204)) // consistency with .then on which line?? -- KHHW
      .catch(err => console.log(err));
  }
});
