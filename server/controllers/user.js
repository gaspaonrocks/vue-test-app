'use strict'

/* Importer le modèle de la base de données
Category from local url
penser à garder la fonction de lecture de modèles */
let models = require('../models')

let faker = require('faker')

module.exports = function UserController () {
  this.save = (req, res, next) => {
    let user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }

    return models.User.sync()
      .then(() => {
        return models.User.create(user)
          .then(() => { res.json(user) })
      })
      .catch(e => { console.error(e) })
    // Table created
    /*  User.create(user, (err, user) => {
       if (err) console.warn(err)
       else res.json(user)
     }) */
  }

  this.list = (req, res, next) => {
    return models.User.sync()
      .then(() => {
        return models.User.findAll()
          .then(users => { res.json(users) })
          .catch(e => { res.error(e) })
      })
      .catch(e => { console.error(e) })
  }
}

