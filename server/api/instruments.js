const router = require('express').Router()
const { Instrument } = require('../db/models')
module.exports = router

//route to get ALL INSTRUMENTS on single page
router.get('/', (req, res, next) => {
  Instrument.findAll()
    .then(instruments => {
      res.json(instruments)
    })
    .catch(err => console.error(err))
})

router.get('/:instrumentId', (req, res, next) => {
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

//add a new instrument
router.post('/', (req, res, next) => {
  Instrument.create(req.body)
    .then(instrument => {
      res.json()
    })
    .catch(next);
})



//delete an instrument
router.delete('/:id', (req, res, next) => {
  Instrument.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.status(204).end()
  })
  .catch(next)
})
