const express = require("express");
const path = require('path');
const route = express.Router();
const multer = require('multer');
const controller = require("../controller/controller");
const { Userdb,Eventdb } = require('../models/model');

// multer configuration
//When using memory storage with Multer, 
// you don't need to define a separate storage configuration
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       console.log("Fiile dest->",file);
//       cb(null, '../uploads');
//     },
//     filename: function (req, file, cb) {
//       console.log("file->",file);
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
  
  const upload = multer({
    storage: multer.memoryStorage(), 
    fileFilter: (req, file, cb) => {
      const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Only PNG, JPG, and JPEG file types are allowed'));
      }
    }
  });
  

route.get('/api/getevents',async (req, res) => {
  console.log("Get");
  try {
      console.log("Get Events");
      const events = await Eventdb.find();

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
    
       let  myEvents= [];
       for(var i = 0; i < User.myevents.length; i++){
           const  myEventIds = User.myevents[i];
           const   Event =   await Eventdb.findOne({"_id": myEventIds});
           if (Event) {
            myEvents.push(Event);
        }
        }

        if (myEvents.length > 0) {
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
            res.status(200).json(JoinedEvents);
        } else {
            res.status(200).json({ message: 'No Events Joined' });
        }
    } catch (error) {
        console.log('Error in get Joined events ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.get('/api/getUserData/:id', async  (req, res) => {
    let userID=req.params.id;
    const user = await Userdb.findById(userID);
    //Checking whether the user exists
    if(!user){
        return res.status(401).send("User not Found");
    }

    res.status(200).json(user);
});


//add photo
  route.post('/api/uploadPhoto', upload.single('profile'), async (req, res) => {
    console.log("running");
    try {
        console.log("running");
        if (!req.file) {
          console.error('Error uploading image: No file uploaded');
          return res.status(400).json({ error: 'No file uploaded' });
        }
    
        const userId = req.body.UserId; 
        console.log('User Id ->', userId);
        console.log('User Photo ->', req.file);
    
        const user = await Userdb.findById(userId);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Update user profile with uploaded image data
        user.profile = {
          data: req.file.buffer, 
          contentType: req.file.mimetype 
        };
    
        await user.save();
        console.log('File uploaded successfully:', req.file);
    
        res.status(200).json({ message: 'File uploaded successfully', filePath: req.file.path });
      } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Internal server error' });
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