const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    profilepic:{
        type:String,
        default:''
    },
    password:{
        type:String,
        required:true,
    },
    isadmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true});

//Export the model
module.exports = mongoose.model('User', userSchema);