//importing dependencies
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../model/user.js';

//creating class for all user related apis
export default class User{
    jwtSecret = 'bashbv86sd87v2qkbe@#@#%@qhevc801234kksdhbb#@$';

    //User register method
    signup = async(req, res)=>{
        //reciving post data 
        const {username, password:pwd} = req.body;
        //checking if username is valid
        if(typeof username !== 'string'){
            return res.json({
                status: 'error',
                error: 'Username Invalid'
            })
        }
        //checking length and validity of password
        if(!pwd || typeof pwd !== 'string' || pwd.length < 8){
            return res.json({
                status: 'error',
                error: 'Password must be of atleast 8 characters'
            })
        }
        //hasing the password
        const password = await bcrypt.hash(pwd, 15);
        //making database query to register a user
        try{
            const result = await userModel.create({username, password})
            if(result){
                res.json({
                    status: "ok",
                    message: "Registration Successful"
                })
            }
        }
        catch(err){
            //checking if the username is already taken
            if(err.code === 11000){
                res.json({
                    status: 'error',
                    message: 'Username taken'
                })
            }
        }
    }
    //User login method
    login = async(req, res)=>{
        //receiving user data
        const {username, password} = req.body;
        //Finding the user using username. 
        const result = await userModel.findOne({username});
        if(!result){
            res.json({
                status: 'error',
                message: 'Username or Password is wrong'
            })
        }
        //checking if the received password is matching with the hashed password
        if(await bcrypt.compare(password, result.password)){
            const token = jwt.sign({
                id: result.id,
                username: result.username
            },this.jwtSecret);
            res.json({status: 'ok', data:token, message: 'Login Successful'});
        }
        else{
            res.json({
                status: 'error',
                message: 'Username or Password is wrong'
            })
        }
    }

}







