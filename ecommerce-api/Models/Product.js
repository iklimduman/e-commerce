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
            type : Array 
        },
        color : {
            type : Array 
        },
        price : {
            type : Number ,
            required : true
        },
        inStock : {
            type : Boolean , 
            default : true
        },
        point : {
            type : Number ,
            default : 5
        }
    },
    { 
        timestamps : true // it will create createdAt and updatedAt attributes
    }
);

// what do you export : Product , what is the model for user : productSchema
module.exports = mongoose.model("Product" , productSchema) ;