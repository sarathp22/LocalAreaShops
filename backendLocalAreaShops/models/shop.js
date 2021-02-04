var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    shopname: {
        type:String,
        required: true,
    },
    gstno: {
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
        
    },
    usertype:   {
        type: Number,
        default: 1
    },
    status:   {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

var Shops = mongoose.model('Shop', shopSchema);

module.exports = Shops;

