const express = require('express');
const jwt = require('jsonwebtoken');
const AuthorizeUser = async (req, res, next) => {
    if(req.headers.get('Authorization') || req.headers.authorization.startWith('Bearer ')){
        try{
            const token = req.headers.authorization.split(" ")[1];
            const decodedInfo = await jwt.decode(token,process.env.secret_key);
            req.user = await User.findById(decodedInfo.id);
            next()
            res.send('AUTHORIZATION SUCCESSFUL');
        }catch(error){
            res.status(400);
            throw new Error(error.message);
        }
    };
}
module.exports = AuthorizeUser;