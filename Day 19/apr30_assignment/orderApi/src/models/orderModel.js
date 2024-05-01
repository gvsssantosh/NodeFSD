const db = require("../database/db");
const sequelize = require("sequelize");

const OrdersModel = db.define('Orders', {
    orderId: {
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
  userqty: {
    type: sequelize.INTEGER,

  },
  totalAmount: {
    type: sequelize.DECIMAL(10, 2),

  },
 
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = OrdersModel;