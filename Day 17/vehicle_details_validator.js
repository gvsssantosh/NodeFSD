const { body } = require('express-validator');

const vehicleDataValidate = [
    body("Owner Name")
        .exists({ checkFalsy: true })
        .withMessage("Owner Name is required"),
    body("Contact Number")
        .exists({ checkFalsy: true })
        //.isLength({ min: 10, max: 10 })
        .matches(/^\d{10}$/)
        .withMessage("Contact Number should be 10 characters"),


    body('Vehicle Model')
        .exists({ checkFalsy: true })
        .withMessage("Vehicle Model is required"),

    body('Registration Number')
        .exists({ checkFalsy: true })
        .isString().matches(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/)
        .withMessage("Registration Number is required, for eg: TS09EA1234"),

    body('Vehicle Color')
        .exists({ checkFalsy: true })
        .withMessage("Vehicle Color is required"),
];


module.exports = vehicleDataValidate;