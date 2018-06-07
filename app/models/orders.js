var mongoose = require('mongoose');
var orderSchema = mongoose.Schema;

var order = new orderSchema({
    cart:{type:Object,required:true},
    address:{type:String,required:true},
    username:{type:String,required:true}

});

module.exports = mongoose.model('Order', order);