'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING(100),
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });
  return User;
};