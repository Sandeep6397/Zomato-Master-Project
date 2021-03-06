import { mongoose } from "mongoose";

const reviewSchema = mongoose.Schema({
    food:{type: mongoose.Types.ObjectId, ref:"Foods"},
    restaurants:{type: mongoose.Types.ObjectId, ref:"Restaurants"},
    user:{type: mongoose.Types.ObjectId, ref:"Users"},
    ratings:{type:Number, required:true},
    reviewText:{type:String, required:true},
    photos:[{
        type:mongoose.Types.ObjectId,
        ref:"Images",
    }], 
});

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);
