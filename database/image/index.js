import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    images: [
        {
            location: {type:String, required:true},

        },
    ],
});

export const imageModel = mongoose.model("Images", ImageSchema)
