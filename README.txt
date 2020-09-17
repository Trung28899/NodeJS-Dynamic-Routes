I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0

II. Core Concepts: 
    1. Dynamic Routes: 
        - Means that the URL contains some dynamic parameters 
        (such as: product id, etc...) and we can retrieve that
        parameters to render our page accordingly 
        
        example of dynamic routes:
            localhost:3000/products/:productId like:    
                http://localhost:3000/products/123
                http://localhost:3000/products/456

    2. Query Parameters:     
        - Query Parameters: 
            For example: 
                localhost:3000/admin/edit-product/123?edit=true
            > edit is a query parameter that has value "true"

                localhost:3000/admin/edit-product/123?edit=true&edit2=false
            > edit and edit2 are query parameters
        
        - Accessing parameters: 
            for the above example, we can use: 
                +, req.query.edit
                +, req.query.edit2
            in the middleware

III. Module Notes: 
    1. Adding and Retrieving Params in Dynamic Routes: 
        - Code in 2nd Commit
        - How to use: hit Products > hit "Details" of any product
            > will return id in console and redirect to shop 
        
        a. Adding Params in Dynamic Routes: 
            - ./models/product.js: added field id under 
                save() method
            - .views/shop/product-list.ejs: added a "Details"
                button (<a> tag) that use the product.id to 
                add the params to dynamic route
        
        b. Retrieving Params in Dynamic Routes: 
            - ./routes/shop.js: how to render dynamic routes
            - ./controller/shop.js: under getProduct(): This
                is how we retrieve params in dynamic routes
    
    2. Rendering Product Details View and Passing Data with POST Requests: 
        a. Loading Data with Params:
            - 3rd Commit
            - ./models/product.js: see findById() for logic 
                of loading item by id (params on dynamic routes)
            - ./controllers/shop.js: see getProduct() to see how 
                to render product details page
        
        b. Passing Data with POST Requests: 
            - 4th Commit
            - ./routes/shop.js: added post rendering for /cart route
            - ./controllers/shop: added post hanlder for /cart route
                see postCard() 
            - POST request triggered by any "Add To Cart" button
                all triggered in ./includes/add-to-cart.ejs
                included in: product-details.ejs, product-listing.ejs
                    and index.ejs
    
    3. Adding a Cart Model:
        - 5th Commit: 
        - ./data/cart.json: originally have to set to { "products": [], "totalPrice": 0 }
            for it to work
        - ./models/cart.js: returning Cart class that contains 
            method addProduct() to read and add item to cart 
            from ./data/cart.json
        - ./controller/shop.js under postCard(): Adding an item 
            for every post request to /cart route. Triggered by 
            hitting any "Add to Cart" button

    NOTE: in this module, had to change: 
        - package.json: start script to "nodemon app.js --ignore data/"
            instead of "node app.js"
            > This solve issue of not rendering css files after redirected
            from post request to /cart

    4. Using Query Parameters and Rendering Editing Information: 
        a. Using Query Parameters: 
            - 6th Commit
            - ./routes/admin.js: added a route hanlder for
                "/edit-product/:productId"
            - ./controller/admin.js: rendering the the route
                for edit product under getEditProduct()
            
            NOTE THAT: right now we hit Admin Products > 
            Click "Edit" button > page not found will be rendered
            be cause the route will be 'admin/edit-product'

            we only added a route for 'admin/edit-product/?productId'
            in ./routes/admin.js

            The good route should be something like this: 
            http://localhost:3000/admin/edit-product/456?edit=true

            with 456 is a parameter and edit is a query params

        b. Rendering Edit Page: 
            - 7th Commit
            - Compare ./routes/admin.js and ./controller/admin.js 
            of 6th and 7th Commits
            - See views/admin/edit-product.ejs for rendered page
    
    5. Application Improvements: 
        - 8th commit: Able to edit products in "Admin Products" > Edit
            See admin.js in controllers and routes, see product.js for
            product class, see edit-product.ejs in views
        - 9 Commit: delete products and delete product in cart with
            the deleted product




IV. Other Notes: 
    This module contain: 
        - Passing Route Params
        - Using Query Params
        - Enhance our Models
        