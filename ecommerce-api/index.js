const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv") ;
const userRoute = require("./routes/users") ;
const authRoute = require("./routes/auth") ;
const productRoute = require("./routes/product") ;
const orderRoute = require("./routes/order") ;
const cartRoute = require("./routes/cart")

dotenv.config() ;

const app = express();

mongoose.connect(process.env.MONGO_URL
).then(() => {
    console.log("db connection succesful")
}).catch((e) => {
    console.log(e)
}) ;

app.use(express.json()) ;

app.use("/api/users" , userRoute) ;

app.use("/api/auth" , authRoute) ;

app.use("/api/products" , productRoute) ;

app.use("/api/orders" , orderRoute) ;

app.use("/api/cart" , cartRoute) ;



app.listen(process.env.PORT || 5000, () => {
    console.log("back end server is running")
})