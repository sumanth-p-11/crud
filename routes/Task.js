const express=require('express');
const route=express.Router();
const Task=require('./../models/Tasks');

route.get('/add-task',(req,res)=>{
    res.render('add-task');
})

route.post("/add-task",(req,res)=>{
    //console.log(req.body.title); 
    var errors=[];
    if(!req.body.title){
        errors.push({msg:"Title is Required!!!"}); 
    }
    if(!req.body.description){
        errors.push({msg:"Description is Required!!!"}); 
    }

    if(errors.length!=0){
        const obj={
            errors:errors,
            title:req.body.title,
            description:req.body.description,
        }
        res.render("add-task", obj);
    }else{
        let newTask=new Task({
            title:req.body.title,
            description:req.body.description,
            date:Date.now(),
        })
        newTask.save()
        .then(()=>{
            console.log("Data Inserted Successfully!!!");
        })
        .catch(err=>{
            console.log(err);
        })
        res.redirect("/add-task");
    }
})


route.get("/view-task",(req,res)=>{
    Task.find({}).lean()
    .then(response=>{
       // console.log(response);
        res.render("view-task", {task:response});
    })
    .catch(err=>{
        console.log(err);
    })
    
})

module.exports=route;