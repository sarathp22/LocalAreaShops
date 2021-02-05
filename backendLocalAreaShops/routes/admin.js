var express = require('express');
var Adminrouter = express.Router();
var Shops = require('../models/shop');
var TokenCheck = require('../models/tokenCheck');
var TokenData = require('../models/tokenData');
var Users = require('../models/user');


Adminrouter.route('/login')
.post((req,res,next)=>{
    console.log()
Users.findOne({email:req.body.email},(err,user)=>{
  if(err)
  {
      console.log(err);
  }
  else{
        if(!user)
        {
            res.status(401).send("Invalid email");
        }
      else{
          if(user.password != req.body.password)
          {
            res.status(401).send("Invalid password");
          }
          else{
      //         let payload = {subject:user._id};
      // let token=jwt.sign(payload, 'secretKey');
      // res.status(200).send({token});
              // res.status(200).send(user);
            //   console.log(user);
              res.status(200).send({"token":user._id,"usertype":user.usertype,"name":user.name,"phone":user.phone,"email":user.email});
          }
      }
  }
})
})


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