const express = require('express');
const mongoose = require('mongoose');

const ChatConvoSchema = new mongoose.Schema({
    convoName : {type: String},
    members : [{
        type : mongoose.Schema.Types.ObjectId,ref : "User"
    }]
},{
    timestamps :true
})
const ChatConvo = mongoose.model('ChatConversation',ChatConvoSchema);
module.exports = ChatConvo;