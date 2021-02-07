var express = require('express');
var userRouter = express.Router();
var Users = require('../models/user');
var Shops = require('../models/shop');
var TokenCheck = require('../models/tokenCheck');
var TokenData = require('../models/tokenData');
var Token = require('../models/token');
var WorkingHours = require('../models/workingHours');

userRouter.route('/')
/* GET users listing. */
.get(function(req, res, next) {
  res.send('respond with a resource');
});
userRouter.route('/signup')
.post((req,res,next)=>{
//   console.log(req.body);
  // res.send('registered');
  Users.findOne({email:req.body.email},(err,userdata)=>{

    if(userdata)
    {
        console.log("Email already registered");
        res.send("Email already registered");
    }
    else
    {
        Users.create(req.body).then((user)=> {
            console.log('User registered' , user);
            res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
    }

  })

  
});


userRouter.route('/getWork/:id')
.get((req,res,next)=>{
    console.log("Hai")
    WorkingHours.findOne({shopId:req.params.id}).then((t)=>{
        console.log(t);
        res.send(t)
    },(err)=> next(err)
    ).catch((err)=> next(err))

})



userRouter.route('/login')
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
              res.status(200).send({"token":user._id,"usertype":user.usertype,"name":user.name,"phone":user.phone,"email":user.email});
          }
      }
  }
})
})


userRouter.route('/getTokenList/:id')
.get((req,res,next)=>{

    Token.find({userId:req.params.id}).then((t1)=>
    {res.send(t1)},(err)=>{next(err)})
    .catch((err) => next(err));

});


userRouter.route('/getShops/:categoryId')
.get((req,res,next)=>{
    console.log(req.params.categoryId);
    Shops.find({category:req.params.categoryId}).then((shops)=>
    {res.send(shops)},(err)=>{next(err)})
    .catch((err) => next(err));
})

userRouter.route('/tokenRequest/:ownerId')
.post((req,res,next)=>{

    //add logic to increment time slot first time => copy same code below or check temp1 console done

    TokenCheck.findOne({owner:req.params.ownerId}).then((token)=>{
        console.log(token);
        if( token.tokenCount.length == 0)
        {
            token.tokenCount.push({date:req.body.date,t7:0,t8:0,t9:0,t10:0,t11:0,t12:0,t13:0,t14:0,t15:0,t16:0,t17:0,t18:0,t19:0,t20:0,t21:0,})
            token.save().then((temp1)=>{
                console.log(temp1)

               
                token.tokenCount.forEach(element => {

                    if(element.date == req.body.date)
                    {
                        // token limit


                        if(element[req.body.slot] < 5)
                        {
                            element[req.body.slot] = element[req.body.slot] + 1;
                            token.save().then((temp1)=>{
                                console.log(temp1);
                            }
                            , (err) => next(err));
                            return;
                        }

                    }
                    
                });




            }
            , (err) => next(err));


            // test code begins

            TokenData.findOne({owner:req.params.ownerId}).then((tokendata)=>{
                // {date:req.body.date,t7:[],t8:[],t9:[],t10:[],t11:[],t12:[],t13:[],t14:[],t15:[],t16:[],t17:[],t18:[],t19:[],t20:[],t21:[]}
                // {date:req.body.date,t7:null,t8:null,t9:null,t10:null,t11:null,t12:null,t13:null,t14:null,t15:null,t16:null,t17:null,t18:null,t19:null,t20:[],t21:null}

                tokendata.tokenData.push({date:req.body.date,t7:[],t8:[],t9:[],t10:[],t11:[],t12:[],t13:[],t14:[],t15:[],t16:[],t17:[],t18:[],t19:[],t20:[],t21:[]})
                tokendata.save().then((temp1)=>{
                    console.log(temp1);
                    tokendata.tokenData.forEach(element => {

                        if(element.date == req.body.date)
                        { 
                            //code below not tested

                            Token.create({userId:req.body.userId,slot:req.body.slot,date:req.body.date})
                            .then((t)=>{
                                
                            }
                            , (err) => next(err));

                            //token count not checking here
                            
                                element[req.body.slot].push({userId:req.body.userId,userName:req.body.userName,phone:req.body.phone})
                                tokendata.save().then((temp2)=>{
                                    console.log(temp2);
                                    res.status(200).send("token approved");
                                }
                                , (err) => next(err));
                                return;
                            
        
                        }
                        
                    });
                
            },
             (err) => next(err));




            });

            // test code ends
    

        }

        else
        {
            TokenCheck.findOne({owner:req.params.ownerId}).then((token)=>{

                token.tokenCount.forEach(element => {

                    // include if  statement with token limit

                    if(element.date == req.body.date)
                    {
                        if(element[req.body.slot] < 5)
                        {
                            element[req.body.slot] = element[req.body.slot] + 1;
                            token.save().then((temp1)=>{
                                console.log(temp1);

                                TokenData.findOne({owner:req.params.ownerId}).then((tokendata)=>{
                                    tokendata.tokenData.forEach(element => {

                                        if(element.date == req.body.date)
                                        {

                                                Token.create({userId:req.body.userId,slot:req.body.slot,date:req.body.date})
                                                .then((t)=>{
                                                    
                                                }
                                                , (err) => next(err));

                                                element[req.body.slot].push({userId:req.body.userId,userName:req.body.userName,phone:req.body.phone})
                                                tokendata.save().then((temp2)=>{
                                                    console.log(temp2);
                                                    res.status(200).send("token approved")
                                                }
                                                , (err) => next(err));
                                                return;
                                            
                        
                                        }
                                        
                                    });

                                });




                            }

                            // bracket here
                            , (err) => next(err));
                            return;
                        }
                                            else
                                            {
                                                res.status(401).send("Please try another time slot");
                                            }
                        
                    }






                    

                        else
                        {  
                            var temp = false;
                            token.tokenCount.forEach(element => {

                                if(element.date == req.body.date)
                                {
                                    temp = true; 
                                    return;
                                }

                                })

                                if( temp == false)
                                {
            
                                    token.tokenCount.push({date:req.body.date,t7:0,t8:0,t9:0,t10:0,t11:0,t12:0,t13:0,t14:0,t15:0,t16:0,t17:0,t18:0,t19:0,t20:0,t21:0,})
                                    token.save().then((temp1)=>{
                                        console.log(temp1)
                        
                                    
                                        token.tokenCount.forEach(element => {
                        
                                            if(element.date == req.body.date)
                                            {
                                                // token limit
                        
                                                if(element[req.body.slot] < 5)
                                                {
                                                    element[req.body.slot] = element[req.body.slot] + 1;
                                                    token.save().then((temp1)=>{
                                                        console.log(temp1);
                                                    }
                                                    , (err) => next(err));
                                                    return;
                                                }
                        
                                            }
                                            
                                        });
                        
                        
                        
                        
                                    }
                                    , (err) => next(err));
                        
                        
                                    // test code begins
                        
                                    TokenData.findOne({owner:req.params.ownerId}).then((tokendata1)=>{
                                        // {date:req.body.date,t7:[],t8:[],t9:[],t10:[],t11:[],t12:[],t13:[],t14:[],t15:[],t16:[],t17:[],t18:[],t19:[],t20:[],t21:[]}
                                        // {date:req.body.date,t7:null,t8:null,t9:null,t10:null,t11:null,t12:null,t13:null,t14:null,t15:null,t16:null,t17:null,t18:null,t19:null,t20:[],t21:null}
                        
                                        tokendata1.tokenData.push({date:req.body.date,t7:[],t8:[],t9:[],t10:[],t11:[],t12:[],t13:[],t14:[],t15:[],t16:[],t17:[],t18:[],t19:[],t20:[],t21:[]})
                                        tokendata1.save().then((temp2)=>{
                                            console.log(temp2);
                                            tokendata1.tokenData.forEach(element => {
                        
                                                if(element.date == req.body.date)
                                                {

                                                    //code below not tested

                                                        Token.create({userId:req.body.userId,slot:req.body.slot,date:req.body.date})
                                                        .then((t)=>{
                                                            
                                                        }
                                                        , (err) => next(err));
                                                    
                                                    //token count not checking here

                                                        element[req.body.slot].push({userId:req.body.userId,userName:req.body.userName,phone:req.body.phone})
                                                        tokendata1.save().then((temp3)=>{
                                                            console.log(temp3);
                                                            res.send("token approved");
                                                        }
                                                        , (err) => next(err));
                                                        return;
                                                    
                                
                                                }
                                                
                                            });
                                        
                                    },
                                    (err) => next(err));
                        
                        
                        
                        
                                });
                                }

                                // else{

                                // }
                            
                        }
                    
                });

            });
        }

    })
    .catch((err) => next(err));

})


module.exports = userRouter;
