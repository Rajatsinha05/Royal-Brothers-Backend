const mongoose = require('mongoose');


const userSchema =new mongoose.Schema({


    name:{type:"string",required:"true"},
    email:{type:"string",required:"true"},
    password:{type:"string",required:"true"},
    cart:Array,
    rentBike:Array
})


const User = mongoose.model('User',userSchema);

module.exports = User;
