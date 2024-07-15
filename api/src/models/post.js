'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{
        foreignKey:'userId',
        onDelete:'CASCADE'
      });
    }
  }
  post.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false
    },
    desc:{
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    img: {
      type:DataTypes.STRING,
      allowNull: false
    },
    date: {
      type:DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};