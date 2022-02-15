const router = require("express").Router();
const { update } = require("../Models/User");
const User = require("../Models/User") ;
const { verifyToken, verifyTokenAuthorization } = require("./verifyToken");

/* TEST CODE FOR GET AND POST 
router.get("/usertest" , (req,res) =>{
    res.send("res send succesful")
} )

router.post("/userposttest" , (req,res) => {
    const username = req.body.username ;
    console.log(username) ;
    res.send("your username is " + username)
}) ;
*/

// we can register 

router.put("/:id", verifyTokenAuthorization, async (req, res) => {
   
    if (req.body.password) {
        
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }

    try{
        
        // default mongoDB function
        const updatedUser = await User.findByIdAndUpdate(req.params.id , {
            $set : req.body
        },{new : true})
        res.status(200).json(updatedUser);
    }
    catch(err){
        
        res.status(400).json("Error!") ;
    }
})

module.exports = router