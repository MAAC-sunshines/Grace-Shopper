const router = require('express').Router()
const { Category, Instrument } = require('../db/models')
module.exports = router

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
router.post('/', (req, res, next) => {
  Category.create(req.body)
    .then(category => {
      res.json(category)
    })
    .catch(next);
})

//delete a category
router.delete('/:id', (req, res, next) => {
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
router.put('/:id', (req, res, next) => {
  const categoryId = req.params.id;
  Category.findById(categoryId)
        .then(category => category.update(req.body))
        .catch(next);
})