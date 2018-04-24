const router = require('express').Router()
const { LineOrder, Instrument } = require('../db/models')
module.exports = router

// const getSessionCart = (cart) => {
//   cart.map(lineOrder => )
// }

// req.session.cart = [
//   {instrumentId: 1, quantity: 1},
//   {instrumentId: 2, quantity: 2}
// ]

router.get('/', (req, res, next) => {
  if (!req.user) return res.json(req.session.cart)
  LineOrder.findAll({
    where: {
      userId: req.user.id,
      orderId: null
    }
  })
  .then(lineOrders => res.json(lineOrders))
  .catch(next);
})


router.post('/', (req, res, next) => {
  if (!req.user){
    req.session.cart = req.session.cart || [];
    const existingInstrument = req.session.cart.filter((instrument => instrument.instrumentId === req.body.instrumentId));
    if (!existingInstrument.length) {
      req.session.cart.push({
        instrumentId: req.body.instrumentId,
        quantity: req.body.quantity
      })
    } else {
      req.session.cart.filter(instrument => {
        if (instrument.instrumentId === req.body.instrumentId) {
          instrument.quantity += 1;
        }
      })
    }
    console.log('session cart', req.session.cart);
    res.json(req.session.cart);
  } else {
    LineOrder.findOrCreate({
      where: {
        instrumentId: req.body.instrumentId,
        userId: req.user.id,
        orderId: null,
        itemPrice: req.body.itemPrice
      }
    })
    .spread((order, created) => {
      if (created) {
        return res.json(created);
      } else {
        order.update({
          quantity: order.getDataValues.quantity + 1
        })
        .then(updatedOrder => res.json(updatedOrder))
      }
    })
    .catch(next)
  }
})

router.delete('/', (req, res, next) => {
  console.log('req.body', req.body);
  if (!req.body.instrumentId){
    if (!req.user) {
      req.session.cart = [];
      res.status(204).send('Cart cleared successfully');
    } else {
      LineOrder.destroy({
        where: {
          userId: req.user.id,
          orderId: null
        }
      })
      .then(res.status(204).send('Cart cleared successfully!'))
      .catch(next)
    }
  } else if (!req.user) {
      let idx = 0;
      for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].instrumentId === req.body.instrumentId){
          idx = i;
        }
      }
      req.session.cart.splice(idx, 1);
      console.log('req.session.cart', req.session.cart)
      res.json(req.session.cart);
    } else {
      LineOrder.destroy({
        where: {
          userId: req.user.id,
          instrumentId: req.body.instrumentId,
          orderId: null
        }
      })
      .then(cart => res.json(cart))
      .catch(next);
    }
})
// router.get('/:id', (req, res, next) => {
//   LineOrder.findAll({
//     where: {
//       userId: req.params.id,
//       orderId: null
//     }
//   })
//   .then(orders => res.json(orders))
//   .catch(err => console.log(err));
// })


// //updates quantity
// router.put('/', (req, res, next) => {
//   LineOrder.findOne({
//     where: {
//       instrumentId: req.body.instrumentId
//     }
//   }).then(order => order.update(req.body))
//   .then(updatedOrder => res.status(201).json(updatedOrder))
//   .catch(err => console.log(err));
// });

// //deletes a single instrument from the cart (lineOrder)


// //get cart 
// router.get('/', (req, res, next) => {
//   console.log('res', req.user.id)
//   LineOrder.findAll({where: {userId: req.user.id, orderId: null}, include: [Instrument]})
//   .then(cart => {
//     res.json(cart)
//   })
//   .catch(next);
// })
