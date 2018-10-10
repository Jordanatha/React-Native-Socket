const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port =  8000;
const index = require("./index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

var text = "testing"

/*
install node dlu
npm install express
npm install socket.io
buat yang client npm install socket.io-client*/

//Give the emit(data) to the front to be shown
io.on("connection", socket => {
  console.log("New client connected"), socket.emit("FromAPI", text);
  socket.on("disconnect", () => console.log("Client disconnected"));
});
//Listen to a certain port
server.listen(port, () => console.log(`Listening on port ${port}`));