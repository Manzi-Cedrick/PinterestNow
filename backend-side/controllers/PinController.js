const express= require('express');
const PinData = require('../models/PinModel');
const lodash = require('lodash');
const AddNewPin =async (req,res)=>{
    try{
    const NewPin =  await PinData(lodash(req.body,['link','title','description','dominant_color','alt_text','board_id',['source-type','content-type','data']]));
    const finalSavedPin = NewPin.save((err)=>{
        if(err) return res.send('Error while Saving the pin',err) .status(400);
    });
    res.json({success:"ok", Pin:finalSavedPin});
    if(!finalSavedPin){
        res.send("Unauthorized");
    }
}catch(error){
    res.status(400);
    throw new Error(error.message);
}
}
const getPinAll = async (req,res)=>{
    try{
    const AllPin =  await PinData({});
    res.json({success:"ok",Pin:AllPin});
    if (!AllPin) {
        res.send("No Pins in the database");
    }
}catch(error){
    res.status(400);
    throw new Error(error.message);
}
}
const getPinEach = async (req,res)=>{
    try{
    const pin_each = await PinData.findById(req.params.pin_id);
    res.json({success:"ok",Pin:pin_each});
    if (!pin_each) {
        res.send("Piin not okay");
    }
}catch(error){
    res.status(400);
    throw new Error(error.message);
}
}
const deletePin = async (req,res)=>{
    try{
    const pin_delete = await PinData.findByIdandDelete(req.params.pin_id);
    res.json({success:"ok",Pin:pin_delete});
    if (!pin_delete) {
        res.send("Pin not deleted");
    }
}catch(error){
    res.status(400);
    throw new Error(error.message);
}
}
const UpdatePin = async (req,res)=>{
    try{
    const [link,description] = req.body
    const pin_update = await PinData.findByIdandUpdate(req.params.pin_id,{link : link, description : description},{new : true});
    res.json({success:"ok",Pin: pin_update});
    if (!pin_update) {
        res.send("Pin not updated");
    }
}catch(error){
    res.status(400);
    throw new Error(error.message);
}
}
module.exports ={AddNewPin,getPinAll,getPinEach,deletePin,UpdatePin};