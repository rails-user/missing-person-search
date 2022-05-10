'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class missing_persons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  missing_persons.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    body_feature: DataTypes.STRING,
    clothes: DataTypes.STRING,
    missing_place_id: DataTypes.INTEGER,
    missing_situation: DataTypes.STRING,
    picuture_pass: DataTypes.STRING,
    movie_pass: DataTypes.STRING,
    picture_movie_comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'missing_persons',
  });
  return missing_persons;
};