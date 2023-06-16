const express = require("express");
const socket = require("socket.io");

const app=express();

//render public index.html
app.use(express.static("public"))

const server = app.listen(6060,()=>{
    console.log("server is runig on port 6060");
})

const io = socket(server);
io.on("connection",(socket)=>{
    //console.log(socket.id)

    socket.on("chat",(data)=>{
        io.sockets.emit("chat",data)
    })
socket.on("typing",(data)=>{

    socket.broadcast.emit("typing",data);
})
   
})                                                                