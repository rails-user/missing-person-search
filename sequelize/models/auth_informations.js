'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auth_informations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  auth_informations.init({
    user_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    account_lock_flg: DataTypes.STRING,
    login_failure_cnt: DataTypes.INTEGER,
    login_failure_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'auth_informations',
  });
  return auth_informations;
};