const router = require('express').Router()
const { Instrument } = require('../db/models')
module.exports = router

function throwError(status, msg) {
  const err = new Error(msg);
  err.status = status;
  throw err;
}
function isAdmin (req, res, next) {
  if (!req.user.admin) throwError(401, 'Unauthorized')
  next()
}

//route to get ALL INSTRUMENTS on single page
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

//add a new instrument
router.post('/', isAdmin, (req, res, next) => {
  Instrument.create(req.body)
    .then(instrument => {
      res.json(instrument)
    })
    .catch(next);
})

//delete an instrument

router.delete('/:id', isAdmin, (req, res, next) => {
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

router.put('/:id', isAdmin, (req, res, next) => {
  const instrumentId = req.params.id;
  Instrument.findById(instrumentId)
        .then(instrument => instrument.update(req.body))
        .catch(next);
})
