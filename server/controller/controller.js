const { Userdb } = require('../models/model');
const bcrypt = require("bcrypt");

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
     const user = await Userdb.findOne({email:email});
     if(user){
      const passwordMatched = await bcrypt.compare(password, user.password);

      if (passwordMatched) {
         console.log(user._id, "->loggedin");;
         res.status(200).json({ message: 'User Loggedin successfully' })
       } else {
      console.log("Password wrong");
      res.status(401).send("Kindly Enter correct password");
     }
  } else {
    console.log("no user found");
  }

  }catch(error){
    console.log("Error while login:->",error);
    req.status(500).send(`Error while Login:->`,error);
  }
}