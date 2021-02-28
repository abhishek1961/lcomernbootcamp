const express=require('express')
const router=express.Router()
const {check,validationResult}=require('express-validator')
const {signout,signup,signin,isSignedin}=require('../controllers/auth')


router.post('/signup',[
    //this array contains express validation rules
    check("name","name should be at least 3 char").isLength({min:3}),
    check("email","email is required").isEmail(),
    check("password","password should be at least 3 char").isLength({min:3})
],signup)

router.post('/signin',[
    //this array contains express validation rules    
    check("email","email is required").isEmail(),
    check("password","password field is required").isLength({min:3})
],signin)


router.get('/signout',signout)

router.get('/testroute',isSignedin,(req,res)=>{
    res.json(req.auth)
})


module.exports=router;