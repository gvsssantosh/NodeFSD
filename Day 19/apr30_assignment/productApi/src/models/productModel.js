const db = require("../database/db");
const sequelize = require("sequelize");

const ProductsModel = db.define('Products', {
    pid: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pname: {
    type: sequelize.STRING(50),

  },
  price: {
    type: sequelize.DECIMAL(10, 2),

  },
  category: {
    type: sequelize.STRING(50),

  },
  stockqty: {
    type: sequelize.INTEGER,

  }
 
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = ProductsModel;