# MA BOUTIQUE

# STEPS

1. Create React App.

2. Create Git Repository.

3. List Products.

   a. Create product array.
   b. Add product images.
   c. render products.
   d. Style products.

4. Add Routing.

   a. npm install react-router-dom.
   b. Create Route for Home Screen.
   c. Create Router for Product screen.

5. Creat Node.JS Server.

   a. run npm init in root folder.
   b. Update package.json set type: module.
   c. Add .js ti imports.
   d. npm install express.
   e. Create server.js.
   f. Add start command as node backend/server.js.
   g. require express.
   h. Create Route for / return backend is ready.
   i. Move products.js from frontend tobackend.
   j. Create Route for /api/products.
   k. Return products.
   l. run npm start.

6. Fetch Products From Backend.

   a. Set proxy in package.json.
   b. npm install axios.
   c. use state hook.
   d. use effect hook.
   e. use reducer hook.

7. Manage State by Reducer hook.

   a. Define Reducer.
   b. Update Fetch Data.
   c. Get state from usReducer.

8. Step 8.

9. Add Footer & Hero Components.

10. Step 10.

11. Create Product and Rating Component.

a. Create rating component.
b. Create product component.
c. Use rating component in product component.

12. Create Product details screen.

a. Fetch product from backend.
b. Create 3 columns for image, infos and actions.

13. Create loading and message component
    a. create loading component
    b. use spinner component
    c. create message component
    d. create utils.js to define getError function

14. Implement Ajouter au panier
    a. Create react context
    b. definer reducer
    c. create store provider
    d. implement ajouter au panier button click handler
    e. install Bootstrap

15. Complete Ajouter au panier
    a. Check exist item in the cart
    b. Check count in stock in backend

16. Create Cart Screen
    a. create 2 columns
    b. display item list
    c. create action column

17. Complete cart screen
    a. click handler for inc/dec item
    b. click handler for remove item
    c. click handler for checkout

18. Create Signin Screen
    a. create signin form
    b. add email and password
    c. add signin button

19. Connect to MongoDB Database
    a. create Atlas mongodb
    b. install local mongodb
    c. npm install mongoose
    d. connect to mongodb

20. Seed Sample Data
    a. Create product model
    b. Create user model
    c. Create seed route
    d. Use route in server.js
    e. Seed sample product

21. Seed sample Users
    a. create user model
    b. seed sample users
    c. create user routes

22. Create signin backend API
    a. create signin api
    b. npm install jsonwebtoken
    c. define generateToken

23. Complete Signin screen
    a. handle submit action
    b. save token in store and localStorage
    c. show user name in header
