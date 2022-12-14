const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },

    desc:{
        type:String,
        required:true,
    },

    genre:{
        type:String,
        required:true,
    },

    isSeries:{
        type:Boolean,
        default:false
    },

    poster:{
        type:String,
        required:true,
    },

    movie:{
        type:String,
        required: true,
        // unique:true,
        
    },

    trailer:{
        type:String,
        required: true,
        // unique:true,   
    },
    agelimit:{
        type:String,
        required: true,
    },
    
},{timestamps:true});

//Export the model
module.exports = mongoose.model('movies', movieSchema);