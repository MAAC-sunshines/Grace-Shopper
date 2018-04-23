const router = require('express').Router()
const { Category, User } = require('../db/models')

module.exports = router

//route to get ALL CATEGORIES on single page
router.get('/', (req, res, next) => {
  Category.findAll()
    .then(category => {
      res.json(category)
    })
    .catch(err => console.error(err))
})
