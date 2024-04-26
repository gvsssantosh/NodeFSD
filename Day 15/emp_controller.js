const empService = require("../services/empService");

const express = require("express");
const emp_router = express.Router();

emp_router.get("/allEmps", async (req, res) => {
    let resObj = {};
    resObj.empArr = await empService.getAllEmps();
    //res.send(resObj);
    console.log(resObj);

    res.render("empList", resObj);
});

//http://localhost:3002/Empapi/EmpList?id=7370

emp_router.get("/EmpList", async (req, res) => {
    let resObj = {};
    let { id } = req.query;
    if (id == null || id == undefined) {
        //id = 7369;
        //trying
        let resObj = {};
        resObj.empArr = await empService.getAllEmps();
        res.render("empList", resObj);
    }
    else {
        resObj.a = await empService.getEmpByID(id);


        res.render("singleEmp", resObj);

    }


    // res.send(a);
});

// emp_router.get("/EmpList", async (req, res) => {
//     let resObj = {};
//     let { id } = req.query;
//     if (id == null || id == undefined) {
//         //id = 7369;
//         //trying
//         let resObj = {};
//         resObj.empArr = await empService.getAllEmps();
//         res.render("empList", resObj);
//     }
//     else {
//         resObj.a = await empService.getEmpByID(id);


//         res.render("singleEmp", resObj);

//     }


//     // res.send(a);
// });

module.exports = emp_router;