const express= require('express');
const {Persons} = require('../Models/Person');


const router = express.Router();


router.get('/',async(req,res)=>{
  const personData= await Persons.find()
          .populate('father')
        
          res.send(personData)
    
  });
  


router.post('/create',async(req,res)=>{
  

  const data ={
    fname:req.body.fname,
    lname:req.body.lname,
    friends:req.body.friends,
    father:req.body.userId,
     
  }
  const person = new Persons(data)
  await person.save();
  res.send(person);

});

// Merge person

router.post('/merge',async(req,res)=>{
  
  const personOne = await Persons.findById(req.body.personOne);
	const personTwo  = await Persons.findById(req.body.personTwo);
	if(!personOne && !personTwo) return res.status(400).send('Invalid personIds');
  if(personTwo.fname && 
     personTwo.lname &&
     personTwo.father &&
     personTwo.friends
     ) return res.send("No Merging is required !!");

  if(!personTwo.fname){
    personTwo.fname=personOne.fname
  }
  if(!personTwo.lname){
    personTwo.lname=personOne.lname
  }
  if(!personTwo.father){
    personTwo.father=personOne.father
  }
  if(!personTwo.friends){
    personTwo.fname=personOne.fname

   

  }else{
    personOne.friends.forEach(name => {

      if(!(personTwo.friends.includes(name)) ){
        personTwo.friends.push(name)
      }
      
    });
  }

  await personTwo.save();
  await Persons.deleteOne({_id:personOne._id})
  res.send("Delted personOne and Data is merged to personTwo")

 
  

});

module.exports=router