'use strict'

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || 'development'
var config = require(path.join(__dirname, '../../config/dbconfig.json'))[env]

let sequelize

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}
var db = {}

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.sequelize.authenticate()
  .then(() => console.log('success'))
  .catch(e => console.error('not so fast ', e))

module.exports = db
