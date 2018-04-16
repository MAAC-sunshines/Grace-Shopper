const router = require('express').Router()
const { Instrument } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Instrument.findAll()
    .then(instruments => {
      res.json(instruments)
    })
    .catch(err => console.error(err))
})

router.get('/:productId', (req, res, next) => {
  Instrument.findOne({
    where: {
      id: req.params.productId
    }
  })
  .then(instrument => {
    res.json(instrument)
  })
  .catch(next);
})
