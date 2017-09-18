'use strict'

let SubcategoryCtrl = require('../controllers/subcategory')

// Export a function that sets up the routes we need
module.exports = function (router) {
  let ctrl = new SubcategoryCtrl()

  router.get('/subcategory', (req, res, next) => {
    ctrl.find(req, res, next)
  })
}
