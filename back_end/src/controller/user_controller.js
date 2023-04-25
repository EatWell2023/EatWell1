const { response } = require('express');
const Register=require('../models/register');

// const Jwt = require('jsonwebtoken');
// const jwtkey = 'e-comm';


module.exports.registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const currentUser=await Register.findOne({email});
        if(!currentUser){

    const newUser=await Register.create({
        name,email,password
    })
    if(!newUser){
        return res.status(501).json({
            message:"Error in saving"
        })
    }
    // Jwt.sign({newUser},jwtkey,(err,token)=>{
    //     res.send({newUser,auth: token})
    //      return res.status(200).json({
    //          message:"User Registered Successfuly",
    //          data:newUser
    //      })
    //  })
    return res.status(200).json({
        message:"User Registered Successfully",
        data:newUser
    })
    }else{
        console.log("U have already registered on our website please login to continue");
        return res.status(301).json({
            message:"Please Login to continue",
        })
    }

    } catch (error) {
        return res.status(501).json({
            message:"Internal Server Error",
        })
    }
}
module.exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const currentUser=await Register.findOne({email});
        if(!currentUser){
            return res.status(301).json({
                message:"User Not Found, please register to continue",
            })
        }else{
            if(password===currentUser.password){
                // Jwt.sign({currentUser},jwtkey,{expiresIn: "1h"},(err,token)=>{
                //    res.send({currentUser,auth: token})
                //     return res.status(200).json({
                //         message:"Login Successfull",
                //     })
                // })
                return res.status(200).json({
                    message:"Login Successfull",
                })
            }else{
                return res.status(301).json({
                    message:"Invalid email or password",
                })
            }
        }
        
    } catch (error) {
        return res.status(501).json({
            message:"Internal Server Error",
        })
    }
}