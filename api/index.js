const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successfull!"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json())

app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})


app.use("/api/auth", authRoute);