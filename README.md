# MergerApi: 
  API that merge the dublicate data and preserve one and delete rest.

#Project
This build using Node Js , Express and MongoDB

#Working: Use Postman to verify the endpoints:
1.api url : http://localhost:8000/api/person/create  Method: POST
   create the person document in the collection
   properties are:
   fname:"pintu"
   lname:"rana"
   friends:['Pintu','nidhi']
   father: "ObjectId"// contain unique father id 

2 api url :http://localhost:8000/api/person/merge  Method: POST
  Input:
  personOne:"id" // id to be deleted
  personTwo:"id" // id to be reserved

  Output:
  merge personTwo documet and delete the personOne document from DB
  Or
  No merging is required

3 api url :http://localhost:8000/api/person/       Method:GET
  it return all the document in db;

4 api url :http://localhost:8000/api/father/add     Method: POST
  input:
  fname:"Ramesh",
  lname:"Rana"

//