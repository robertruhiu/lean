var mongoose = require('mongoose');
var androidSchema = mongoose.Schema;

var android = new androidSchema({
    projectname: {type: String, required: true},
    concept: {type: String, required: true},
    description:{type: String, required: true}

});


module.exports = mongoose.model('Android', android);