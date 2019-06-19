const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var MongoClient=require("mongodb").MongoClient;
var db;
MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
	if(err) 
		throw err;
	db = client.db('testdb');
	console.log(db);
	db.collection("grade").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    //db.close();
});
	console.log('success');
});

//app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,function(){
	console.log('listening on 3000')
	console.log(__dirname);
})
// app.get('/',(req,res)=>{
// 	res.sendFile(__dirname+'/index.html')
// 	})
app.post('/quotes',(req,res) => {
		//console.log("recieved the files")
		console.log(req.body);
})
