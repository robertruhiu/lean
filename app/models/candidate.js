var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var candidateSchema = mongoose.Schema({
    candidate: {
        username: String,
        password: String
    }
});

candidateSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

candidateSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.candidate.password);
};

module.exports = mongoose.model('Candidate', candidateSchema);