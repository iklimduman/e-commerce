const router = require("express").Router() ;


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

module.exports = router