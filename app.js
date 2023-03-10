const express = require('express');
const app = express();
const path=require('path');
const chatRouter=require('./routes/chat');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig");

app.use("/chat",chatRouter);

const server = app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/chat');
});
const io=require('socket.io')(server);

io.on("connection",(socket)=>{
    console.log("New user connected");
    io.emit('msg','a new user has been connected !');

    socket.on('disconnect',()=>{
        console.log("User disconnected");
    });
});