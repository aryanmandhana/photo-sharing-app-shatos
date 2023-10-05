const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pic:{type:String,required:true,default:"user.png"},
    password:{type:String,required:true,minlength:10},
    locationsid:[{type:moongoose.Types.objectId, required:true, ref:"Location"}]
});

module.exports=mongoose.model("User",userSchema);