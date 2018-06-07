var mongoose = require('mongoose');
var devopsSchema = mongoose.Schema;

var devops = new devopsSchema({
    projectname: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true}

});


module.exports = mongoose.model('Devops', devops);