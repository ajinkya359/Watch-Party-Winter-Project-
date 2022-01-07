const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const sessions=require("./routes/sessions")
var cookieParser = require("cookie-parser");



dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successfull!"))
.catch((err)=>{
    console.log(err);
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  

app.use(express.json())
app.use(cookieParser());


app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})


app.use("/api/auth", authRoute);
app.use("/api/sessions",sessions)