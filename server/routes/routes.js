const express = require("express");
const path = require('path');
const route = express.Router();
const controller = require("../controller/controller");


route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

route.post('/api/signup',controller.signup);
route.post('/api/login',controller.login);


module.exports = route;