import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    menus: [{
        name: {type:String, required:true},
        items:[{
            type:mongoose.Types.ObjectId,
            ref:"Foods",
        },],
    }],
    recommended:[{
        type:mongoose.Types.ObjectId,
        ref:"Foods",
        unique:true, //no repeated food
    }]
},
{
    timestamps:true,  // createdAt And updatedAt
},);



export const MenuModel = mongoose.model("Menu", menuSchema);

