const { Op } = require("sequelize");
const ProductsModel = require('..//models/productModel');


// Read All
exports.getAllProudcts = async () => {
    let productsArray = await ProductsModel.findAll();
    return productsArray;
};
 

// Read Single
exports.getProductById = async (pid) => {
    let productObj = await ProductsModel.findByPk(pid);
    return productObj;
};

 