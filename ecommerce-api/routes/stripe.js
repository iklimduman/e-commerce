const router = require("express").Router();
const dotenv = require('dotenv');
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY) ;

router.post("/payment" , (req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"USD",
    } , (stripeErr , striperes)=>{
        if(stripeErr){
            console.log("stripe payment err") ;
            console.log(stripeErr) ;
            res.status(500).json(stripeErr)
        }
        else{
            console.log("stripe payment success") ;
            res.status(200).json(striperes)
        }
    })
})

module.exports = router ;