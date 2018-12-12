# MergerApi: 
  API that merge the dublicate data and preserve one and delete rest.

#Project
This build using Node Js , Express and MongoDB

#Working: Use Postman to verify the endpoints:

Database is already created in the Mlab site:-

run the server on localhost and then check the endpoint on Postman:

1 Method: POST :http://localhost:8000/api/father/add

  input:
  fname:"Ramesh",
  lname:"Rana"

2.Method: POST http://localhost:8000/api/person/create

   Input:-------------

   fname:"pintu"
   lname:"rana"
   friends:['Pintu','nidhi']
   father: "ObjectId"// mongoose unique id  that will be available once you create the father data in db using above enpoint
   -----------------
3  Method: POST :http://localhost:8000/api/person/merge

  Input:-------------
  Input: take ObjectId form db of person collection

  personOne:"ObjectId" // id to be deleted  
  personTwo:"ObjectId" // id to be reserved 

  Output:
  merge personTwo documet and delete the personOne document from DB
  Or
  No merging is required

4 Method:GET :http://localhost:8000/api/person/


  it return all the document in db;



//