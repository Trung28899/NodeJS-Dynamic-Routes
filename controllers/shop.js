/*
  THIS CONTROLLER WILL BE IMPORTED IN ./routes/ file
*/

const Product = require("../models/product");

// click Products > '/products'
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    // rendering ./views/shop/product-list.ejs
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

// click Products > '/products/productId'
exports.getProduct = (req, res, next) => {
  const prodID = req.params.productId;
  Product.findById(prodID, (product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

// main page > "/"
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    // rendering ./views/shop/index.ejs
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

// click Cart > "/cart" => GET
exports.getCart = (req, res, next) => {
  // rendering ./views/shop/cart.ejs
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

// click Cart > "/cart" => POST
exports.postCard = (req, res, next) => {
  /*
    productId is the field on the hidden input
    in product-detail.ejs
  */
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect("/cart");
};

// click Orders > "/orders"
exports.getOrders = (req, res, next) => {
  // rendering ./views/shop/orders.ejs
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

// "/checkout"
exports.getCheckout = (req, res, next) => {
  // rendering ./views/shop/checkout.ejs
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
