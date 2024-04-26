const { Op, where } = require("sequelize");

const empModel = require("../models/employee_model");


exports.getAllEmps = async()=>{
    let empArray = await empModel.findAll();
    return empArray;
}

exports.getEmpByID = async(id)=>{
    let empArray = await empModel.findByPk(id);
    return empArray;
}
//findAll({where:{loc: loc}});

exports.getEmpBydept = async(deptid)=>{
    let empArray = await empModel.findAll({where:{deptno: deptid}});
    return empArray;
}