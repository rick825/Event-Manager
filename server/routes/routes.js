const express = require("express");
const path = require('path');
const route = express.Router();
const controller = require("../controller/controller");
const { Eventdb } = require('../models/model');


route.get('/api/getevents',async (req, res) => {
  console.log("Get");
  try {
      console.log("Get Events");
      const events = await Eventdb.find();
      console.log(events);

     
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');

      res.status(200).json(events);
  } catch (error) {
      console.log("Error while getting events-->", error);
      res.status(500).json(`${Error}: Error while getting events`);
  }
});


route.get('/api',(req,res)=>{
  res.json("Hello");
})



route.post('/api/postevent',controller.postevent);
route.post('/api/signup',controller.signup);
route.post('/api/login',controller.login);


module.exports = route;