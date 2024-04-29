const express = require("express");
const router = express.Router();
const vehicleDataValidator = require('../middlewares/vehicle_details_validator');
const { validationResult } = require('express-validator');

router.post("/registration", vehicleDataValidator, function (req, res) {

    // Extracts the validation errors of an express request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.array());

        const formattedErrors = [];
        errors.array().map(err => formattedErrors.push({ [err.path]: err.msg }));
        // errors.array().map(err => formattedErrors.push({ [err.msg]: err.path }));
        //console.log(formattedErrors);

        return res.status(422).json({
            success: false,
            errors: formattedErrors
        });
    }


    let { OwnerName, ContactNumber, VehicleModel, RegistrationNumber, VehicleColor } = req.body;

    console.log(`RegistrationNumber : ${RegistrationNumber}, VehicleModel : ${VehicleModel}, VehicleColor : ${VehicleColor}, OwnerName : ${OwnerName}, ContactNumber : ${ContactNumber}`);

    res.send({ success: true });
});

module.exports = router;