// as best practice log in process needed to be on seperate place other than user.js

const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const encUtf16 = require("crypto-js/enc-utf16");
const jwt = require("jsonwebtoken");

// REGISTER
// on register method user is the one who sends the info. So it needed to be post req.
router.post("/register", async (req, res) => {
    const newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,
                process.env.PASS_SEC).toString(),
        }
    );
    // newUser locally created, to send user data to DB use save()
    // save() is a promise s its async
    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });

        const hashedPassword = CryptoJS.AES.decrypt(user.password,
            process.env.PASS_SEC);
        const pass = hashedPassword.toString(CryptoJS.enc.Utf8);
        console.log("--" + pass);

        if (!user) {
            res.status(401).json("Wrong user!");
        }
        else if (pass !== req.body.password) {
            res.status(401).json("Wrong pass!");
        }
        else {

            const accesToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
                process.env.JWT_SEC,
                { expiresIn: "3d" }
            )

            const { password, ...others } = user._doc;

            res.status(200).json({...others , accesToken});
        }

    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;