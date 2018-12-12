const mongoose = require('mongoose');
	const personSchema = new mongoose.Schema({

		fname:{
			type:String,
		//	minlength:3
			// required:true
    },
    lname:{
			type:String,
			//minlength:3,
			// required:true
		},
		friends:[
      {
        type:String
      }
    ],
		father:{
      type: mongoose.Types.ObjectId,
        ref:'father'
    }
	});

// create Class to aceess the database

	const Persons = mongoose.model('person',personSchema);

	exports.Persons=Persons;
	