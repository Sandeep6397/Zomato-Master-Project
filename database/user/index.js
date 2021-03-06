import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {type: String, required:true},
    email:{type: String, required:true},
    password:{type: String},
    address:[{detail: {type: String}, for: {type: String}} ],
    phoneNumber:[{type: Number}],
},
{
    timestamps:true,  // createdAt And updatedAt
},
);

export const UserModel = mongoose.model("Users", userSchema);
