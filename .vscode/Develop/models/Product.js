// import important parts of sequelize library
const { Model, DataTypes, STRING } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      name: DataType.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(10, 2),
      allowNull: false,
      validate: {
        isInteger: true
      }

    },
    stock: {
      type: DataType.INTEGER,
      allowNull: false,
      default: {
        value: 10
      },
      validate: {
        isInteger: true
      }

    },
    category_id: {
      type: DataType.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
 );

module.exports = Product;
