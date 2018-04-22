const router = require('express').Router()
const { LineOrder } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  res.send(keyPublishable)
});

router.post('/charge', (req, res, next) => {
  let amount = 500; //stripe charges by cents, multiply any $ amounts by 100;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => {
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    })
  })
  .then(charge => res.render("charge.pug"));
});
