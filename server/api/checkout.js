const router = require('express').Router()
const stripe = require('../constants/stripe');
// const cors = require('cors');
const { LineOrder } = require('../db/models');
// const CORS_WHITELIST = require('../constants/frontend');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}


// const corsOptions = {
//   origin: (origin, callback) => {
//     (CORS_WHITELIST.indexOf(origin) !== -1)
//       ? callback(null, true)
//       : callback(new Error('Not allowed by CORS'))
//   }
// };



router.get('/', (req, res) => {
  console.log('REQ', req)
  res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
});

router.post('/', (req, res) => {
  stripe.charges.create(req.body, postStripeCharge(res));
});

module.exports = router;
