'use strict'

/* Importer le modèle de la base de données
Category from local url
penser à garder la fonction de lecture de modèles */
let data = require('../data/subcategory.json')

module.exports = function SubcategoriesController () {
  this.find = (req, res, next) => {
    /*   Category.find(req.query, (err, categories) => {
          if (err) next(err);
          else res.json(categories);
      }) */
    let params = req.query.state
    let resData = []

    data.forEach((i) => {
      if (i._ref === params) {
        resData.push(i)
      }
    })

    res.json(resData)
  }
}
