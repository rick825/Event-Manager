const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      startTime: {
        type: String,
        required: true
      },
      endTime: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Userdb',
        required: true
      },
      organizerName:{
        type: String,
        required: true
      },
      attendees: {
        type: Number,
        default: 0
      },
      joined:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Userdb',
      }]
})

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, "First name is required"]
    },
    lname: {
        type: String,
        required: [true, "Last name is required"]
    },
    mobilenumber: {
        type: Number,
        required: [true, "Mobile number is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    myevents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Eventdb'
    }],
    eventsjoined:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Eventdb'
    }]
});

const Userdb = mongoose.model('Userdb',userSchema);
const Eventdb = mongoose.model('Eventdb',eventSchema);
module.exports = {Userdb,Eventdb};