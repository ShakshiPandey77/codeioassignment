"use strict";
const MongoClient = require('mongodb').MongoClient;
module.exports={MONGODB_URI : require("./config").mongouri}; // or Atlas connection string

let cachedDb = null;

//const branch_name=require("../index").branchname;
//const branch_code=require("../index").branchcode;
console.log("retrived");
module.exports.connectToDatabase=function connectToDatabase (uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> connected to database');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri,{useNewUrlParser:true})
    .then(db => {
      cachedDb = db;
      return cachedDb;
    });
};


module.exports.queryDatabase=function queryDatabase (client,event) {
  console.log('=> query database');
  var dbo=client.db("test");

  return dbo.collection('branch').find({
    $or: [
         {'course.coursename': event.coursename}, {'course.coursecode':event.coursecode}
      ]
  