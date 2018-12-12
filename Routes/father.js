const express= require('express');
const {Father} = require('../Models/Father');
const router = express.Router();


router.get('/',async(req,res)=>{
    const fatherData= await Father.find()
    res.send(fatherData)
    
  });
  

router.post('/add',async(req,res)=>{
  const data ={
    fname:req.body.fname,
    lname:req.body.lname
    }

  const father = new Father(data)
  await father.save();
  res.send(father);
})

module.exports=router;