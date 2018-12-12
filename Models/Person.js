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
// Joi validation function containing Schema to varify or check

	// function validateCustomers(customerDetail){


	// 	const schemaOfCustomer={
	// 		name:Joi.string().min(3).required(),
			
	// 	};

	// 	return Joi.validate(customerDetail, schemaOfCustomer);
	// }    


	exports.Persons=Persons;
	// exports.validate=validateCustomers;