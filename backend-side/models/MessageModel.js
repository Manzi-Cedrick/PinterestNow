const express = require('express');
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chatConvoId : {
        type: String,
    },
    sender : {type:String},
    content : {type:String}
},{
    timestamps :true
})
const Messages = mongoose.model('Messages',MessageSchema);
module.exports = Messages;