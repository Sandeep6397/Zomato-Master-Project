import express from "express";
// hashing library
import bcrypt from "bcryptjs";

// Json Web Tokens
import jwt from "jsonwebtoken";
//Models
import {UserModel} from "../../database/user";

const Router = express.Router();

/*
Route       : /signup
description : Signup with enail and password
params      : None
Access      :Public
Method      :Post
*/

Router.post("/signup", async(req, res) => {
    try{
        const {email, password, fullname, phoneNumber} = req.body.creadentials;
        //check wether email exits in databse
        const checkUserByEmail = await UserModel.findone({email});
        const checkUserByPhone = await UserModel.findone({phoneNumber});
        if(checkUserByEmail || checkUserByPhone){
            return res.json({error:"User already exist!"})
        }
        // hash the pa ssword
        const bcryptSalt = await bcrypt.genSalt(8);// 8 rounds

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        // save to DB
        await UserModel.create({
            ...req.body.creadentials,
            password:hashedPassword,
        })
        // generate JWT auth token

        const token = jwt.sign({user: {fullname, email}}, "ZomatoAPP");

        //return
        return res.status(200).json({token, status:Success});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})
export default Router;