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
    references: {
        model: Category,
        key: 'id'
    }
  }
}, {
    sequelize,
    modelName: 'posts'
});

module.exports = Post;