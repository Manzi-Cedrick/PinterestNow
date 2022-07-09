const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')
const AuthorizeUser = async (req, res, next) => {
    if(req.headers['authorization'] || req.headers['authorization'].startWith('Bearer ')){
        try{
            const token = req.headers['authorization'].split(" ")[1];
            console.log(token);
            const decodedInfo = await jwt.decode(token,process.env.secret_key);
            req.user = await User.findById(decodedInfo.id);
            next()
        }catch(error){
            res.status(400);
            throw new Error(error.message);
        }
    };
}
module.exports = AuthorizeUser;