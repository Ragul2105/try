const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password :{
        type : String,
        required : true,
        minLength : 8
    }
})

const User = mongoose.model('user',userSchema);

module.exports = User;