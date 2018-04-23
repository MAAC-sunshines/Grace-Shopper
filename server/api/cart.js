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
// router.get('/', (req, res, next) => {
//   LineOrder.findAll()
//   .then(orders => res.json(orders));
// })
router.get('/:id', (req, res, next) => {
  if (!req.user) return res.json(req.session.cart) // -- KHHW
  LineOrder.findAll({
    where: {
      userId: req.params.id, // req.user unless admin -- KHHW
      orderId: null
    }
  })
  .then(orders => res.json(orders))
  .catch(err => console.log(err)); // send that response -- KHHW
})

router.post('/', (req, res, next) => {
  // console.log('req.session', req.sessionID)
  // if (!req.body.userId){
  //   req.body.userId = req.sessionID
  // }
  console.log('req.body.userId', req.body.userId);
  if (!req.user) {
    req.session.cart = req.session.cart || []
    // go through array of current cart, if you find the instrument then update quantity. Else add this to cart -- KHHW
    req.session.cart.push({instrumentId, quantity})
    return Promise
      .all(req.session.cart.map(item => Instrument.findById(item.instrumentId)))
      .then(allProducts => {
        return res.json(req.session.cart.map((item, i) => ({instrument: allProducts[i], quantity: item.quantity})))
      })
      .catch(next)
    // return res.json(req.session.cart)
  }
  LineOrder.findOrCreate({
    where: {
      instrumentId: req.body.instrumentId,
      userId: req.body.userId,
      orderId: null,
      itemPrice: req.body.itemPrice // doesn't need to be here IF cart addition. But leave because you aren't doing discounting -- KHHW
    }
  }
  )
    .spread((lineOrder, created) => {
      if (created) {
        return res.json(created);
      } else {
        // could use instance update
        // lineOrder.update({quantity: req.body.quantity}) // -- KHHW
        return LineOrder.update({
          quantity: lineOrder.dataValues.quantity + 1
        },
          {
            where: {
              instrumentId: req.body.instrumentId,
              userId: req.body.userId,
              orderId: null,
              itemPrice: req.body.itemPrice
            }
          })
          .catch(err => console.log(err)); // NO NESTING OF PROMISES (except with good reason) -- KHHW
      }
    })
    .then(res => res.json) // 201 makes sense here -- KHHW
    .catch(err => console.log(err));// USE NEXT -- kHHW

});


//updates quantity - could always just hit post. Could separate so that post only creates and updates to quantity are only here.  -- KHHW
router.put('/', (req, res, next) => {
  LineOrder.findOne({ // have to have user or order in here to make it unique -- KHHW
    where: {
      instrumentId: req.body.instrumentId
    }
  }).then(order => order.update(req.body))
  .then(updatedOrder => res.status(201).json(updatedOrder)) // 200 makes sense here -- KHHW
  .catch(err => console.log(err)); // USE NEXT -- kHHW
});

//deletes a single instrument from the cart (lineOrder)


//get cart 
router.get('/', (req, res, next) => {
  if (!req.user) return res.json(req.session.cart) // -- KHHW
  console.log('res', req.user.id)
  LineOrder.findAll({where: {userId: req.user.id, orderId: null}, include: [Instrument]})
  .then(cart => { // indentation and 1 line -- KHHW
    res.json(cart)
  })
  .catch(next);
})
