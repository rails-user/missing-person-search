'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class temporary_accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  temporary_accounts.init({
    mail_address: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'temporary_accounts',
  });
  return temporary_accounts;
};