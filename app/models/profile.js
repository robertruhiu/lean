var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var profileSchema = mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:'User'},
    username:{type:String,required:true},
    company:{type:String,required:true},
    position:{type:String,required:true}


});



module.exports = mongoose.model('Profile', profileSchema);