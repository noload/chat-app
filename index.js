const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");

const io = socketio(server);

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  setInterval(() => {
    socket.emit("messages");
  }, 2000);
});
server.listen(3000, () => {
  console.log("server started");
});
