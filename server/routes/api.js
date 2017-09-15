const express = require('express')
const router = express.Router()

// Require locally the function we need
let setCategoryRoutes = require('./category.js')

let data = require('../data/data.json')

// Set up new routes eventually
router.get('/', (req, res) => {
  res.json(data)
})

// Export function (or object) to be called in server.js
module.exports = function () {
  setCategoryRoutes(router)

  return router
}
