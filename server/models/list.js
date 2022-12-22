const mongoose = require('mongoose'); 

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },

    content:{
        type:Array,
        required: true,
        unique:true,
    },

    
},{timestamps:true});


module.exports = mongoose.model('lists', listSchema);
