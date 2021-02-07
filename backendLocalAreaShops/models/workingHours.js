var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var workingHoursSchema = new Schema({
    shopId: {
        type:String,
        required: true,
    },
    sunopen:{type:String,default:null},
    sunclose:{type:String,default:null},
    sunflag:{type:Boolean,default:true},
    monopen:{type:String,default:null},
    monclose:{type:String,default:null},
    monflag:{type:Boolean,default:true},
    tueopen:{type:String,default:null},
    tueclose:{type:String,default:null},
    tueflag:{type:Boolean,default:true},
    wedopen:{type:String,default:null},
    wedclose:{type:String,default:null},
    wedflag:{type:Boolean,default:true},
    thuopen:{type:String,default:null},
    thuclose:{type:String,default:null},
    thurflag:{type:Boolean,default:true},
    friopen:{type:String,default:null},
    friclose:{type:String,default:null},
    friflag:{type:Boolean,default:true},
    satopen:{type:String,default:null},
    satclose:{type:String,default:null},
    satflag:{type:Boolean,default:true},

},{
    timestamps: true
})

var WorkingHours = mongoose.model('WorkingHour', workingHoursSchema);

module.exports = WorkingHours;

