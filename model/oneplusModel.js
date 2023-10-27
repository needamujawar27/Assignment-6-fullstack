const mongoose=require("mongoose");

const oneplusModel=mongoose.model("oneplus",{
    name:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String}
});
module.exports=oneplusModel