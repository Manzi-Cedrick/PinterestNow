const express = require('express');
const mongoose = require('mongoose');

const ChatConvoSchema = new mongoose.Schema({
    convoName : {type: String},
    members : {
        type : Array,
        required: true
    }
},{
    timestamps :true
})
const ChatConvo = mongoose.model('ChatConversation',ChatConvoSchema);
module.exports = ChatConvo;