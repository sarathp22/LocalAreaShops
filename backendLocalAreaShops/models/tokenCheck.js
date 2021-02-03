var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var countSchema = new Schema ({
    date: {
        type:String,
        required: true,
    },
    limit: {
        type: Number,
        required: false
    },
    t7: {
        type:Number,
        default: 0
    },
    t8: {
        type:Number,
        default: 0
    },
    t9: {
        type:Number,
        default: 0
    },
    t10: {
        type:Number,
        default: 0
    },
    t11: {
        type:Number,
        default: 0
    },
    t12: {
        type:Number,
        default: 0
    },
    t13: {
        type:Number,
        default: 0
    },
    t14: {
        type:Number,
        default: 0
    },
    t15: {
        type:Number,
        default: 0
    },
    t16: {
        type:Number,
        default: 0
    },
    t17: {
        type:Number,
        default: 0
    },
    t18: {
        type:Number,
        default: 0
    },
    t19: {
        type:Number,
        default: 0
    },
    t20: {
        type:Number,
        default: 0
    },
    t21: {
        type:Number,
        default: 0
    }


});


var tokenCheckSchema  = new Schema({

    owner: {
        type:String,
        required: true,
    },
    tokenCount:[countSchema],



},
{
    timestamps: true
})

var tokenChecks = mongoose.model('tokenChecks', tokenCheckSchema);

module.exports = tokenChecks;