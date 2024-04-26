const express = require("express");
var bodyParser = require("body-parser");
const deptRouter = require('./src/controllers/dept_controller');
const empRouter = require('./src/controllers/emp_controller');
const path = require('path');
const log_insertion = require('./logs/log_insertion');
// create express application object 
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.set("view engine", "ejs");


app.use((req, res, next) => {
   let msg = "";
   msg = req.url + " - " + req.method;
   log_insertion.writing_content(msg);
   next();
});

app.use("/deptapi", deptRouter);
app.use("/empapi", empRouter);
// default request
app.get("/", function (req, res) {
   let resultStr = "<h1 align='center'>Welcome to Express Web Application<h1/>";
   res.send(resultStr);
});

app.get("*", (req, res) => {
   res.status(404).render("notfound", null);
});

app.listen(3002, function () { });
console.log("Server Application is started. Url : http://localhost:3002");


module.exports = app;