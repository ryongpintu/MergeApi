
const mongoose = require('mongoose');
const fatherSchema = new mongoose.Schema({

  fname:{
    type:String,
  //	minlength:3
    // required:true
  },
  lname:{
    type:String,
    //minlength:3,
    // required:true
  }
});

const Father = mongoose.model('father',fatherSchema);

exports.Father=Father;