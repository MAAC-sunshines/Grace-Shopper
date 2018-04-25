const router = require('express').Router()
const { LineOrder, Instrument, Order } = require('../db/models')
module.exports = router

function throwError(status, msg) {
  const err = new Error(msg);
  err.status = status;
  throw err;
}
function isAdmin (req, res, next) {
  if (!req.user.admin) throwError(401, 'Unauthorized')
  next()
}
function isLoggedIn (req, res, next) {
  if (!req.user) throwError(401, 'Unauthorized')
  next()
}

router.get('/', isAdmin, (req, res, next) => {
  Order.findAll()
  .then(orders => res.json(orders))
  .catch(next);
})

router.get('/:id', isLoggedIn, (req, res, next) => {
  console.log('backend');
    if (req.user.id === req.params.id || isAdmin){
      Order.findAll({
        where: {
          userId: req.user.id,
        }
      })
      .then(orders => res.json(orders))
      .catch(next)
    }
})
