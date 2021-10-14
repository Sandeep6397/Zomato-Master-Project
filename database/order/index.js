import { mongoose } from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type:mongoose.Types.ObjectId,
        ref:"Users",
    },
    orderDetails:[
        {
            food: {
                type:mongoose.Types.ObjectId,
                ref:"Foods",
            },
            quantity:{
                type:Number,
                required:true,
                
            },
            paymode:{
                type:String,
                required:true
            },
            status: {
                type: String,
                default:"Placed",
            },
            paymentDetails: {
                itemTootal:{
                    type:Number,
                    required:true,
                },
                promo:{ //discounted amount
                    type:Number,
                    required:true,
                },
                tax:{
                    type:Number,
                    required:true,
                },  
            },
        },
    ],
    orderratings:{
        type:Number,
        required:true,
    },

},
{
    timestamps:true,  // createdAt And updatedAt
},);

export const OrderModel = mongoose.model("Orders", orderSchema);