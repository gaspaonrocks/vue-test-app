'use strict'

let UserCtrl = require('../controllers/user')

// Export a function that sets up the routes we need
module.exports = function (router) {
  let ctrl = new UserCtrl()

  router.get('/user/create', (req, res, next) => {
    ctrl.save(req, res, next)
  })

  router.get('/user', (req, res, next) => {
    ctrl.list(req, res, next)
  })
}
