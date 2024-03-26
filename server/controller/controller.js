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
    
    console.log("Form Data:", {
        fname,
        lname,
        mobilenumber,
        email,
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
    console.log(email);
    const lowercaseUser = email.toLowerCase(); 
    req.session.useremail = lowercaseUser;
    const user = await Userdb.findOne({ email: lowercaseUser });
     if(user){
      const passwordMatched = await bcrypt.compare(password, user.password);

      if (passwordMatched) {
        req.session.userid = user._id
         console.log(req.session.userid, "->loggedin");;
         res.status(200).json({ message: 'User Loggedin successfully' })
       } else {
      console.log("Password wrong");
      res.status(401).send("Kindly Enter correct password");
     }
  } else {
    console.log("no user found");
    return res.status(401).redirect("/signup");
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
        attendees: attendees,
       });
   
       await newEvent.save();
       console.log("Event Saved Succefully",newEvent);
       res.status(200).send({ status: true, msg: "Event created successfully" });
    
  } catch (error) {
    console.log(`Error in posting event -> ${error}`);
    res.status(500).send({ status: false, msg:"Server Error"})
  }
}