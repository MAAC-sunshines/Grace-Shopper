const router = require('express').Router()
const { LineOrder, Instrument } = require('../db/models')
module.exports = router

// router.use( async (req, res, next) => {
//   //if there is already a req.cart and exit
//   if (req.cart) return next();

//   //if there is a cartId on req.session, set req.cart to a new instance of order and exit
//   if (req.session.cartId) {
//     req.cart = await Order.findById(req.session.cartId).catch(next);
//     return next();
//   }

//   //if neither of those two things happened, set req.cart to a new instance of Order, set the cartId to req.cart.id
//   req.cart = await Order.create().catch(next);
//   req.session.cartId = req.cart.id;
//   console.log('req.session in cart.js', req.session);

//   next();
// });
// router.use((req, res, next) => {
//   if (req.user) return next();
//   if (req.session.userId) {
//     console.log('req.session.userId', req.session.userId)
//     }
//   req.session.userId = req.user.id
// })
router.get('/', (req, res, next) => {
  LineOrder.findAll()
  .then(orders => res.json(orders));
})
router.get('/:id', (req, res, next) => {
  LineOrder.findAll({
    where: {
      userId: req.params.id,
      orderId: null
    }
  })
  .then(orders => res.json(orders))
  .catch(err => console.log(err));
})
router.post('/', (req, res, next) => {
  // console.log('req.session', req.sessionID)
  // if (!req.body.userId){
  //   req.body.userId = req.sessionID
  // }
  console.log('req.body.userId', req.body.userId);
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

//updates quantity
router.put('/', (req, res, next) => {
  LineOrder.findOne({
    where: {
      instrumentId: req.body.instrumentId
    }
  }).then(order => order.update(req.body))
  .then(updatedOrder => res.status(201).json(updatedOrder))
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
  .catch(err => console.log(err));
});

//clears cart completely
router.delete('/', (req, res, next) => {
  LineOrder.destroy({
    where: {
      userId: req.body.userId,
      orderId: null
    }
  }).then(res.sendStatus(204))
  .catch(err => console.log(err));
});

//get cart 
router.get('/', (req, res, next) => {
  console.log('res', req.user.id)
  LineOrder.findAll({where: {userId: req.user.id, orderId: null}, include: [Instrument]})
  .then(cart => {
    res.json(cart)
  })
  .catch(next);
})
