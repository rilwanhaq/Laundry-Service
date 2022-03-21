const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bodyparser = require("body-parser");


const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { body,oneOf ,validationResult } = require('express-validator');
const SECRET = "bacth8landaury";

router.use(bodyparser());
router.get("/details",async(req,res)=>{
    const user = await User.find()
    return res.json({
        status:"fetched successfully",
        user
    })
})
//========================user Registration=====================// 
router.post("/register",body("email"), body("name"),body("phone"),body("password"),body("state"),body("district") ,body("address"),body("pincode"),async (req, res) => {
    try { 
      //======checking validation must contain email name password====////
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //destructuring required body values
        const  {name, email, password,phone,state,district,address,pincode}= req.body;
        //======encoding user enter password while registrations===///
        bcrypt.hash(password, 10, async function(err, hash) {
         
            if(err){
                res.status(400).json({
                    status: "failed",
                    message: "Invalid details"
                })
            }
            const user = await User.create(
                {
                    name, 
                    email, 
                    password:hash,
                    phone,
                    state,
                    district,
                    address,
                    pincode
                }
            );
            res.json({
                status: "success",
                user
            })
        });
       
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }
})





// ,oneOf([body("email"),body("phone")]), body("password")
//========================user login =====================// 

router.post("/login",oneOf([body("email"),body("phone")]), body("password") ,async (req, res) => {
    try {
        //======checking validation must contain  email and password===//
       
     
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {email, password,phone} = req.body;
            
        //========finding correct user with help of user email ======//

        if (email){
            const user = await User.findOne({email:email});
            if(!user){
                res.status(401).json({
                    status:"failed",
                    message:"Invalid user"
                })
        }
        bcrypt.compare(password, user.password).then(function(result) {
            if(result){
                var token = jwt.sign({_id:user._id}, SECRET);
                res.json({
                    status: "sucess",
                    token
                })
            }else{
                res.status(401).json({
                    status: "failed",
                    message: "Not Authenticated"
                })
            }
        });
        }else if (phone){
            const user = await User.findOne({phone:phone});
            if(!user){
                res.status(401).json({
                    status:"failed",
                    message:"Invalid user"
                })
        }
        bcrypt.compare(password, user.password).then(function(result) {
            if(result){
                var token = jwt.sign({data:user._id}, SECRET);
                
                res.json({
                    status: "sucess",
                    token
                })
            }else{
                res.status(401).json({
                    status: "failed",
                    message: "Not Authenticated"
                })
            }
        });
        }
        
    
       
        // // =============comparing user enter password and database contain password=======//
       
       
    } catch (e) {
        res.json({
            status: "user-failed",
            message: e.message
        })
    }
})

module.exports = router;