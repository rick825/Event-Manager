const { Userdb } = require('../models/model');
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    if (!password) {
      throw new Error('Password is required');
    }
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };

exports.signup = async (req, res) => {
  try {
    console.log("Signup Page");
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
