var express=require("express");
var path=require("path");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();

//design a model using mongoose schema
var empschema=new schema({
    empid:String,
    ename:{type:String,trim:true,required:true},
    sal:String
})

var Emp=mongoose.model('emptab',empschema,'emptab');

router.get("/employee",function(req,resp){
    Emp.find().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found")
        }
        else{
            resp.send(data);
        }
    })
});
router.post("/employee", function(req,resp){
    var empob=new Emp({empid:req.body.empid, ename:req.body.ename, sal:req.body.sal});
    empob.save(function(err,data){
        if(err){
            resp.status(500).send("no data added");
        }
        else{
            resp.send(data);
        }
    })
});

router.put("/employee/:empid",function(req,resp){
    console.log(req.body);
    Emp.findOne({empid:req.body.empid},function(err,doc){
        if(err){
            resp.status(500).send("no data updated");
        }
        else{
            console.log("in else")
            //doc.empid=req.body.empid;
            doc.ename=req.body.ename;
            doc.sal=req.body.sal;
            doc.save(function(err,data){
                if(err){
                    console.log(err);
                    resp.status(500).send("no data updated");
                }
                else{
                    resp.send(data)
                }
                
            })
        }
       
    })
});


module.exports=router;