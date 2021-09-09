# Speer Technologies Backend Assessment
In this repository you will find backend apis for user registration and user login.

### How to run the app
* Clone the repository using **git clone https://github.com/adamitdeka/SpeerAssessment**
* Now in terminal run **cd type _path to the cloned folder_**
* Now run **npm install**. This will install all requried dependencies and store it in *node_modules* folder.
* Now run **nodemon server.js**. This will start the server.
* Now since there is no user interface to use the app you will have to run the the apis in postman.
    
    **endpoints of the APIs for this app are as follows:**
    * http://localhost:5500/api/signup
    * http://localhost:5500/api/login

    **Try using the following data to send a post request**
    *Note: In postman select body->raw->from the dropdown select JSON*
    * {username: "AmitDeka", Password: "isHiredTrue"}

**Server will send an error in following cases:**
* Username is already taken. 
* Password string has less than 8 characters.
* Username or password is wrong.

------------- END --------------------------
