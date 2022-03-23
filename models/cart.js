const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({

    userID:{type:String , required :true, unique:true},
    products:[
        {
            productid:{
                type:String
            },

            quantity:{
                type:Number,
                default:1,
            }
        }
    ],
    
},{timestamps:true})

module.exports = mongoose.model("cart",CartSchema)