// as best practice log in process needed to be on seperate place other than user.js

const router = require("express").Router() ;
const User = require("../Models/User") ;

// REGISTER
// on register method user is the one who sends the info. So it needed to be post req.
router.post("/register" , async (req,res)=>{
    const newUser = new User(
        {
            username : req.body.username,
            email : req.body.email ,
            password : req.body.password ,
        }
    );
    // newUser locally created, to send user data to DB use save()
    // save() is a promise s its async
    try {
        const savedUser = await newUser.save();
        console.log(savedUser) ;
        res.status(201).json(savedUser) ;
    }
    catch(err){
        console.log(err) ;
        res.status(500).json(err) ;
    }

});



module.exports = router ;