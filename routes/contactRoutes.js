const express=require("express");
const router=express.Router();
const {insertCustomer,insertProducts,insertOrder} = require("../controllers/insertingData");

router.route('/customer').post(insertCustomer);
router.route('/product').post(insertProducts);
router.route('/order').post(insertOrder);


module.exports = router;