const router = require('express').Router()
const { Category, Instrument } = require('../db/models')
module.exports = router

function throwError(status, msg) {
  const err = new Error(msg);
  err.status = status;
  throw err;
}
function isLoggedIn (req, res, next) {
  if (!req.user) throwError(401, 'Unauthorized')
  next()
}
function isAdmin (req, res, next) {
  if (!req.user.admin) throwError(401, 'Unauthorized')
  next()
}

//get ALL CATEGORIES
router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => {
      res.json(categories)
    })
    .catch(err => console.error(err))
})

//get a single category by id
router.get('/:id', (req, res, next) => {
  Instrument.findAll({
    where: {
      categoryId: req.params.id
    }
  })
  .then(categories => {
    res.json(categories)
  })
  .catch(next);
})

//add a new category
router.post('/', isAdmin, (req, res, next) => {
  Category.create(req.body)
    .then(category => {
      res.json(category)
    })
    .catch(next);
})

//delete a category
router.delete('/:id', isAdmin, (req, res, next) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.status(204).end()
  })
  .catch(next)
})

//update an existing category
router.put('/:id', isAdmin, (req, res, next) => {
  const categoryId = req.params.id;
  Category.findById(categoryId)
        .then(category => category.update(req.body))
        .catch(next);
})

