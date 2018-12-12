const  mongoose = require('mongoose');
const express= require('express');
const app = express();
const {Persons} = require('./Models/Person');
const {Father} = require('./Models/Father');

//Connect to db
mongoose.connect("mongodb://localhost/mergePerson", { useNewUrlParser: true } )
  .then(()=>console.log('connected to db'))
  .catch((err)=>console.log('something went wrong'+err));

// Middleware to add body properties in req object
app.use(express.json());

// Routes

app.get('/api/persons',async(req,res)=>{
const personData= await Persons.find()
        .populate('father')
      
        res.send(personData)
  
});

app.post('/api/father/add',async(req,res)=>{
  const data ={
    fname:req.body.fname,
    lname:req.body.lname
   }
  const father = new Father(data)
  await father.save();
  res.send(father);
})

app.post('/api/person/create',async(req,res)=>{
  

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

app.post('/api/person/merge',async(req,res)=>{
  
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
  const deleteResult =await Persons.deleteOne({_id:personOne._id})
  res.send("Delted personOne ",deleteResult ,"Person two data",personTwo)

 
  

});




const port =process.env.PORT || 8000;
app.listen(port,(res)=>{
  console.log(`listening to port ${port}`)
})