const express=require('express');
const router=express.Router();
const userControl=require('../controller/user_controller');
router.post('/register',userControl.registerUser);
router.post('/login',userControl.loginUser)

module.exports=router;