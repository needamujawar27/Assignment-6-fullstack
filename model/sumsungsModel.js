const mongoose=require("mongoose");

const sumsungsModel=mongoose.model("sumsungs",{
    name:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String}
});
module.exports=sumsungsModel;