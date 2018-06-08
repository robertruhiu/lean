var mongoose = require('mongoose');
var User = require('./user');
var profileSchema = mongoose.Schema({
    user:{type:String,required:true},
    username:{type:String,required:true},
    company:{type:String,required:true},
    position:{type:String,required:true}

});



module.exports = mongoose.model('Profile', profileSchema);