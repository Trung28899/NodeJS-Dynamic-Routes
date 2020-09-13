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

// click Cart > "/cart"
exports.getCart = (req, res, next) => {
  // rendering ./views/shop/cart.ejs
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
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