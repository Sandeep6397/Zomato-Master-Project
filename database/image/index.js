import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    images: [
        {
            location: {type:String, required:true},

        },
    ],
},
{
    timestamps:true,  // createdAt And updatedAt
},
);

export const ImageModel = mongoose.model("Images", ImageSchema)

