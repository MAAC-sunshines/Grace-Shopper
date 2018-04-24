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
  console.log('body',req.body);
  if (!req.user) {
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
          instrument.quantity = instrument.quantity + req.body.quantity;
        }
      })
    }
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
          LineOrder.update({
            quantity: req.body.quantity
          },
          {
            where: {
              instrumentId: req.body.instrumentId,
              userId: req.user.id,
              orderId: null,
              itemPrice: req.body.itemPrice
            },
          })
          .then(update => res.json(update))
          .catch(next);
        } else {
          order.update({
            quantity: order.getDataValues.quantity + req.body.quantity
          })
            .then(updatedOrder => res.json(updatedOrder))
        }
      })
      .catch(next)
  }
})

router.delete('/', (req, res, next) => {
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
})

router.put('/', (req, res, next) => {
  //if there is no quantity, it is deleting the lineOrder
  if (!req.body.quantity) {
    console.log('inside delete item');
    if (!req.user) {
      let idx = 0;
      for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].instrumentId === req.body.instrumentId) {
          idx = i;
        }
      }
      req.session.cart.splice(idx, 1);
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
  } else {
    //there is quantity so we  are updating lineOrder
    if (!req.user) {
      let idx = 0;
      for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].instrumentId === req.body.instrumentId) {
          req.session.cart[i].quantity = req.body.quantity;
        }
      }
      res.json(req.session.cart);
    } else {
      LineOrder.findOne({
        where: {
          userId: req.user.id,
          instrumentId: req.body.instrumentId,
          orderId: null
        }
      })
        .then(lineOrder => lineOrder.update({ quantity: req.body.quantity }))
        .then(() => {
          return LineOrder.findAll({
            where: {
              userId: req.user.id,
              orderId: null
            }
          })
        })
        .then(updatedCart => res.json(updatedCart))
        .catch(next)
    }
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
