const router = require('express').Router()
const { LineOrder } = require('../db/models')
const stripe = require('../constants/stripe');


const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  router.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  router.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return router;
};

module.exports = paymentApi;
