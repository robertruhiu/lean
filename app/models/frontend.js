var mongoose = require('mongoose');
var frontendSchema = mongoose.Schema;

var frontend = new frontendSchema({
    projectname: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true}

});


module.exports = mongoose.model('Frontend', frontend);