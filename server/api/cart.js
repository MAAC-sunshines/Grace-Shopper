const router = require('express').Router()
const { LineOrder } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  console.log('req.body', req.body)
  LineOrder.findOrCreate({
    where: {
      instrumentId: req.body.instrumentId,
      userId: req.body.userId,
      orderId: null,
      itemPrice: req.body.itemPrice
    }
  }
  )
    .spread((order, created) => {
      if (created) {
        return res.json(created);
      } else {
        LineOrder.update({
          quantity: order.dataValues.quantity + 1
        },
          {
            where: {
              instrumentId: req.body.instrumentId,
              userId: req.body.userId,
              orderId: null,
              itemPrice: req.body.itemPrice
            }
          })
          .then(res => res.json)
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));

});

//deletes a single instrument from the cart (lineOrder)
router.delete('/', (req, res, next) => {
  LineOrder.destroy({
    where: {
      userId: req.body.userId,
      instrumentId: req.body.instrumentId
    }
  }).then(res.sendStatus(204))
  .catch(err => console.log(err))
})

//clears cart completely
router.delete('/', (req, res, next) => {
  LineOrder.destroy({
    where: {
      userId: req.body.userId,
      orderId: null
    }
  }).then(res.sendStatus(204))
  .catch(err => console.log(err))
})
