'use strict'

/* Importer le modèle de la base de données
Category from local url
penser à garder la fonction de lecture de modèles */
let data = require('../data/category.json')

module.exports = function CategoriesController () {
  this.find = (req, res, next) => {
    res.json(data)
  }
}
