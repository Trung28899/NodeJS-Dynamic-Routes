const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

// Handling Edit-Product
exports.getEditProduct = (req, res, next) => {
  /*
    Getting query parameters
    For example: with route

    http://localhost:3000/admin/edit-product/123?edit=true
    we have editMode = true

    if not mentioned, editMode = undefined
  */
  const editMode = req.query.edit;
  /*
    if editMode is not true, redirect to shop 
    For example: routes like this will get redirected
    to shop

    http://localhost:3000/admin/edit-product/123
  */
  if (!editMode) {
    return res.redirect("/");
  }
  /*
    else render the product form
    For example: routes like this will render 
    the ./views/admin/edit-product.ejs

    localhost:3000/admin/edit-product/123?edit=true
  */
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
    editing: editMode,
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
