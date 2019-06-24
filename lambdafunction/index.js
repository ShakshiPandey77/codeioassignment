

const dbconn=require("./config/dbconn");//to get databaes connection

module.exports.handler = (event, context, callback) => {
console.log(event.branchcode);
console.log(event.branchname);
  context.callbackWaitsForEmptyEventLoop = false;



  console.log('event: ', event);


  dbconn.connectToDatabase(dbconn.MONGODB_URI)//connecting db
  .then(client => dbconn.queryDatabase(client,event))//sending event
    .then(result => {
      console.log('=> returning result: ', result);//getting result
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};
