const express = require("express");
const PinData = require("../models/PinModel");
const lodash = require("lodash");
const axios = require("axios")
const fetch = require("node-fetch");
const AddNewPin = async (req, res) => {
  try {
    const objbody = req.body
    const NewPin = await PinData.create({
      _id: objbody.id,
      user_pin_maker : req.user.id,
      link: objbody.link,
      title : objbody.title,
      description : objbody.description,
      dominant_color : objbody.dominant_color || objbody.color,
      alt_text : objbody.alt_description,
      board_id : objbody.board_id,
      likes:objbody.likes 
    });
    const finalSavedPin = await NewPin.save();
    res.json({ success: "ok", addedPin: finalSavedPin });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
const getPinAll = async (req, res) => {
  try {
    const AllPin = await PinData.find({});
    if (!AllPin) {
      res.send("No Pins in the database");
    }
    res.json({ success: "ok", Pin: AllPin });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
const getPinEach = async (req, res) => {
  try {
    const pin_each = await PinData.findById(req.params.pin_id);
    if (!pin_each) {
      res.send("Piin not okay");
    }
    res.json({ success: "ok", Pin: pin_each });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
const deletePin = async (req, res) => {
  try {
    const pin_delete = await PinData.findByIdandDelete(req.params.pin_id);
    if (!pin_delete) {
      res.send("Pin not deleted");
    }
    res.json({ success: "ok", Pin: pin_delete });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
const UpdatePin = async (req, res) => {
  try {
    const [link, description] = req.body;
    const pin_update = await PinData.findByIdAndUpdate(
      req.params.pin_id,
      { link: link, description: description },
      { new: true }
    );
    if (!pin_update) {
      res.send("Pin not updated");
    }
    res.json({ success: "ok", Pin: pin_update });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};
module.exports = { AddNewPin, getPinAll, getPinEach, deletePin, UpdatePin };
