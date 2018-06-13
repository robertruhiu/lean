var mongoose = require('mongoose');
var fullstackSchema = mongoose.Schema;

var fullstack = new fullstackSchema({
    imagePath:{type: String, required: true},
    projectname: {type: String, required: true},
    type: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true},
    basic1:{type: String, required: true},
    basic2:{type: String, required: true},
    basic3:{type: String, required: true},
    basic4:{type: String, required: true},
    advanced1:{type:String, required: true},
    advanced2:{type:String, required: true}


});


module.exports = mongoose.model('Fullstack', fullstack);