const router = require('express').Router()
const { Instrument } = require('../db/models')
module.exports = router

//route to get ALL PRODUCTS on single page
router.get('/', (req, res, next) => {
  Instrument.findAll()
    .then(instruments => {
      res.json(instruments)
    })
    .catch(err => console.error(err))
})


//route to get product by category
router.get('/:category', (req, res, next) => {
  Instrument.findBy({
    category: req.params.category
  })
  .then(instruments => {
    res.json(instruments)
  })
  .catch(next)
})
