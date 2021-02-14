var express = require('express');
var shopRouter = express.Router();
var Shops = require('../models/shop');
var TokenData = require('../models/tokenData');
const WorkingHours = require('../models/workingHours');
var TokenChecks = require('../models/tokenCheck');
// var Workinghours = require('../models/workingHours');

shopRouter.route('/')
/* GET users listing. */
.get(function(req, res, next) {
  res.send('respond with a resource');
});


shopRouter.route('/signup')
.post((req,res,next)=>{
//   console.log(req.body);
//   res.send('registered');

Shops.findOne({email:req.body.email},(err,userdata)=>{
    console.log(req.body);
    if(userdata)
    {
        console.log("Email already registered");
        res.send("Email already registered");
    }
    else
    {
        Shops.create(req.body).then((user)=> {
            console.log('User registered' , user);
            res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
    }

  })

});

shopRouter.route('/login')
.post((req,res,next)=>{
Shops.findOne({email:req.body.email,status:true},(err,user)=>{
  if(err)
  {
      console.log(err);
  }
  else{
      if(!user)
      {
          res.status(401).send('Your registration not approved.Contact admin');
      }
      else{
          if(user.password != req.body.password)
          {
              res.status(401).send('Invalid password');
          }
          else{
              
            res.status(200).send({"token":user._id,"usertype":user.usertype,"name":user.shopname,"phone":user.phone,"email":user.email});

      //         let payload = {subject:user._id};
      // let token=jwt.sign(payload, 'secretKey');
      // res.status(200).send({token});
          }
      }
  }
})
});


shopRouter.route('/deleteToken/:userId/:dateId/:slot/:arrayId/:dateFull')
.delete((req,res,next)=>{
    console.log(req.params.userId);
    TokenData.findOne({owner:req.params.userId}).then((token)=>{
       

        // console.log(tokenData.tokenData.id(req.params.dateId)[req.params.slot].id(req.params.arrayId));

        // tokenData.tokenData[req.params.dateId][req.params.slot][req.params.arrayId].remove();
        token.tokenData.id(req.params.dateId)[req.params.slot].id(req.params.arrayId).remove();
        token.save().then((data)=>{

            TokenChecks.findOne({owner:req.params.userId}).then((tokenCheck)=>{
       
                var index=tokenCheck.tokenCount.map(function(e) { if(e.date == req.params.dateFull){ return e._id; }  })
         
                console.log(index);
                console.log(index[index.length-1]);
         
                 tokenCheck.tokenCount.id(index[index.length-1])[req.params.slot] = tokenCheck.tokenCount.id(index[index.length-1])[req.params.slot] - 1 ;
                 
                 tokenCheck.save().then((data)=>{
                    
                 },
                 (err)=>{ next(err)}
                 )
                 // res.send(tokenData);
             
             },(err)=> next(err)
         
             ).catch((err)=> next(err))

        },
        (err)=>{ next(err)}
        )

    
    },(err)=> next(err)

    ).catch((err)=> next(err));

    



});




shopRouter.route('/:id')
.get((req,res,next)=>{
    Shops.findOne({_id:req.params.id},{status:0,createdAt:0,usertype:0,updatedAt:0}).then((data)=>{
        // console.log(data);
        res.send(data)
    },(err)=> next(err)
    ).catch((err)=> next(err))

})
.put((req,res,next)=>{
    Shops.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{ new: true }).then((data)=>{
        // console.log(data);
        res.send(data)
    },(err)=> next(err)
    ).catch((err)=> next(err))

});


shopRouter.route('/updateWork/:id')
.put((req,res,next)=>{
    console.log("Hai")
    var data = req.body;
    console.log(req.body);
    WorkingHours.findOneAndUpdate({shopId:req.params.id},{$set:{sunopen:data.sunopen,sunclose:data.sunclose,sunflag:data.sunflag,monopen:data.monopen,monclose:data.monclose,tueopen:data.tueopen,tueclose:data.tueclose,wedopen:data.wedopen,wedclose:data.wedclose,thuopen:data.thuopen,thuclose:data.thuclose,friopen:data.friopen,friclose:data.friclose,satopen:data.satopen,satclose:data.satclose,satflag:data.satflag}},{ new: true }).then((t)=>{
        // console.log(t);
        // res.send(t)
    },(err)=> next(err)
    ).catch((err)=> next(err))

});
shopRouter.route('/getWork/:id')
.get((req,res,next)=>{
    console.log("Hai")
    WorkingHours.findOne({shopId:req.params.id}).then((t)=>{
        res.send(t)
    },(err)=> next(err)
    ).catch((err)=> next(err))

});


// shopRouter.route('/tokens/datas/:id')
// .get((req,res,next)=>{
// // console.log(req.params.id);
// TokenData.findOne({owner:req.params.id}).then((data)=>{
//     console.log(data);
//     res.send(data)
// },(err)=> next(err)
// ).catch((err)=> next(err))

// });




shopRouter.route('/tokens/:id')
.get((req,res,next)=>{
// console.log(req.params.id);
TokenData.findOne({owner:req.params.id}).then((data)=>{
    // console.log(data);
    res.send(data)
},(err)=> next(err)
).catch((err)=> next(err))

});

module.exports = shopRouter;
