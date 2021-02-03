var express = require('express');
var Adminrouter = express.Router();
var Shops = require('../models/shop');
var TokenCheck = require('../models/tokenCheck');
var TokenData = require('../models/tokenData');

Adminrouter.route('/owners')
.get(function(req, res, next) {
//   res.send("Hai");
    Shops.find({status:false}).then((shops)=>{
        res.send(shops);
    },
    (err)=> next(err))
    .catch((err)=> next(err))

});

Adminrouter.route('/:shopownerId')
.get(function(req, res, next) {

    Shops.findByIdAndUpdate( req.params.shopownerId, {$set:{status:true}}).then((shop)=>{

        //logic
        TokenCheck.create({owner:req.params.shopownerId}).then((shoptoken)=>{
            
            TokenData.create({owner:req.params.shopownerId}).then((shopData)=>{
                res.send("approved successfully");
            },
            (err)=> next(err))
            .catch((err)=> next(err));
        },
        (err)=> next(err))
        .catch((err)=> next(err))
    },
    (err)=> next(err))
    .catch((err)=> next(err))

  });

module.exports = Adminrouter;