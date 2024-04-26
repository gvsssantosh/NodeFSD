const sequelize=require("sequelize");
const db=require("../database/db");

const Emps = db.define('emps', 
{
    empno: {
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ename: {
      type: sequelize.STRING(100),
      allowNull: true,
    },
    job: {
      type: sequelize.STRING(100),
      allowNull: true,
    },
    salary: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    deptno: 
    {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'dept',
        key: 'deptno',
      },
    }
    
  },
  {
    // freeze name table not using *s on name
    freezeTableName: true,
    // dont use createdAt/update
    timestamps: false,
}
);
  
  // Export the model
  module.exports = Emps;