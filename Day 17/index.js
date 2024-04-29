const express = require("express");
//const userRouter = require('./src/controllers/user_controller');
const vehicleRouter= require('./src/controllers/vehicle_controller');

const app = express();
// register all middlewares 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

  
//app.use("/", userRouter);
app.use("/vehicle",vehicleRouter);


app.get("/", function(req,res)  
{   
    res.send("API Development using Express JS");
});
 

app.listen(3002, function() { });
console.log("Server Application is started. Url : http://localhost:3002");