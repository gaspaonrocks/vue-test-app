'use strict'

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  })

  User.associate = function (models) {
    User.hasMany(models.Task)
  }

  return User
}
