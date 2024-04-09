const express = require("express");
const path = require('path');
const route = express.Router();
const controller = require("../controller/controller");
const { Userdb,Eventdb } = require('../models/model');


route.get('/api/getevents',async (req, res) => {
  console.log("Get");
  try {
      console.log("Get Events");
      const events = await Eventdb.find();
      console.log(events);
      
     

      res.status(200).json(events);
  } catch (error) {
      console.log("Error while getting events-->", error);
      res.status(500).json(`${Error}: Error while getting events`);
  }
});


route.get('/api',(req,res)=>{
  res.json("Hello");
})

route.get('/api/getOrganisedEvents/:id', async (req, res)=>{
    try {
       console.log("Get My Events");
       console.log("ID : ", req.params.id);
       const  User =  await  Userdb.findOne({"_id": req.params.id });
       if (!User) {
        return res.status(404).json({ error: "User not found" });
    }
    
    console.log("User Found-->",User);
    console.log("Organised Events",User.myevents);
    
       let  myEvents= [];
       for(var i = 0; i < User.myevents.length; i++){
           const  myEventIds = User.myevents[i];
           const   Event =   await Eventdb.findOne({"_id": myEventIds});
           console.log("Event  is ",Event);
           if (Event) {
            myEvents.push(Event);
        }
        }

        if (myEvents.length > 0) {
            console.log('Organised Events are ', myEvents);
            res.status(200).json(myEvents);
        } else {
            res.status(200).json({ message: 'No Events Organised' });
        }
    } catch (error) {
       console.log("Error while Getting My Events-->", error);
       res.json({Error:"Error While Fetching Your Events " + error});
    }
});


route.get('/api/getJoinedEvents/:id', async (req, res) => {
    try {
        const User = await Userdb.findOne({ "_id": req.params.id });
        console.log("User Found-->", User);
        console.log("Events Joined", User.eventsjoined);
        const JoinedEvents = [];

        for (let i = 0; i < User.eventsjoined.length; i++) {
            const myEventId = User.eventsjoined[i];
            const Event = await Eventdb.findOne({ "_id": myEventId });
            console.log("Event is ", Event);
            if (Event) {
                JoinedEvents.push(Event);
            }
        }

        if (JoinedEvents.length > 0) {
            console.log('Joined Events are ', JoinedEvents);
            res.status(200).json(JoinedEvents);
        } else {
            res.status(200).json({ message: 'No Events Joined' });
        }
    } catch (error) {
        console.log('Error in get Joined events ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});






route.post('/api/postevent',controller.postevent);
route.post('/api/signup',controller.signup);
route.post('/api/login',controller.login);
route.delete('/api/deleteMyEvent/:id',controller.deleteEvent);
route.post('/api/joinEvent/:id',controller.joinEvent);
route.delete('/api/leaveEvent/:eventid/:userid', controller.leaveEvent);
route.post('/api/logout',controller.logout);


module.exports = route;