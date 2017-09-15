'use strict'

/* Importer le modèle de la base de données
Category from local url
penser à garder la fonction de lecture de modèles */
let data = require('../data/category.json')

module.exports = function CategoriesController () {
  this.find = (req, res, next) => {
    /*   Category.find(req.query, (err, categories) => {
          if (err) next(err);
          else res.json(categories);
      }) */

    res.json(data)
  }
}
