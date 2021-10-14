import { Mongoose } from "mongoose";

const foodSchema = new Mongoose.Schema({
    name: {type:String , required: true},
    descript : {type:String, required:true},
    isVeg:{type:Boolean, required:true},
    isContinsEgg:{type:Boolean, required:true},
    category: {type: String, required:true},
    photos:{
        type:Mongoose.Types.ObjectId,   //connecting the connection 
        ref:"Images",
    },
    price:{type:Number, default:150, required:true },
    addOns:[{
        type:Mongoose.Types.ObjectId,
        ref:"Foods"
    }],
    restaurant: {
        type:Mongoose.Types.ObjectId,
        ref:"Restaurants",
        required:true,
    }
},
{
    timestamps:true,  // createdAt And updatedAt
},);

export const FoodModle = Mongoose.model("Foods", foodSchema);