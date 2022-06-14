const express = require('express');
const lodash = require('lodash');
const ChatConvo = require('../models/ConvoModel');
//create new conversation
const CreateConvo = async (req, res) => {
    const newConvo = new ChatConvo({
        convoName: req.body.convoName,
        members: [req.user.Id, req.body.receiverId]
    })
    try {
        const finalsavedChat = await newConvo.save();
        res.status(200).json({ success: "ok", message: finalsavedChat })
    } catch (error) {
        res.status(400).send("New Chat Not Created")
        throw new Error(error.message);
    }
}
const GetConvo = async (req, res) => {
    try {
        const convoGet = await ChatConvo.find({
            members: { $in: req.params.userId }
        })
        res.status(200).json({ success: "ok", message: convoGet })
    } catch (error) {
        res.status(400).send("Conversation retrieving failed");
        throw new Error(error.message);
    }
}
const UpdateConvo = async (req, res) => {
    const updatedConvo = new ChatConvo.findByIdandUpdate(req.params.conversationId, {
        chatName: req.body.chatName
    }, { new: true });
    try {
        const updateChatConvo = await updatedConvo.save();
        res.status(200).json({ success: "ok", message: updateChatConvo })
    } catch (error) {
        res.status(400).send("Chat Not Updated")
        throw new Error(error.message);
    }
}
const DeleteConvo = async (req, res) => {
    try {
        await ChatConvo.findByIdAndRemove(req.params.conversationId);
        res.status(200).json({ success: "ok", message: "Message successfully deleted"  })
    } catch (error) {
        res.status(400).send("Message Not Deleted")
        throw new Error(error.message);
    }
}
module.exports = { GetConvo, CreateConvo, UpdateConvo , DeleteConvo};