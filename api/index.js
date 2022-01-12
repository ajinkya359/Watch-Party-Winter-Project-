const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const sessions=require("./routes/sessions")
var cookieParser = require("cookie-parser");
// const socket = require('socket.io')
var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successfull!"))
.catch((err)=>{
    console.log(err);
});

// app.use(express.static('./client/public'));
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
app.use(cors())
const server = app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})

const io =  require('socket.io')(server , {               //To allow CORS for socket.io
  cors: {
    origin:"*"
  },
}
)

io.on('connection', (socket)=>{      //listening for an event
  console.log('made socket connection', socket.id) ;

  socket.on('send-message', function(data){   //When a message is sent form a client to the server. When the message with the name 'chat' comes from a client then the server will take the message
     console.log("message recieved", data.msg)
      io.sockets.emit('recieve-message', data, console.log("emmiting msg from the server"));  //and will emit that message to all the sockets(i.e all the clients) connected to the server.
  });
})               

app.use("/api/auth", authRoute);
app.use("/api/sessions",sessions)