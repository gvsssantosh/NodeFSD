

const { Op, where } = require("sequelize");
const deptModel = require('..//models/deptModel');



// Read All
exports.getAllDepartments = async () => {
    let deptArray = await deptModel.findAll();
    return deptArray;
};

exports.getAllDepartmentsSortedById = async () =>{
    let deptArray= await deptModel.findAll({order:[
        ['dname','ASC'],['loc','ASC']
    ],
    limit: 5
    });
    return deptArray;
}

 
exports.getDepartmentByloc = async (loc) => {
    let deptObj = await deptModel.findAll({where:{loc: loc}});
    return deptObj;
};



// Read Single
exports.getDepartmentById = async (dno) => {
    let deptObj = await deptModel.findByPk(dno);
    return deptObj;
};

 
// Create
exports.addDept = async (deptObj) => {
    await deptModel.create(deptObj);
    return "Dept details are inserted";
};

 
// Update
exports.updateDept = async (deptObj) => {
    await deptModel.update(deptObj, { where: { deptno: deptObj.deptno }  });
    return "Dept details are udpated";
};

// Delete 
exports.deleteDeptById = async (dno) => {
    await deptModel.destroy({ where: { deptno: dno }  });
    return "Dept details are deleted";
};



// exports.getAllDepartments = async () => {
//     let [deptArray] = await db.query("select * from dept"); 
//     return deptArray;
// };


// exports.getDepartmentById= async (dno) => {
//     let [deptArray] = await db.query("select * from dept where deptno=" + dno); 
//     return deptArray[0];
// };

// exports.deleteDeptById= async (dno) => {
//     await db.query("delete from dept where deptno ="+dno);

// };

// exports.addDept= async (deptObj) => {
//     // await db.query(`insert into dept values(${deptObj.deptno},"${deptObj.dname}","${deptObj.loc}")`);
//     await db.query("insert into dept values(?,?,?)",[deptObj.deptno,deptObj.dname,deptObj.loc]);
    
// };
