const express = require("express");
const orderRouter = require('./src/controllers/orderController');
 

const app = express(); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/ordapi", orderRouter);
 

   
app.get("/", function(req,res)  
{   
    res.send("order API Development using Express JS");
});
 
app.listen(3002, function() { });
console.log("product API is started. Url : http://localhost:3002");
