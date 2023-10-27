const mongoose=require("mongoose");

const vivoModel=mongoose.model("vivos",{
    name:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String}
});
module.exports=vivoModel
