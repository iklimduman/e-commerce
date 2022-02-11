const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        img : {
            type: String,
            required: true
        },
        categories : {
             type : Array
        },
        size : {
            type : String 
        },
        color : {
            type : String 
        },
        price : {
            type : Number ,
            required : true
        }
    },
    { 
        timestamps : true // it will create createdAt and updatedAt attributes
    }
);

// what do you export : Product , what is the model for user : productSchema
module.exports = mongoose.model("Product" , productSchema) ;