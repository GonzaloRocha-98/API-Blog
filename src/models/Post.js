const { DataTypes, Model } = require('sequelize');
const sequelize = require('../loaders/sequelize');
const Category = require('./Category');

class Post extends Model {}

Post.init( {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contenido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
      type: DataTypes.STRING,
      allowNull: false
  },
  categoria:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Category,
        key: 'id'
    },
  }
}, {
    sequelize,
    createdAt: 'fechaDeCreacion',
    modelName: 'posts'
});

module.exports = Post;