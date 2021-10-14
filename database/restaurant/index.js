import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name:{type:String , required:true},
    city:{type:String, required:true},
    address:{type:String, required:true},
    mapLocation:{type:String, required:true},
    cuisine:[String],
    restaurantTiming:String,
    ContactNumber: Number,
    website: String,
    popularDishes:[String],
    averageCost:Number,
    amenities: [String],
    menuImages:{
        type:mongoose.Types.ObjectId,
        ref:"Images",
    },
    menu:{
        type:mongoose.Types.ObjectId,
        ref:"Menus",
    },
    reviews:{
        type:[{type:mongoose.Types.ObjectId,ref:"reviews"}],
        photos:{type:mongoose.Types.ObjectId,ref:"Images"},
    },


},
{
    timestamps:true,  // createdAt And updatedAt
},
);



export const RestaurantModel = mongoose.model("Restaurants", restaurantSchema);

