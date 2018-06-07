var mongoose = require('mongoose');
var fullstackSchema = mongoose.Schema;

var fullstack = new fullstackSchema({
    projectname: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true}

});


module.exports = mongoose.model('Fullstack', fullstack);