

const dbconn=require("./config/dbconn");

module.exports.handler = (event, context, callback) => {
  
  context.callbackWaitsForEmptyEventLoop = false;



  console.log('event: ', event);


  dbconn.connectToDatabase(dbconn.MONGODB_URI)
  .then(client => dbconn.queryDatabase(client,event))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};

