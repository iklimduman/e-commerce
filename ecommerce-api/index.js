const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv") ;
const userRoute = require("./routes/users") ;

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

app.listen(process.env.PORT || 5000, () => {
    console.log("back end server is running")
})