var mongoose = require('mongoose');
var iosSchema = mongoose.Schema;

var ios = new iosSchema({
    imagePath: {type: String, required: true},
    projectname: {type: String, required: true},
    type: {type: String, required: true},
    concept: {type: String, required: true},
    description: {type: String, required: true},
    basic1: {type: String, required: true},
    basic2: {type: String, required: true},
    basic3: {type: String, required: true},
    basic4: {type: String, required: true},
    advanced1: {type: String, required: true},
    advanced2: {type: String, required: true},
    language: {type: String, required: true},
    framework: {type: String, required: true},
    database: {type: String, required: true},
    vcs: {type: String, required: true},
    time: {type: String, required: true}

});


module.exports = mongoose.model('Ios', ios);