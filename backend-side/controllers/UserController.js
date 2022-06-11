const express= require('express');
const lodash = require('lodash');
const User = require('../models/UserModel');
const HashPassword = require('../utilities/hashPass');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs')
dotenv.config();
const Register = async (req,res)=>{
    try{
    const checkUser= await User.findOne({email : req.body.email});
    if(checkUser){
        res.status(401).send('User already exists please');
    }
    const user_register = await User(lodash.pick(req.body,['username','email','password']));
    let hashpassword = await HashPassword(user_register.password);
    user_register.password = hashpassword;
    const finalUser = await user_register.save();
    res.status(200).json({success:"ok",register: finalUser});
}catch(error){
    res.status(400);
    throw new Error(error.message);
}
}
const LoginNow = async (req,res) =>{
    try{
        const check_User = await User.findOne({email : req.body.email});
        if(!check_User){
            res.status(401);
            res.send('User Does not exist')
        }
        const validPassword = await bcrypt.compare(req.body.password,check_User.password);
        if(!validPassword) {
            res.status(401);
            res.send('password wrong');
        }
        const user_token = await jwt.sign({id:check_User.id},process.env.secret_key,{expiresIn: '24h'});
        res.status(200).json({success : "ok",content: check_User})
    }catch(error){
        res.status(400)
        throw new Error(error.message);
    }
}
module.exports = {Register,LoginNow}