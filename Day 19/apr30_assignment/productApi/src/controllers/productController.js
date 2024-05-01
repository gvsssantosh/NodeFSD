const express = require("express");
const router = express.Router();
const productService = require('../services/productService');
//const authenticateUser = require('../middlewares/authenticateUser.middleware');

//  get request  -    /Emps
router.get("/products",  async function(req,res)
{
    let prodArray  = await   productService.getAllProudcts();
    console.log("[GET ALL] No. of products : "  + prodArray.length);
    res.send(prodArray);
});


//  get request  -    /Emps
router.get("/productsById/:pid",  async function(req,res)
{  
  let str  = "Selected id : " + req.params.pid; 
  console.log(str);

  let prodArray  = await   productService.getProductById(req.params.pid);
  
  //if(prodArray.length == 0)
  if(!prodArray)
    res.status(200).send({success:true, message : "No. product with the given id"});
  else
    res.json(prodArray);
});

 

module.exports = router;
