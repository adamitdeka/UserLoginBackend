//importing dependencies
import mongoose from 'mongoose'

//creating userschema using mongoose
const userSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trim:true
    },
    password: {
        type: String, 
        required: true, 
        trim: true
    }
}, {
    collection: 'user'
})

//creating a model using the usershema above
const userModel = mongoose.model('userSchema', userSchema);
export default userModel;