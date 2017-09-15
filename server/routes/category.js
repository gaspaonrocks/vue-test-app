'use strict'

let CategoryCtrl = require('../controllers/category')

// Export a function that sets up the routes we need
module.exports = function (router) {
  let ctrl = new CategoryCtrl()

  router.get('/category', (req, res, next) => {
    ctrl.find(req, res, next)
  })
}
