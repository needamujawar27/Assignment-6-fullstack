const mongoose=require("mongoose");

const redmiesModel=mongoose.model("redmies",{
    name:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String}
});
module.exports=redmiesModel;