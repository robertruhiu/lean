var mongoose = require('mongoose');
var projectSchema = mongoose.Schema;

var project = new projectSchema({
    user:{type:String,required:true},
    cart:{type:Object,required:true}



});

module.exports = mongoose.model('Project', project);