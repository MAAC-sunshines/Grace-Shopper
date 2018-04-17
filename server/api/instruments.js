const router = require('express').Router()
const { Instrument } = require('../db/models')
module.exports = router

//route to get ALL INSTRUMETNS on single page
router.get('/', (req, res, next) => {
  Instrument.findAll()
    .then(instruments => {
      res.json(instruments)
    })
    .catch(err => console.error(err))
})

router.get('/:id', (req, res, next) => {
  Instrument.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(instrument => {
    res.json(instrument)
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Instrument.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(204).end())
  .catch(next);
})

router.put('/:id', (req, res, next) => {
  const instrumentId = req.params.id;
  Instrument.findById(instrumentId)
        .then(instrument => instrument.update(req.body))
        .catch(next);
})
