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
    
    2. Loading and Rendering Data with Params in Dynamic Routes: 
        a. Loading Data with Params:
            - 3rd Commit
            - ./models/product.js: see findById() for logic 
                of loading item by id (params on dynamic routes)
            - ./controllers/shop.js: see getProduct() to see how 
                to render product details page
        
        b. Rendering Product Views: 
        


IV. Other Notes: 
    This module contain: 
        - Passing Route Params
        - Using Query Params
        - Enhance our Models
        