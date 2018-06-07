var mongoose = require('mongoose');
var backendSchema = mongoose.Schema;

var backend = new backendSchema({
    projectname: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true}

});


module.exports = mongoose.model('Backend', backend);