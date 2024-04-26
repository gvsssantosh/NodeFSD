const deptService = require("../services/deptService");

const express = require("express");
const dept_router = express.Router();

dept_router.get("/all", async (req, res) => {
    console.log("hello");
    let dataObj = {};
    dataObj.uname = "Narasimha";
    dataObj.citiesArray = ["Hyd", "Chennai", "Mumbai", "Goa"];
    dataObj.deptObj = { deptno: 10, dname: "Accounts", loc: "Hyd" };
    console.log(dataObj);
    res.render("deptList2", dataObj);

});

dept_router.get("/allDepts", async (req, res) => {
    let deptArr = await deptService.getAllDepartments();

    res.send(deptArr);
});

dept_router.get("/dept/:id", async (req, res) => {
    var { id } = req.params;
    let deptObj = await deptService.getDepartmentById(id);
    console.log(id);
    res.send(deptObj);
});

dept_router.post("/dept", async (req, res) => {
    var deptObj = {
        "deptno": parseInt(req.body.deptno),
        "dname": req.body.dname,
        "loc": req.body.loc
    };
    let status = {};
    status.message = await deptService.addDept(deptObj);
    console.log(status.message);
    res.send(status);
})


module.exports = dept_router;