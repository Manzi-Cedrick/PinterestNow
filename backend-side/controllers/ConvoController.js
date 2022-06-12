const express= require('express');
const lodash = require('lodash');
const ChatConvo = require('../models/ConvoModel');
//create new conversation
const CreateConvo = async (req, res)=>{
    
    const newConvo = new ChatConvo({
        convoName : req.body.convoName,
        members : [req.body.senderId, req.body.receiverId]
    })
    try{
        const finalsavedChat = await newConvo.save();
        res.status(200).json({success : "ok" , message : finalsavedChat})
    }catch(error){
        res.status(400).send("New Chat Not Created")
        throw new Error(error.message);
    }
}
const GetConvo = async (req, res)=>{
    try{
        const convoGet = await ChatConvo.find({
            members : {$in : req.params.userId}
        })
        res.status(200).json({success : "ok" , message : convoGet})
    }catch(error){
        res.status(400).send("Conversation retrieving failed");
        throw new Error(error.message);
    }
}
