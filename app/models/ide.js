var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var IdeuserSchema = mongoose.Schema({
    ide: {
        username: String,
        password: String
    }
});

IdeuserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

IdeuserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.ide.password);
};

module.exports = mongoose.model('IdeUser', IdeuserSchema);