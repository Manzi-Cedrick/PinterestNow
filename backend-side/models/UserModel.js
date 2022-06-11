const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    username : {type:String,required:true} ,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true },
    profile_image:{type:String ,default:''}
})
const User = mongoose.model('User',UserSchema);
module.exports = User;
