/*
  THIS CONTROLLER WILL BE IMPORTED IN ./routes/ file
*/

const Product = require("../models/product");
const Cart = require("../models/cart");

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
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductsData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (cartProductsData) {
          cartProducts.push({
            productData: product,
            qty: cartProductsData.qty,
          });
        }
      }

      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      });
    });
  });
};

// click Cart > "/cart" => POST
exports.postCard = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect("/cart");
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
