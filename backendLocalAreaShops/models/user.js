var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        
    },
    usertype:   {
        type: Number,
        required: true,
    }
},{
    timestamps: true
})

var Users = mongoose.model('User', userSchema);

module.exports = Users;

