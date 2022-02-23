const express=require('express');
const dotenv=require('dotenv');

const app=express();
dotenv.config();
//for post data to work add below two lines
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(function(req, res, next){
    console.log("A am a middleware");
    next();
});

app.get('/',function(req,res){
    console.log("get method");
    res.send("Test Nodemon");
});

app.get('/second',function(req,res){
    res.send("I am second");
});

app.get('/sayHello/:fname?',function(req,res){
    res.send("Hello "+req.params.fname);
});

app.use(function(req, res, next){
    console.log("I am a second middleware");
    next();
});

app.get('/sayName/:fname&:lname',function(req,res){
    res.send("Hello "+req.params.fname+ " "+req.params.lname);
});

app.post('/wholeName',function(req,res){
    res.send(req.body);
    console.log(req.body);
});

//const port=3000;
app.listen(process.env.PORT);