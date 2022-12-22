const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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


module.exports = mongoose.model('User', userSchema);
