const { DataTypes, Model } = require('sequelize');
const sequelize = require('../loaders/sequelize');

class Category extends Model {}

Category.init( {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    sequelize,
    modelName: 'categorias'
});

module.exports = Category
