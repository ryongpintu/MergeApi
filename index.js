const  mongoose = require('mongoose');
const express= require('express');
const person =require('./Routes/person');
const father = require('./Routes/father');
const app = express();

//Connect to db
mongoose.connect("mongodb://localhost/mergePerson", { useNewUrlParser: true } )
  .then(()=>console.log('connected to db'))
  .catch((err)=>console.log('something went wrong'+err));

// Middleware to add body properties in req object
app.use(express.json());

// Routes
app.use('/api/father',father)
app.use('/api/person',person)


const port =process.env.PORT || 8000;
app.listen(port,(res)=>{
  console.log(`listening to port ${port}`)
})