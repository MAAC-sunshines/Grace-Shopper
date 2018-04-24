const router = require('express').Router()
const { LineOrder, Order } = require('../db/models');
const stripe = require('../constants/stripe');
// const cors = require('cors');

router.post('/', (req, res, next) => {

  Order.create(req.body)
    .then(res => {
      LineOrder.update({
        orderId: res.dataValues.id
      }, {
        where: {
          userId: req.body.userId,
          orderId: null
        }
      })
    })
    .then(updated => {
      res.json(updated)
    })
    .catch(next)
})

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}


router.get('/payment', (req, res) => {
  console.log('REQ', req)
  res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
});

router.post('/payment', (req, res) => {
  stripe.charges.create(req.body, postStripeCharge(res));
});

module.exports = router;

