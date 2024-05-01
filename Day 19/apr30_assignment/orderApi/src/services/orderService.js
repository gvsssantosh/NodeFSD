const { Op } = require("sequelize");
const orderModel = require('../models/orderModel');
const axios = require("axios");

// Read All
exports.getOrders = async () => {
    let ordersArray = await orderModel.findAll();
    return ordersArray;
};
 


// Create
exports.placeOrder = async (orderObj) => {
    //
    await orderModel.create(orderObj);
    return "Dept details are inserted";
};

exports.placeOrderbyProdId = async (req) => {
    //
    let userqty=req.body.userqty;
    let url = "http://localhost:3001/prodapi/productsById/"

    let prodObj = await axios.get(url += req.body.productId);
    let result=prodObj.data;

    if(userqty>result.stockqty){
        return "No sufficient stock";
    }

    let orderObj = {
        pname: result.pname,
        price: result.price,
        userqty: req.body.userqty,
        totalAmount:(result.price*userqty)

    }

    await orderModel.create(orderObj);
    return "Dept details are inserted";
};
 
 