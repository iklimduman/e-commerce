const router = require("express").Router();
const { update } = require("../Models/User");
const User = require("../Models/User");
const { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

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

    try {

        // default mongoDB function
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser);
    }
    catch (err) {

        res.status(400).json("Error!");
    }
});

// DELETE
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others)
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router