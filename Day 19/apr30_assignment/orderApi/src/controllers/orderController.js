const express = require("express");
const router = express.Router();
const orderService = require('../services/orderService');
const axios = require("axios");


router.get("/orders", async function (req, res) {
    let orderArray = await orderService.getOrders();
    console.log("[GET ALL] No. of orders : " + orderArray.length);
    res.send(orderArray);
});


router.post("/placeOrderbyID", async function (req, res) {
    let status = await orderService.placeOrderbyProdId(req);
    if (status == "No sufficient stock") {
        res.status(200).send({ success: true, message: "No sufficient stock" });
    }
    else {
        res.send(status);
    }
});

/*
router.post("/placeOrder", async function (req, res) {
    let userqty = req.body.userqty;
    let url = "http://localhost:3001/prodapi/productsById/"

    let prodObj = await axios.get(url += req.body.productId);
    let result = prodObj.data;
    if (userqty > result.stockqty) {
        res.status(200).send({ success: true, message: "No sufficient stock" });
        return;
    }

    let orderObj = {
        pname: result.pname,
        price: result.price,
        userqty: req.body.userqty,
        totalAmount: (result.price * userqty)

    }
    let status = await orderService.placeOrder(orderObj);
    res.send(status);
});

module.exports = router;
*/