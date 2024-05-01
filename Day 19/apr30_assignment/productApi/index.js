const express = require("express");
const prodRouter = require('./src/controllers/productController');
 

const app = express(); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/prodapi", prodRouter);
 

   
app.get("/", function(req,res)  
{   
    res.send("product API Development using Express JS");
});
 
app.listen(3001, function() { });
console.log("product API is started. Url : http://localhost:3001");
