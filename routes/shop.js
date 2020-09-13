const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

/*
    The colon signals node that this should not signal
    a route but should look for an id

    Then we will access the product Id using this variable 
    (the variable after the colon) - productId

    if you have a specific route like /products/delete, 
    you must put it before the /products/:productID
    or else it will misinterpret the /delete for proudct id
*/
router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
