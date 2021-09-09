//importing dependencies
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';


const app = express();
const __dirname = path.resolve();
//connecting to database
mongoose.connect('mongodb://localhost:27017/speerDB').then(console.log('Database Connected'));

//middlewares
app.use('/',express.static(path.join(__dirname,'static')));
app.use(express.json());    

//router middleware
app.use('/api',userRouter);

//listening for request at port 5500
app.listen(5500, ()=>{
    console.log("Server listening at port:5500");
});
