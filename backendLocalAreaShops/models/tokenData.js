var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    userId: {
        type:String,
        required: true,
    },
    userName: {
        type:String,
        required: true,
    },
    phone: {
        type:Number,
        required: true,
    },
    // timeSlot: {
    //     type:String,
    //     required: true,
    // }
});

var dataSchema = new Schema ({
    date: {
        type:String,
        required: true,
    },
    t7: [userDataSchema],
    t8: [userDataSchema],
    t9: [userDataSchema],
    t10: [userDataSchema],
    t11: [userDataSchema],
    t12: [userDataSchema],
    t13: [userDataSchema],
    t14: [userDataSchema],
    t15: [userDataSchema],
    t16: [userDataSchema],
    t17: [userDataSchema],
    t18: [userDataSchema],
    t19: [userDataSchema],
    t20: [userDataSchema],
    t21: [userDataSchema]

},
{
    timestamps: true
}
);


var tokenDataSchema  = new Schema({

    owner: {
        type:String,
        required: true,
    },
    tokenData:[dataSchema],



},
{
    timestamps: true
})

var tokenDatas = mongoose.model('tokenData', tokenDataSchema);

module.exports = tokenDatas;