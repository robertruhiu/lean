var mongoose = require('mongoose');
var devopsSchema = mongoose.Schema;

var devops = new devopsSchema({
    imagePath: {type: String, required: true},
    projectname: {type: String, required: true},
    type: {type: String, required: true},
    concept: {type: String, required: true},
    description: {type: String, required: true},
    basic1: {type: String, required: true},
    basic2: {type: String, required: true},
    basic3: {type: String, required: true},
    constrain1: {type: String, required: true},
    constrain2: {type: String, required: true},
    constrain3: {type: String, required: true},
    constrain4: {type: String, required: true},
    constrain5: {type: String, required: true},
    constrain6: {type: String, required: true},
    constrain7: {type: String, required: true},
    constrain8: {type: String, required: true},
    constrain9: {type: String, required: true},
    constrain10: {type: String, required: true}


});


module.exports = mongoose.model('Devops', devops);