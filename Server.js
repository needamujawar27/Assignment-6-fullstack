const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const sumsungsModel=require("./model/sumsungsModel");
const redmiesModel=require("./model/redmiesModel");
const oneplusModel=require("./model/oneplusModel");
const vivoModel=require("./model/vivoModel");
const app=express();
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mobile")
.then(()=>{
    console.log("MongoDB is connected!!")
});

app.get("/allsumsungs",async(req,res)=>{
    const result=await sumsungsModel.find({});
    res.json(result)
});

app.get("/allredmies",async(req,res)=>{
    const result=await redmiesModel.find({});
    res.json(result)
});

app.get("/alloneplus",async(req,res)=>{
    const result=await oneplusModel.find({});
    res.json(result)
});

app.get("/allvivo",async(req,res)=>{
    const result=await vivoModel.find({});
    res.json(result)
})


app.listen(3050,()=>{
    console.log("API is runinng port number 3050")
})