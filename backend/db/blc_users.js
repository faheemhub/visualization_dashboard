const mongoose = require('mongoose');
const blcUserSch = mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String
});
module.exports = mongoose.model('blc_users', blcUserSch);