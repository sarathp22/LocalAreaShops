var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
    userId: {
        type:String,
        required: true,
    },
    slot:{
        type:String,
        required: true,
    },
    date: {
        type:String,
        required: true,
    }
},{
    timestamps: true
})

var Tokens = mongoose.model('Token', tokenSchema);

module.exports = Tokens;