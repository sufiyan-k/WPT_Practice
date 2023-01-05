var express=require("express");
var app=express();
var path=require("path")
var bodyparser=require("body-parser")
var routes=require("./routes/routers")
var mongoose=require("mongoose");


//assigning nodejs promise to mongodb promise object
mongoose.Promise=global.Promise;

//connecting to mongodb
var url="mongodb://0.0.0.0:27017/test";

mongoose.connect(url,{
    connectTimeoutMS:1000
},function(err,result){
    if(err){
        console.log("error connecting");
    }
    else{
        console.log("connection done with database");
    }
}
);

//define middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//defining all routes
app.use("/",routes);

//start the server
app.listen(4000);
console.log("server started at port 4000");

module.exports=app;