const express= require('express');
const lodash = require('lodash');
const Messages = require('../models/MessageModel');

const AddNewMessage = async (req, res)=>{
    const newMessage = new Messages(req.body);
    try{
        const finalMessage = await newMessage.save();
        res.status(200).json({success : "ok" , message : finalMessage});
    }catch(error){
        res.status(400).send("New Message not created")
        throw new Error(error.message);
    }
}
//fetch Messages in a convo
const GetMessage = async (req, res)=>{
    
}