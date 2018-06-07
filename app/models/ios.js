var mongoose = require('mongoose');
var iosSchema = mongoose.Schema;

var ios = new iosSchema({
    projectname: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true}

});


module.exports = mongoose.model('Ios', ios);