var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var projectSchema = mongoose.Schema;

var project = new projectSchema({
    user:{type:Schema.Types.ObjectId,ref:'User'},
    cart:{type:Object,required:true}



});

module.exports = mongoose.model('Project', project);