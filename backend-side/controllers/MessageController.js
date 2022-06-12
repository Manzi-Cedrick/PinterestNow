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
    try{
        const MessagesAll = await Messages.find({chatConvoId : req.params.chatConvoId})
        const MessagesRetrieve = await MessagesAll.save();
        res.status(200).json({success : "ok" , message : MessagesRetrieve});
    }catch(error){
        res.status(400).send("Messages retrieving failed");
        throw new Error(error.message);
    }
}
const DeleteMessage = async (req,res )=>{
    try{
        await Messages.findByIdAndRemove(req.params.MessagesId);
        res.status(200).json({success : "ok" , message : "Message Successfully deleted"})
    }catch(error){
        res.status(400).send("Messages deleting failed");
        throw new Error(error.message);
    }
}
const UpdateMessage = async (req,res)=>{
    try{
        const MessageUpdated = await Messages.findByIdAndUpdate(req.params.MessagesId,{content : req.body.newContent},{new : true})
        res.status(200).json({success : "ok" , message : MessageUpdated})
    }catch(error){
        res.status(400).send("Messages updating failed");
        throw new Error(error.message);
    }
}
module.exports = { AddNewMessage,GetMessage,DeleteMessage,UpdateMessage};