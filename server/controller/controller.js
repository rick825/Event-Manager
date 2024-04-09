const { Userdb, Eventdb } = require('../models/model');
const bcrypt = require("bcrypt");
const session = {};

const hashPassword = async (password) => {
    if (!password) {
      throw new Error('Password is required');
    }
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };

exports.signup = async (req,res) => {
  try {
    console.log("Signup Page");
    console.log("Request Body: ", req.body);
    const { fname, lname, mobilenumber, email, password, cpassword } = req.body;
    const lowercaseUser = email.toLowerCase(); 
    console.log("Form Data:", {
        fname,
        lname,
        mobilenumber,
        email:lowercaseUser,
        password,
        cpassword
      });

    if (password !== cpassword) {
      console.log("Password not matching");
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new Userdb({
      fname,
      lname,
      mobilenumber,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log('User Saved Successfully');
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error while signing up:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.login = async (req,res)=>{
  try{

    console.log("Login Page");

     const  {email, password} = req.body;
    const lowercaseUser = email.toLowerCase(); 
    req.session.useremail = lowercaseUser;
    console.log(lowercaseUser);
    const user = await Userdb.findOne({ email: lowercaseUser });
     if(user){
      const passwordMatched = await bcrypt.compare(password, user.password);

      if (passwordMatched) {
        req.session.userid = user._id
         console.log(req.session.userid, "->loggedin");;
         res.status(200).json(user._id)
       } else {
      console.log("Password wrong");
      res.status(401).send("Kindly Enter correct password");
     }
  } else {
    console.log("no user found");
    return res.status(401);
  }

  }catch(error){
    console.log("Error while login:->",error);
    req.status(500).send(`Error while Login:->`,error);
  }
}


exports.postevent = async(req,res)=>{
  try {
       
       const {name ,category ,location, date, startTime, endTime, description, attendees} = req.body;
    
       const organizerId = req.session.userid;
       const organizer = await  Userdb.findById(organizerId);

       console.log(organizer.fname +" "+ organizer.lname);
     
       console.log("Organizer id in postevent",organizerId);
       const newEvent = new Eventdb({
        name: name,
        category: category,
        location: location,
        date: date,
        startTime: startTime,
        endTime: endTime,
        description: description,
        organizer: organizerId,
        organizerName: organizer.fname +" "+ organizer.lname,
        attendees: attendees,
       });
       
   
       await newEvent.save();
       console.log("Event Saved Succefully",newEvent);

       organizer.myevents.push(newEvent._id);
       await organizer.save();
       console.log("Event added to organizer's document");
       res.status(200).send({ status: true, msg: "Event created successfully" });
    
  } catch (error) {
    console.log(`Error in posting event -> ${error}`);
    res.status(500).send({ status: false, msg:"Server Error"})
  }
}


//deleteEvent
exports.deleteEvent = async (req,res) =>{
  try {
    const eventId = req.params.id;

    const deletedEvent = await Eventdb.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    const  organizer = await Userdb.findOne({_id : deletedEvent.organizer});
    let index= organizer.myevents.indexOf(eventId);
    organizer.myevents.splice(index,1);
    await organizer.save();

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.log(`Error in deleting event -> ${error}`);
    res.status(400);
  }
}

//Join Event
exports.joinEvent = async (req, res) => {
  try {

    const eventId = req.params.id;
    const userId =  req.session.userid;
    console.log(eventId);

    const event = await  Eventdb.findById(eventId);
    const user = await Userdb.findById(userId);
    //Checking whether the user is already joined or not
    if (event.joined.includes(user._id)) {
        return res.status(409).json({ error: 'User already Joined' })
    }
   
    event.joined.push(user._id);
    user.eventsjoined.push(event._id);

    event.save();
    user.save();

    res.status(200).json({message: `You Have Successfully Joined to ${event.name}`});
  } catch (error) {
    console.log({ error });
    res.send(401).json({message:"Error While  Joining The Event!"});
  }
}

//leave event
exports.leaveEvent = async (req, res) => {
  try {
    const eventId = req.params.eventid;
    const userId = req.params.userid;

    const event = await Eventdb.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const indexOfUser = event.joined.indexOf(userId);
    if (indexOfUser === -1) {
      return res.status(409).json({ message: 'You are not a member of this Event.' });
    }

    event.joined.splice(indexOfUser, 1);
    const user = await Userdb.findByIdAndUpdate(userId, { $pull: { eventsjoined: eventId } }, { new: true });
    await event.save();
    await user.save();

    res.status(200).json({ message: 'Successfully left the event' });
  } catch (error) {
    console.error('Error while leaving the event:', error);
    res.status(500).json({ error: 'Error while leaving the event' });
  }
};



//logout
exports.logout = async(req,res)=>{
  try {
    req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ message: 'Server Error' });
      }
      res.status(200).json({ message: 'Logged out successfully' });
    });
  } catch (error) {
    console.log({error:'Error while Logout'});
  }
}