const router = require('express').Router()
module.exports = router

// router.use('/categories', require('./categories'))
router.use('/users', require('./users'))
router.use('/instruments', require('./instruments'))
router.use('/categories', require('./category'));
router.use('/cart', require('./cart'));
router.use('/checkout', require('./checkout'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
